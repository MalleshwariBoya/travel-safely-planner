
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, VolumeX } from "lucide-react";
import { useVoiceAssistant } from "@/hooks/useVoiceAssistant";
import { useAccessibility } from "@/context/AccessibilityContext";
import { cn } from "@/lib/utils";

export function VoiceAssistantButton() {
  const [isMuted, setIsMuted] = useState(false);
  const { preferences } = useAccessibility();
  const { isListening, startListening, speak } = useVoiceAssistant();
  
  if (!preferences.voiceAssistant) return null;
  
  return (
    <div className="fixed bottom-4 left-4 z-50 flex space-x-2">
      <Button 
        className={cn(
          "rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-colors",
          isListening 
            ? "bg-green-500 hover:bg-green-600 animate-pulse" 
            : "bg-travel-blue hover:bg-travel-blue-dark"
        )}
        onClick={startListening}
        aria-label={isListening ? "Listening..." : "Activate voice assistant"}
      >
        <Mic className="h-6 w-6" />
      </Button>
      
      <Button 
        className={cn(
          "rounded-full w-12 h-12 flex items-center justify-center shadow-lg",
          isMuted ? "bg-red-500 hover:bg-red-600" : "bg-gray-200 hover:bg-gray-300 text-gray-700"
        )}
        onClick={() => {
          setIsMuted(!isMuted);
          if (!isMuted) {
            window.speechSynthesis.cancel();
          } else {
            speak("Voice feedback enabled");
          }
        }}
        aria-label={isMuted ? "Unmute voice feedback" : "Mute voice feedback"}
      >
        {isMuted ? <VolumeX className="h-6 w-6" /> : <MicOff className="h-6 w-6" />}
      </Button>
    </div>
  );
}
