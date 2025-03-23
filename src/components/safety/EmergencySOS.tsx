
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Shield, Phone, MapPin, AlertTriangle, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export function EmergencySOS() {
  const [isSOSActive, setIsSOSActive] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const { toast } = useToast();
  
  const handleSOSClick = () => {
    if (!isSOSActive) {
      setIsSOSActive(true);
      
      // Start countdown
      let timer = 5;
      const interval = setInterval(() => {
        timer--;
        setCountdown(timer);
        
        if (timer <= 0) {
          clearInterval(interval);
          
          // Simulated emergency contact
          toast({
            title: "Emergency Services Contacted",
            description: "Your location has been shared with emergency services and your emergency contacts.",
            variant: "destructive"
          });
        }
      }, 1000);
      
      // Allow cancellation
      return () => clearInterval(interval);
    } else {
      setIsSOSActive(false);
      setCountdown(5);
      
      toast({
        title: "Emergency Alert Cancelled",
        description: "The emergency alert has been cancelled.",
      });
    }
  };
  
  return (
    <div className="fixed bottom-20 right-4 z-50">
      {isSOSActive ? (
        <div className="p-4 bg-red-100 border-2 border-red-600 rounded-lg shadow-lg w-72 animate-pulse">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-red-700 flex items-center">
              <AlertTriangle className="mr-2 h-5 w-5" />
              Emergency Alert Active
            </h3>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-6 w-6 p-0 text-red-700 hover:bg-red-200"
              onClick={() => setIsSOSActive(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <Alert className="mb-3 border-red-500 bg-red-50">
            <AlertTitle className="text-red-700">
              Contacting Help in {countdown}...
            </AlertTitle>
            <AlertDescription>
              Your location is being tracked. Emergency services will be contacted shortly.
            </AlertDescription>
          </Alert>
          
          <div className="grid grid-cols-2 gap-2">
            <Button 
              className="w-full bg-red-700 hover:bg-red-800"
              onClick={handleSOSClick}
            >
              Cancel
            </Button>
            <Button 
              className="w-full bg-blue-700 hover:bg-blue-800"
              onClick={() => {
                setIsSOSActive(false);
                toast({
                  title: "Calling Emergency Number",
                  description: "Connecting you to emergency services directly.",
                });
              }}
            >
              Call Now
            </Button>
          </div>
        </div>
      ) : (
        <Button 
          className="rounded-full w-12 h-12 flex items-center justify-center shadow-lg bg-red-600 hover:bg-red-700"
          onClick={handleSOSClick}
          aria-label="Emergency SOS button"
        >
          <Phone className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}
