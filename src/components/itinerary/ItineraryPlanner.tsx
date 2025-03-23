
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CalendarDays, 
  Clock, 
  MapPin, 
  Bus, 
  Hotel, 
  Utensils, 
  Camera, 
  ArrowRight, 
  Info, 
  Clock3, 
  ArrowUpDown,
  Check,
  X
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Sample itinerary data
const itineraryDays = [
  {
    day: 1,
    date: new Date(2023, 10, 20),
    activities: [
      {
        id: "a1",
        time: "09:00 AM",
        type: "transport",
        title: "Depart from Delhi",
        location: "New Delhi Railway Station",
        duration: "4 hours",
        description: "Shatabdi Express to Agra",
        icon: Bus,
        color: "bg-blue-50 text-blue-600",
        status: "confirmed"
      },
      {
        id: "a2",
        time: "01:00 PM",
        type: "sightseeing",
        title: "Taj Mahal",
        location: "Agra, Uttar Pradesh",
        duration: "3 hours",
        description: "Guided tour of the Taj Mahal",
        icon: Camera,
        color: "bg-purple-50 text-purple-600",
        status: "confirmed"
      },
      {
        id: "a3",
        time: "04:30 PM",
        type: "sightseeing",
        title: "Agra Fort",
        location: "Agra, Uttar Pradesh",
        duration: "2 hours",
        description: "Explore the historic Agra Fort",
        icon: Camera,
        color: "bg-purple-50 text-purple-600",
        status: "confirmed"
      },
      {
        id: "a4",
        time: "07:00 PM",
        type: "food",
        title: "Dinner at Peshawri",
        location: "ITC Mughal, Agra",
        duration: "1.5 hours",
        description: "Authentic North Indian cuisine",
        icon: Utensils,
        color: "bg-amber-50 text-amber-600",
        status: "confirmed"
      },
      {
        id: "a5",
        time: "09:00 PM",
        type: "accommodation",
        title: "Check-in at Hotel",
        location: "Radisson Blu, Agra",
        duration: "Overnight",
        description: "5-star accommodation near Taj Mahal",
        icon: Hotel,
        color: "bg-green-50 text-green-600",
        status: "confirmed"
      }
    ]
  },
  {
    day: 2,
    date: new Date(2023, 10, 21),
    activities: [
      {
        id: "b1",
        time: "08:00 AM",
        type: "food",
        title: "Breakfast at Hotel",
        location: "Radisson Blu, Agra",
        duration: "1 hour",
        description: "Buffet breakfast",
        icon: Utensils,
        color: "bg-amber-50 text-amber-600",
        status: "confirmed"
      },
      {
        id: "b2",
        time: "10:00 AM",
        type: "sightseeing",
        title: "Fatehpur Sikri",
        location: "Fatehpur Sikri, Agra",
        duration: "3 hours",
        description: "Visit the ancient city",
        icon: Camera,
        color: "bg-purple-50 text-purple-600",
        status: "confirmed"
      },
      {
        id: "b3",
        time: "01:30 PM",
        type: "food",
        title: "Lunch at Dasaprakash",
        location: "Civil Lines, Agra",
        duration: "1.5 hours",
        description: "South Indian cuisine",
        icon: Utensils,
        color: "bg-amber-50 text-amber-600",
        status: "suggested"
      },
      {
        id: "b4",
        time: "04:00 PM",
        type: "transport",
        title: "Train to Jaipur",
        location: "Agra Cantt Railway Station",
        duration: "4 hours",
        description: "Shatabdi Express to Jaipur",
        icon: Bus,
        color: "bg-blue-50 text-blue-600",
        status: "confirmed"
      }
    ]
  },
  {
    day: 3,
    date: new Date(2023, 10, 22),
    activities: [
      {
        id: "c1",
        time: "09:00 AM",
        type: "sightseeing",
        title: "Amber Fort",
        location: "Amer, Jaipur",
        duration: "3 hours",
        description: "Explore the magnificent Amber Fort",
        icon: Camera,
        color: "bg-purple-50 text-purple-600",
        status: "confirmed"
      }
    ]
  }
];

// Activity component
const Activity = ({ activity, isLast }: { activity: any, isLast: boolean }) => {
  return (
    <div className="flex group">
      <div className="flex flex-col items-center mr-4">
        <div className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center",
          activity.color
        )}>
          <activity.icon className="h-5 w-5" />
        </div>
        {!isLast && (
          <div className="w-0.5 bg-travel-neutral-200 flex-grow mt-2"></div>
        )}
      </div>
      
      <Card className={cn(
        "flex-1 mb-4 shadow-sm group-hover:shadow-elevation-1 transition-all border-travel-neutral-100",
        activity.status === "suggested" ? "border-dashed border-travel-neutral-300" : ""
      )}>
        <CardContent className="p-4">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-travel-neutral-500 text-sm flex items-center mb-1">
                <Clock className="h-3.5 w-3.5 mr-1" />
                <span>{activity.time}</span>
                {activity.duration && (
                  <>
                    <span className="mx-1">•</span>
                    <span>{activity.duration}</span>
                  </>
                )}
              </div>
              
              <h4 className="font-medium text-travel-neutral-900">{activity.title}</h4>
              
              {activity.location && (
                <div className="text-travel-neutral-600 text-sm flex items-center mt-1">
                  <MapPin className="h-3.5 w-3.5 mr-1" />
                  <span>{activity.location}</span>
                </div>
              )}
              
              {activity.description && (
                <p className="text-travel-neutral-500 text-sm mt-2">
                  {activity.description}
                </p>
              )}
            </div>
            
            <div className="flex items-center space-x-1">
              {activity.status === "confirmed" ? (
                <div className="text-xs font-medium bg-green-50 text-green-700 px-2 py-0.5 rounded-full flex items-center">
                  <Check className="h-3 w-3 mr-1" />
                  Confirmed
                </div>
              ) : (
                <div className="text-xs font-medium bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full flex items-center">
                  <Info className="h-3 w-3 mr-1" />
                  Suggested
                </div>
              )}
            </div>
          </div>
          
          <div className="flex items-center justify-end space-x-2 mt-3 pt-3 border-t border-travel-neutral-100">
            <Button variant="ghost" size="sm" className="text-travel-neutral-600 hover:text-travel-blue hover:bg-travel-blue/5">
              Edit
            </Button>
            
            {activity.status === "suggested" ? (
              <Button size="sm" className="bg-travel-blue hover:bg-travel-blue-dark">
                Confirm
              </Button>
            ) : (
              <Button variant="outline" size="sm" className="border-travel-blue/20 text-travel-blue hover:bg-travel-blue/5">
                Reschedule
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Daily Itinerary component
const DailyItinerary = ({ day }: { day: typeof itineraryDays[0] }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-travel-blue text-white flex items-center justify-center mr-4">
            <span className="font-bold">D{day.day}</span>
          </div>
          <div>
            <h3 className="font-semibold text-travel-neutral-900">Day {day.day}</h3>
            <p className="text-travel-neutral-500 text-sm">
              {day.date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
        
        <Button variant="outline" size="sm" className="border-travel-blue/20 text-travel-blue hover:bg-travel-blue/5">
          <ArrowUpDown className="h-4 w-4 mr-2" />
          Reorder
        </Button>
      </div>
      
      <div className="pl-2">
        {day.activities.map((activity, index) => (
          <Activity 
            key={activity.id} 
            activity={activity} 
            isLast={index === day.activities.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export function ItineraryPlanner() {
  const [date, setDate] = useState<Date | undefined>(new Date(2023, 10, 20));
  
  return (
    <section className="page-section">
      <div className="content-wrapper">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-travel-blue/10 text-travel-blue mb-4">
            <CalendarDays className="h-4 w-4 mr-2" />
            Smart Trip Planning
          </div>
          
          <h2 className="heading-lg mb-4 text-travel-neutral-900">
            Your <span className="text-travel-blue">Perfect Itinerary</span> Planner
          </h2>
          
          <p className="text-travel-neutral-600 text-lg">
            Automatically plan a day-wise schedule based on your travel time, budget, and sightseeing preferences.
            Customize as needed to create your dream journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Card className="border-travel-neutral-100 shadow-elevation-1">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-travel-neutral-900">
                    The Golden Triangle Trip
                  </h3>
                  
                  <Button className="bg-travel-blue hover:bg-travel-blue-dark">
                    Share Itinerary
                  </Button>
                </div>
                
                <div className="flex items-center space-x-6 mb-8 pb-6 border-b border-travel-neutral-200">
                  <div className="flex items-center space-x-2">
                    <Clock3 className="h-4 w-4 text-travel-neutral-500" />
                    <span className="text-travel-neutral-600">5 Days, 4 Nights</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-travel-neutral-500" />
                    <span className="text-travel-neutral-600">Delhi • Agra • Jaipur</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CalendarDays className="h-4 w-4 text-travel-neutral-500" />
                    <span className="text-travel-neutral-600">Nov 20 - Nov 24, 2023</span>
                  </div>
                </div>
                
                <Tabs defaultValue="timeline">
                  <TabsList className="mb-6">
                    <TabsTrigger value="timeline">Timeline View</TabsTrigger>
                    <TabsTrigger value="map">Map View</TabsTrigger>
                    <TabsTrigger value="summary">Summary</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="timeline" className="space-y-6">
                    {itineraryDays.map((day) => (
                      <DailyItinerary key={day.day} day={day} />
                    ))}
                  </TabsContent>
                  
                  <TabsContent value="map">
                    <div className="bg-travel-blue-light/30 rounded-lg h-96 flex items-center justify-center">
                      <p className="text-travel-neutral-600">Map view will be available soon</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="summary">
                    <div className="bg-travel-blue-light/30 rounded-lg h-96 flex items-center justify-center">
                      <p className="text-travel-neutral-600">Summary view will be available soon</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="border-travel-neutral-100 shadow-elevation-1">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-travel-neutral-900 mb-4">Trip Calendar</h3>
                
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border mb-4"
                  disabled={(date) => 
                    date < new Date(2023, 10, 20) || 
                    date > new Date(2023, 10, 24)
                  }
                />
                
                <div className="mt-6 pt-6 border-t border-travel-neutral-200 space-y-4">
                  <h4 className="font-medium text-travel-neutral-900">Legend</h4>
                  
                  <div className="space-y-3">
                    {[
                      { icon: Bus, color: "bg-blue-50 text-blue-600", label: "Transportation" },
                      { icon: Camera, color: "bg-purple-50 text-purple-600", label: "Sightseeing" },
                      { icon: Utensils, color: "bg-amber-50 text-amber-600", label: "Food & Dining" },
                      { icon: Hotel, color: "bg-green-50 text-green-600", label: "Accommodation" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center space-x-3">
                        <div className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center",
                          item.color
                        )}>
                          <item.icon className="h-4 w-4" />
                        </div>
                        <span className="text-travel-neutral-600 text-sm">{item.label}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-travel-blue/5 rounded-lg p-4 mt-4">
                    <h4 className="font-medium text-travel-neutral-900 mb-2">Trip Stats</h4>
                    <div className="space-y-2 text-sm text-travel-neutral-600">
                      <div className="flex justify-between">
                        <span>Total Activities:</span>
                        <span className="font-medium text-travel-neutral-900">12</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Confirmed:</span>
                        <span className="font-medium text-travel-neutral-900">9</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Suggested:</span>
                        <span className="font-medium text-travel-neutral-900">3</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Button className="w-full mt-4 bg-travel-blue-dark hover:bg-travel-blue-dark/90">
              Add New Activity
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
