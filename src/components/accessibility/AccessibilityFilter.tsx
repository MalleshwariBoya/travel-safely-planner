
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useAccessibility } from "@/context/AccessibilityContext";
import { AlertTriangle, Filter, Wheelchair, Volume2, BrainCircuit, Shield, Heart } from "lucide-react";

export function AccessibilityFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const { preferences } = useAccessibility();
  
  const [filters, setFilters] = useState({
    wheelchairAccessible: false,
    hearingAssistance: false,
    visualAssistance: false,
    cognitiveFriendly: false,
    verifiedSafe: false,
    medicalSupport: false
  });
  
  const activeFilterCount = Object.values(filters).filter(Boolean).length;
  
  const toggleFilter = (key: keyof typeof filters) => {
    setFilters(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between">
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Filter className="h-4 w-4" />
          <span>Accessibility Filters</span>
          {activeFilterCount > 0 && (
            <Badge variant="secondary" className="ml-1">
              {activeFilterCount}
            </Badge>
          )}
        </Button>
        
        {activeFilterCount > 0 && (
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setFilters({
              wheelchairAccessible: false,
              hearingAssistance: false,
              visualAssistance: false,
              cognitiveFriendly: false,
              verifiedSafe: false,
              medicalSupport: false
            })}
          >
            Clear
          </Button>
        )}
      </div>
      
      {isOpen && (
        <div className="mt-3 p-4 border border-gray-200 rounded-lg bg-gray-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-start space-x-2">
            <Checkbox 
              id="wheelchair" 
              checked={filters.wheelchairAccessible}
              onCheckedChange={() => toggleFilter('wheelchairAccessible')}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="wheelchair"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
              >
                <Wheelchair className="h-4 w-4 mr-1 text-blue-600" />
                Wheelchair Accessible
              </label>
              <p className="text-xs text-muted-foreground">
                Transport with ramps, lifts or designated spaces
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-2">
            <Checkbox 
              id="hearing" 
              checked={filters.hearingAssistance}
              onCheckedChange={() => toggleFilter('hearingAssistance')}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="hearing"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
              >
                <Volume2 className="h-4 w-4 mr-1 text-green-600" />
                Hearing Assistance
              </label>
              <p className="text-xs text-muted-foreground">
                Visual alerts and hearing loop systems
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-2">
            <Checkbox 
              id="visual" 
              checked={filters.visualAssistance}
              onCheckedChange={() => toggleFilter('visualAssistance')}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="visual"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
              >
                <AlertTriangle className="h-4 w-4 mr-1 text-amber-600" />
                Visual Assistance
              </label>
              <p className="text-xs text-muted-foreground">
                Braille signage and audio announcements
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-2">
            <Checkbox 
              id="cognitive" 
              checked={filters.cognitiveFriendly}
              onCheckedChange={() => toggleFilter('cognitiveFriendly')}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="cognitive"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
              >
                <BrainCircuit className="h-4 w-4 mr-1 text-purple-600" />
                Cognitive Friendly
              </label>
              <p className="text-xs text-muted-foreground">
                Simple layouts and clear instructions
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-2">
            <Checkbox 
              id="verified" 
              checked={filters.verifiedSafe}
              onCheckedChange={() => toggleFilter('verifiedSafe')}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="verified"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
              >
                <Shield className="h-4 w-4 mr-1 text-red-600" />
                Verified Safe
              </label>
              <p className="text-xs text-muted-foreground">
                Certified accessible and safety verified
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-2">
            <Checkbox 
              id="medical" 
              checked={filters.medicalSupport}
              onCheckedChange={() => toggleFilter('medicalSupport')}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="medical"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
              >
                <Heart className="h-4 w-4 mr-1 text-pink-600" />
                Medical Support
              </label>
              <p className="text-xs text-muted-foreground">
                Staff trained for medical emergencies
              </p>
            </div>
          </div>
        </div>
      )}
      
      {(preferences.mobilityFeatures && activeFilterCount > 0) && (
        <div className="mt-3 p-3 rounded-lg bg-blue-50 border border-blue-200 text-sm text-blue-800">
          <p className="flex items-center">
            <Wheelchair className="h-4 w-4 mr-2" />
            <span><strong>{activeFilterCount}</strong> accessibility filters applied. Showing only transport options that meet these requirements.</span>
          </p>
        </div>
      )}
    </div>
  );
}
