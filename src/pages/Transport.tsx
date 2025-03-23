
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TransportOptions } from "@/components/transport/TransportOptions";
import { AccessibilityPanel } from "@/components/accessibility/AccessibilityPanel";
import { VoiceAssistantButton } from "@/components/accessibility/VoiceAssistantButton";
import { AccessibilityFilter } from "@/components/accessibility/AccessibilityFilter";
import { EmergencySOS } from "@/components/safety/EmergencySOS";
import { useAccessibility } from "@/context/AccessibilityContext";
import { useVoiceAssistant } from "@/hooks/useVoiceAssistant";
import { useEffect } from "react";

const Transport = () => {
  const { preferences } = useAccessibility();
  const { speak } = useVoiceAssistant();
  
  useEffect(() => {
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
        <div className={preferences.reducedMotion ? '' : 'animate-on-scroll opacity-0'}>
          <div className="content-wrapper">
            <AccessibilityFilter />
            <TransportOptions />
          </div>
        </div>
      </main>
      
      <Footer />
      <AccessibilityPanel />
      <VoiceAssistantButton />
      <EmergencySOS />
    </div>
  );
};

export default Transport;
