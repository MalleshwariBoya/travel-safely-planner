
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { 
  Search, 
  MapPin, 
  Calendar,
  IndianRupee,
} from "lucide-react";

export function Hero() {
  const [activeTab, setActiveTab] = useState("route");

  const heroTabs = [
    { id: "route", label: "Find Route", icon: MapPin },
    { id: "transport", label: "Book Transport", icon: Calendar },
    { id: "budget", label: "Budget Planner", icon: IndianRupee },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-travel-blue-light/30 to-white z-0"></div>
      
      {/* Background shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-travel-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-travel-accent/5 rounded-full blur-3xl"></div>
      
      <div className="content-wrapper relative z-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 stagger-animation">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-travel-blue/10 text-travel-blue">
              <span className="flex h-2 w-2 rounded-full bg-travel-blue mr-2"></span>
              Trusted by over 10,000 travelers in India
            </div>
            
            <h1 className="heading-xl text-balance">
              <span className="text-travel-neutral-900">Travel India</span>
              <span className="block text-travel-blue"> Smarter & Safer</span>
            </h1>
            
            <p className="text-travel-neutral-600 text-lg sm:text-xl leading-relaxed max-w-2xl">
              Plan your perfect trip based on your budget. Find safe transportation, trusted accommodations, and create smart itineraries for your Indian adventure.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-travel-blue text-white shadow-lg shadow-travel-blue/20 hover:bg-travel-blue-dark transition-all duration-300 text-base px-6 py-6"
                size="lg"
              >
                Start Planning
              </Button>
              <Button
                variant="outline"
                className="border-travel-blue/20 text-travel-blue hover:bg-travel-blue/5 transition-all duration-300 text-base px-6 py-6"
                size="lg"
              >
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-travel-blue-light flex items-center justify-center text-xs font-medium text-travel-blue"
                  >
                    {["AB", "KP", "MS", "DR"][i-1]}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm text-travel-neutral-600">
                  Trusted by <span className="font-semibold text-travel-neutral-900">10,000+</span> travelers
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-glass p-1 relative animate-scale-up">
            {/* Glass card effect */}
            <div className="absolute inset-0 bg-gradient-radial from-white/80 to-transparent rounded-2xl pointer-events-none"></div>
            
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              {/* Search tabs */}
              <div className="flex border-b">
                {heroTabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={cn(
                      "flex-1 flex items-center justify-center space-x-2 py-4 px-2 text-sm font-medium transition-colors",
                      activeTab === tab.id
                        ? "text-travel-blue border-b-2 border-travel-blue"
                        : "text-travel-neutral-500 hover:text-travel-neutral-900"
                    )}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <tab.icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
              
              {/* Search form */}
              <div className="p-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="from" className="text-travel-neutral-700">From</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-travel-neutral-400" />
                        <Input 
                          id="from" 
                          placeholder="Departure city" 
                          className="pl-10 bg-travel-neutral-50 border-travel-neutral-200 focus:border-travel-blue focus:ring-travel-blue/20"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="to" className="text-travel-neutral-700">To</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-travel-neutral-400" />
                        <Input 
                          id="to" 
                          placeholder="Destination city" 
                          className="pl-10 bg-travel-neutral-50 border-travel-neutral-200 focus:border-travel-blue focus:ring-travel-blue/20"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-travel-neutral-700">Date</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-travel-neutral-400" />
                        <Input 
                          id="date" 
                          type="date"
                          className="pl-10 bg-travel-neutral-50 border-travel-neutral-200 focus:border-travel-blue focus:ring-travel-blue/20"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-travel-neutral-700">Budget (₹)</Label>
                      <div className="relative">
                        <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-travel-neutral-400" />
                        <Input 
                          id="budget" 
                          type="number"
                          placeholder="Your budget" 
                          className="pl-10 bg-travel-neutral-50 border-travel-neutral-200 focus:border-travel-blue focus:ring-travel-blue/20"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-travel-blue hover:bg-travel-blue-dark py-6 mt-2 group transition-all duration-300">
                    <Search className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                    <span>Search</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
