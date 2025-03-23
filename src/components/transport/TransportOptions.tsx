
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Bus, 
  Train, 
  Plane, 
  Clock, 
  ArrowRight, 
  ArrowLeft, 
  Star, 
  ShieldCheck, 
  IndianRupee,
  CalendarClock,
  Calendar
} from "lucide-react";

const transportTypes = [
  { id: "train", name: "Train", icon: Train, count: 12 },
  { id: "bus", name: "Bus", icon: Bus, count: 8 },
  { id: "flight", name: "Flight", icon: Plane, count: 5 },
];

const trainOptions = [
  {
    id: "train1",
    name: "Rajdhani Express",
    number: "12953",
    departure: "23:55",
    arrival: "10:30",
    duration: "10h 35m",
    price: 1250,
    available: 42,
    rating: 4.5,
    verified: true,
    classes: ["Sleeper", "3A", "2A", "1A"],
    departureStation: "H Nizamuddin (NZM)",
    arrivalStation: "Mumbai Central (MMCT)"
  },
  {
    id: "train2",
    name: "Duronto Express",
    number: "12262",
    departure: "08:25",
    arrival: "16:45",
    duration: "8h 20m",
    price: 950,
    available: 16,
    rating: 4.3,
    verified: true,
    classes: ["Sleeper", "3A", "2A"],
    departureStation: "New Delhi (NDLS)",
    arrivalStation: "Pune Junction (PUNE)"
  },
  {
    id: "train3",
    name: "Shatabdi Express",
    number: "12001",
    departure: "06:15",
    arrival: "12:45",
    duration: "6h 30m",
    price: 750,
    available: 84,
    rating: 4.7,
    verified: true,
    classes: ["CC", "EC"],
    departureStation: "New Delhi (NDLS)",
    arrivalStation: "Bhopal Junction (BPL)"
  },
];

const busOptions = [
  {
    id: "bus1",
    name: "APSRTC Volvo A/C",
    departure: "20:30",
    arrival: "06:45",
    duration: "10h 15m",
    price: 850,
    available: 13,
    rating: 4.2,
    verified: true,
    type: "Volvo Multi-Axle Semi Sleeper",
    departurePoint: "Hyderabad, Mahatma Gandhi Bus Station",
    arrivalPoint: "Bangalore, Kempegowda Bus Station"
  },
  {
    id: "bus2",
    name: "KSRTC Airavat Club Class",
    departure: "21:45",
    arrival: "05:30",
    duration: "7h 45m",
    price: 1200,
    available: 8,
    rating: 4.6,
    verified: true,
    type: "Scania Multi-Axle Sleeper",
    departurePoint: "Bangalore, Shantinagar TTMC",
    arrivalPoint: "Goa, Panjim Bus Stand"
  },
  {
    id: "bus3",
    name: "RSRTC Mercedes-Benz",
    departure: "18:15",
    arrival: "07:00",
    duration: "12h 45m",
    price: 1050,
    available: 21,
    rating: 4.0,
    verified: true,
    type: "Mercedes-Benz Semi Sleeper",
    departurePoint: "Jaipur, Sindhi Camp",
    arrivalPoint: "Delhi, Kashmere Gate ISBT"
  },
];

const flightOptions = [
  {
    id: "flight1",
    name: "IndiGo",
    flightNumber: "6E 123",
    departure: "08:15",
    arrival: "10:00",
    duration: "1h 45m",
    price: 3250,
    available: 24,
    rating: 4.1,
    verified: true,
    departureAirport: "DEL - Delhi, Indira Gandhi International",
    arrivalAirport: "BOM - Mumbai, Chhatrapati Shivaji Maharaj International"
  },
  {
    id: "flight2",
    name: "Air India",
    flightNumber: "AI 657",
    departure: "14:30",
    arrival: "17:00",
    duration: "2h 30m",
    price: 4350,
    available: 16,
    rating: 3.9,
    verified: true,
    departureAirport: "DEL - Delhi, Indira Gandhi International",
    arrivalAirport: "BLR - Bangalore, Kempegowda International"
  },
];

interface TransportCardProps {
  type: string;
  data: any;
}

function TransportCard({ type, data }: TransportCardProps) {
  const TypeIcon = transportTypes.find(t => t.id === type)?.icon || Bus;

  return (
    <div className="bg-white rounded-lg shadow-elevation-1 hover:shadow-elevation-2 border border-travel-neutral-100 transition-all duration-300 overflow-hidden">
      <div className="p-4 border-b border-travel-neutral-100 flex justify-between items-center">
        <div className="flex items-center">
          <div className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center mr-3",
            type === "train" ? "bg-blue-50 text-blue-600" : 
            type === "bus" ? "bg-amber-50 text-amber-600" : 
            "bg-green-50 text-green-600"
          )}>
            <TypeIcon className="h-5 w-5" />
          </div>
          <div>
            <div className="font-semibold text-travel-neutral-900">{data.name}</div>
            <div className="text-sm text-travel-neutral-500">
              {type === "train" ? `#${data.number}` : 
               type === "bus" ? data.type : 
               data.flightNumber}
            </div>
          </div>
        </div>
        {data.verified && (
          <Badge className="bg-green-50 text-green-700 hover:bg-green-100 border border-green-200">
            <ShieldCheck className="h-3.5 w-3.5 mr-1" />
            Verified
          </Badge>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="text-center">
            <div className="text-xl font-bold text-travel-neutral-900">{data.departure}</div>
            <div className="text-xs text-travel-neutral-500 mt-1">
              {type === "train" ? data.departureStation : 
               type === "bus" ? data.departurePoint : 
               data.departureAirport}
            </div>
          </div>
          
          <div className="flex-1 flex flex-col items-center px-4">
            <div className="text-xs text-travel-neutral-500 mb-1">{data.duration}</div>
            <div className="w-full flex items-center">
              <div className="h-0.5 flex-grow bg-travel-neutral-200"></div>
              <ArrowRight className="h-4 w-4 text-travel-neutral-400 mx-1" />
              <div className="h-0.5 flex-grow bg-travel-neutral-200"></div>
            </div>
            <div className="flex items-center mt-1">
              <Clock className="h-3.5 w-3.5 text-travel-neutral-400 mr-1" />
              <span className="text-xs text-travel-neutral-500">Direct</span>
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-xl font-bold text-travel-neutral-900">{data.arrival}</div>
            <div className="text-xs text-travel-neutral-500 mt-1">
              {type === "train" ? data.arrivalStation : 
               type === "bus" ? data.arrivalPoint : 
               data.arrivalAirport}
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between py-3 border-t border-travel-neutral-100">
          <div className="flex items-center">
            <IndianRupee className="h-4 w-4 text-travel-blue mr-1" />
            <span className="font-bold text-travel-neutral-900 text-lg">₹{data.price}</span>
            <span className="text-travel-neutral-500 text-sm ml-1">per person</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="flex items-center text-amber-500">
              <Star className="h-4 w-4 fill-current mr-1" />
              <span className="font-medium">{data.rating}</span>
            </div>
            <Button size="sm" className="bg-travel-blue hover:bg-travel-blue-dark">
              Book Now
            </Button>
          </div>
        </div>
        
        <div className="pt-2 text-xs text-travel-neutral-500 flex items-center">
          <CalendarClock className="h-3.5 w-3.5 mr-1" />
          <span>{data.available} seats available</span>
          
          {type === "train" && (
            <div className="ml-4 flex items-center space-x-2">
              {data.classes.map((cls: string) => (
                <Badge 
                  key={cls} 
                  variant="outline" 
                  className="text-[10px] py-0 border-travel-neutral-200"
                >
                  {cls}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function TransportOptions() {
  return (
    <section className="page-section">
      <div className="content-wrapper">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-travel-blue/10 text-travel-blue mb-4">
            <Calendar className="h-4 w-4 mr-2" />
            Available Transport Options
          </div>
          
          <h2 className="heading-lg mb-4 text-travel-neutral-900">
            Find and Book <span className="text-travel-blue">Reliable Transport</span>
          </h2>
          
          <p className="text-travel-neutral-600 text-lg">
            Choose from a wide range of verified transportation options including trains, buses, and flights with real-time tracking and transparent pricing.
          </p>
        </div>
        
        <div className="mb-8">
          <div className="bg-white p-6 rounded-xl shadow-elevation-1 mb-8">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="text-xl font-semibold text-travel-neutral-900">Delhi to Mumbai</h3>
                <p className="text-travel-neutral-500">Mon, 20 Nov 2023 • 1 Traveler</p>
              </div>
              
              <Button variant="outline" className="border-travel-blue/20 text-travel-blue hover:bg-travel-blue/5">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Modify Search
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="train">
            <TabsList className="mb-8">
              {transportTypes.map((type) => (
                <TabsTrigger key={type.id} value={type.id} className="flex items-center">
                  <type.icon className="h-4 w-4 mr-2" />
                  <span>{type.name}</span>
                  <Badge variant="secondary" className="ml-2 bg-travel-neutral-100">
                    {type.count}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value="train" className="space-y-4">
              {trainOptions.map((train) => (
                <TransportCard key={train.id} type="train" data={train} />
              ))}
            </TabsContent>
            
            <TabsContent value="bus" className="space-y-4">
              {busOptions.map((bus) => (
                <TransportCard key={bus.id} type="bus" data={bus} />
              ))}
            </TabsContent>
            
            <TabsContent value="flight" className="space-y-4">
              {flightOptions.map((flight) => (
                <TransportCard key={flight.id} type="flight" data={flight} />
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
