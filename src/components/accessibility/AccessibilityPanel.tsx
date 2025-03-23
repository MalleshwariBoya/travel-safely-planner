import { useState } from "react";
import { 
  Eye, 
  Type, 
  Contrast, 
  MonitorSmartphone, 
  Volume2, 
  Accessibility,
  X,
  MessageSquareText,
  Settings2,
  SunMoon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/components/ui/use-toast";
import { useAccessibility } from "@/context/AccessibilityContext";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

export function AccessibilityPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const { preferences, updatePreference, togglePreference, resetPreferences } = useAccessibility();
  const { toast } = useToast();
  const [fontSize, setFontSize] = useState(100);

  const handleFontSizeChange = (value: number[]) => {
    setFontSize(value[0]);
    document.documentElement.style.fontSize = `${value[0]}%`;
  };

  const handleToggleVoiceAssistant = () => {
    const newValue = !preferences.voiceAssistant;
    togglePreference('voiceAssistant');
    
    toast({
      title: newValue ? "Voice Assistant Activated" : "Voice Assistant Deactivated",
      description: newValue 
        ? "You can now use voice commands. Say 'Help' for assistance." 
        : "Voice commands are now disabled.",
      duration: 3000,
    });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative">
        {isOpen ? (
          <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 w-80">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg flex items-center">
                <Settings2 className="mr-2 h-5 w-5" />
                Accessibility Options
              </h3>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-7 w-7 p-0" 
                onClick={() => setIsOpen(false)}
                aria-label="Close accessibility panel"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Contrast className="h-5 w-5 mr-2 text-purple-500" />
                  <span>High Contrast</span>
                </div>
                <Switch 
                  checked={preferences.highContrast}
                  onCheckedChange={(checked) => updatePreference('highContrast', checked)}
                  aria-label="Toggle high contrast mode"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Type className="h-5 w-5 mr-2 text-blue-500" />
                    <span>Text Size</span>
                  </div>
                  <Switch 
                    checked={preferences.largeText}
                    onCheckedChange={(checked) => updatePreference('largeText', checked)}
                    aria-label="Toggle large text mode"
                  />
                </div>
                <Slider 
                  defaultValue={[100]} 
                  max={150} 
                  min={80} 
                  step={5}
                  value={[fontSize]}
                  onValueChange={handleFontSizeChange}
                  aria-label="Adjust font size"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Smaller</span>
                  <span>{fontSize}%</span>
                  <span>Larger</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <MonitorSmartphone className="h-5 w-5 mr-2 text-green-500" />
                  <span>Reduced Motion</span>
                </div>
                <Switch 
                  checked={preferences.reducedMotion}
                  onCheckedChange={(checked) => updatePreference('reducedMotion', checked)}
                  aria-label="Toggle reduced motion"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Eye className="h-5 w-5 mr-2 text-amber-500" />
                  <span>Screen Reader</span>
                </div>
                <Switch 
                  checked={preferences.screenReader}
                  onCheckedChange={(checked) => updatePreference('screenReader', checked)}
                  aria-label="Toggle screen reader support"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Accessibility className="h-5 w-5 mr-2 text-red-500" />
                  <span>Mobility Features</span>
                </div>
                <Switch 
                  checked={preferences.mobilityFeatures}
                  onCheckedChange={(checked) => updatePreference('mobilityFeatures', checked)}
                  aria-label="Toggle mobility features"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Volume2 className="h-5 w-5 mr-2 text-indigo-500" />
                  <span>Voice Assistant</span>
                </div>
                <Switch 
                  checked={preferences.voiceAssistant}
                  onCheckedChange={handleToggleVoiceAssistant}
                  aria-label="Toggle voice assistant"
                />
              </div>
              
              <Collapsible className="w-full">
                <CollapsibleTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full mt-2 flex items-center justify-between">
                    <div className="flex items-center">
                      <MessageSquareText className="h-4 w-4 mr-2" />
                      <span>Voice Commands</span>
                    </div>
                    <span className="text-xs opacity-70">Click to expand</span>
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="text-sm mt-2 space-y-2 border-l-2 border-blue-200 pl-3">
                  <p><strong>"Help"</strong> - List available commands</p>
                  <p><strong>"Book transport"</strong> - Start booking process</p>
                  <p><strong>"Find accessible hotels"</strong> - Search accessible accommodations</p>
                  <p><strong>"Emergency"</strong> - Access SOS features</p>
                  <p><strong>"Accessibility options"</strong> - Open this panel</p>
                </CollapsibleContent>
              </Collapsible>
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full mt-2" 
                onClick={resetPreferences}
              >
                Reset All Settings
              </Button>
            </div>
          </div>
        ) : (
          <Button 
            className={cn(
              "rounded-full w-12 h-12 flex items-center justify-center shadow-lg",
              preferences.highContrast ? "bg-yellow-400 text-black" : "bg-travel-blue hover:bg-travel-blue-dark"
            )}
            onClick={() => setIsOpen(true)}
            aria-label="Open accessibility options"
          >
            <Accessibility className="h-6 w-6" />
          </Button>
        )}
      </div>
    </div>
  );
}
