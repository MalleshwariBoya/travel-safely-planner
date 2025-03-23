
import { toast } from "@/hooks/use-toast";

interface TripPlanParams {
  from: string;
  to: string;
  date: string;
  travelers: number;
  accessibility?: {
    wheelchairAccess?: boolean;
    visionAssistance?: boolean;
    hearingAssistance?: boolean;
  };
}

interface TransportOption {
  id: string;
  type: string;
  provider: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  duration: string;
  accessible: boolean;
  accessibility: {
    wheelchairAccess: boolean;
    visualAids: boolean;
    hearingAids: boolean;
    assistanceAvailable: boolean;
  };
  rating: number;
  reviewCount: number;
}

export const travelService = {
  planTrip: async (tripData: TripPlanParams): Promise<boolean> => {
    try {
      // Simulate API call
      console.log("Planning trip with:", tripData);
      
      // Store trip data in localStorage for use in transport options page
      localStorage.setItem("currentTrip", JSON.stringify(tripData));
      
      toast({
        title: "Trip Planned!",
        description: "Redirecting you to transportation options.",
      });
      
      return true;
    } catch (error) {
      console.error("Trip planning error:", error);
      toast({
        title: "Trip planning failed",
        description: "Please try again later",
        variant: "destructive",
      });
      return false;
    }
  },
  
  getTransportOptions: async (): Promise<TransportOption[]> => {
    // Simulate API call to get transport options based on trip data
    const tripData = localStorage.getItem("currentTrip");
    
    // Generate mock transport options
    const mockOptions: TransportOption[] = [
      {
        id: "1",
        type: "Train",
        provider: "Indian Railways",
        departureTime: "08:30",
        arrivalTime: "12:45",
        price: 1200,
        duration: "4h 15m",
        accessible: true,
        accessibility: {
          wheelchairAccess: true,
          visualAids: true,
          hearingAids: false,
          assistanceAvailable: true,
        },
        rating: 4.2,
        reviewCount: 156,
      },
      {
        id: "2",
        type: "Bus",
        provider: "State Transport",
        departureTime: "09:15",
        arrivalTime: "14:30",
        price: 800,
        duration: "5h 15m",
        accessible: true,
        accessibility: {
          wheelchairAccess: true,
          visualAids: false,
          hearingAids: false,
          assistanceAvailable: true,
        },
        rating: 3.8,
        reviewCount: 92,
      },
      {
        id: "3",
        type: "Cab",
        provider: "AccessGo Cabs",
        departureTime: "Flexible",
        arrivalTime: "~3 hours",
        price: 2500,
        duration: "3h",
        accessible: true,
        accessibility: {
          wheelchairAccess: true,
          visualAids: true,
          hearingAids: true,
          assistanceAvailable: true,
        },
        rating: 4.7,
        reviewCount: 68,
      },
    ];
    
    return mockOptions;
  },
  
  getSafetyInformation: async (location: string): Promise<any> => {
    // Mock API call to get safety information for a location
    console.log(`Getting safety information for: ${location}`);
    
    // Return mock safety data
    return {
      safetyScore: 4.2,
      emergencyContacts: [
        { name: "Police", number: "100" },
        { name: "Ambulance", number: "108" },
        { name: "Tourist Helpline", number: "1363" },
      ],
      safeZones: [
        { name: "Central Market", location: "City Center", accessibilityScore: 4.5 },
        { name: "Tourist Village", location: "North District", accessibilityScore: 4.8 },
      ],
    };
  },
};
