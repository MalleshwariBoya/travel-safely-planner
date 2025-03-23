
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TransportOptions } from "@/components/transport/TransportOptions";
import { AccessibilityPanel } from "@/components/accessibility/AccessibilityPanel";
import { VoiceAssistantButton } from "@/components/accessibility/VoiceAssistantButton";
import { AccessibilityFilter } from "@/components/accessibility/AccessibilityFilter";
import { EmergencySOS } from "@/components/safety/EmergencySOS";
import { useAccessibility } from "@/context/AccessibilityContext";
import { useVoiceAssistant } from "@/hooks/useVoiceAssistant";
import { useEffect, useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { toast } from "@/hooks/use-toast";
import { Info } from "lucide-react";
import { travelService } from "@/services/travelService";

const Transport = () => {
  const { preferences } = useAccessibility();
  const { speak } = useVoiceAssistant();
  const [isLoading, setIsLoading] = useState(true);
  const [tripData, setTripData] = useState<any>(null);
  
  useEffect(() => {
    // Get trip data from localStorage
    const storedTripData = localStorage.getItem("currentTrip");
    if (storedTripData) {
      setTripData(JSON.parse(storedTripData));
    }
    
    // Show welcome toast
    setTimeout(() => {
      toast({
        title: "Transport Options Loaded",
        description: "Find and book accessible transportation here",
        duration: 5000,
      });
      setIsLoading(false);
    }, 1000);
    
    // Announce page for screen readers
    if (preferences.screenReader) {
      speak("Transport booking page loaded. Here you can find and book accessible transportation options.");
    }
    
    // Smooth scroll animation for the entire page (disabled if reduced motion is on)
    if (!preferences.reducedMotion) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      });

      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.observe(el);
      });

      return () => {
        document.querySelectorAll('.animate-on-scroll').forEach((el) => {
          observer.unobserve(el);
        });
      };
    }
  }, [preferences.reducedMotion, preferences.screenReader, speak]);

  return (
    <div className={`min-h-screen flex flex-col bg-white ${preferences.highContrast ? 'high-contrast' : ''}`}>
      <Navbar />
      
      <main className="flex-grow pt-24">
        {isLoading ? (
          <div className="content-wrapper py-12">
            <div className="bg-gray-100 animate-pulse rounded-xl h-96"></div>
          </div>
        ) : (
          <>
            <div className={preferences.reducedMotion ? '' : 'animate-on-scroll opacity-0'}>
              <div className="content-wrapper">
                <Alert className="mb-6 border-blue-200 bg-blue-50">
                  <AlertDescription className="flex items-center text-blue-800">
                    <Info className="h-4 w-4 mr-2" />
                    {tripData ? (
                      <>Showing transportation options from <strong>{tripData.from}</strong> to <strong>{tripData.to}</strong> on <strong>{tripData.date}</strong> for <strong>{tripData.travelers}</strong> traveler(s).</>
                    ) : (
                      <>Here are your transportation options based on your search parameters. Use accessibility filters to customize your results.</>
                    )}
                  </AlertDescription>
                </Alert>
                <AccessibilityFilter />
                <TransportOptions />
              </div>
            </div>
          </>
        )}
      </main>
      
      <Footer />
      <AccessibilityPanel />
      <VoiceAssistantButton />
      <EmergencySOS />
    </div>
  );
};

export default Transport;
