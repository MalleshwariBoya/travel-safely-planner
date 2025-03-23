
import { cn } from "@/lib/utils";
import { 
  IndianRupee, 
  Bus, 
  Hotel, 
  Calendar, 
  Shield,
  ArrowRight,
  Check 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Budget-Based Travel Planning",
    description: "Enter your budget, and we'll suggest the best possible travel routes with multiple options and cost estimates.",
    icon: IndianRupee,
    color: "bg-blue-50 text-blue-600",
    link: "/",
  },
  {
    title: "Transport & Ticket Booking",
    description: "Find and book buses, trains, and flights with real-time tracking of government RTC buses and their prices.",
    icon: Bus,
    color: "bg-amber-50 text-amber-600",
    link: "/transport",
  },
  {
    title: "Trusted Hotels & Restaurants",
    description: "Discover verified hotels and restaurants based on your budget and reviews, highlighting safe stays for solo travelers.",
    icon: Hotel,
    color: "bg-green-50 text-green-600",
    link: "/stays",
  },
  {
    title: "Smart Itinerary Planner",
    description: "Get a personalized day-wise schedule based on travel time and sightseeing options that you can customize.",
    icon: Calendar,
    color: "bg-purple-50 text-purple-600",
    link: "/itinerary",
  },
  {
    title: "Security & Privacy",
    description: "Stay protected with fraud prevention, emergency SOS button, and verified guides and transport services.",
    icon: Shield,
    color: "bg-red-50 text-red-600",
    link: "/safety",
  },
];

interface FeatureCardProps {
  feature: typeof features[0];
  index: number;
}

function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <div 
      className="group relative rounded-2xl bg-white p-6 shadow-elevation-1 hover:shadow-elevation-3 transition-all duration-300 flex flex-col h-full"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="mb-4">
        <div className={cn("inline-flex items-center justify-center rounded-xl p-3", feature.color)}>
          <feature.icon className="h-6 w-6" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-travel-neutral-900 mb-2">{feature.title}</h3>
      <p className="text-travel-neutral-600 mb-6 flex-grow">{feature.description}</p>
      <Link to={feature.link} className="inline-flex items-center text-travel-blue font-medium group-hover:underline">
        Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}

export function Features() {
  return (
    <section className="bg-gradient-to-b from-white to-travel-blue-light/20 page-section">
      <div className="content-wrapper">
        <div className="text-center max-w-3xl mx-auto mb-16 stagger-animation">
          <h2 className="heading-lg mb-4 text-travel-neutral-900">
            All-in-One <span className="text-travel-blue">Travel Assistant</span>
          </h2>
          <p className="text-travel-neutral-600 text-lg leading-relaxed">
            Our smart platform helps you plan, book, and enjoy your trip across India with confidence, simplifying travel while ensuring safety and affordability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 stagger-animation">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
        
        <div className="bg-white rounded-3xl shadow-elevation-2 p-8 md:p-12 mt-16 animate-scale-up">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3 space-y-6">
              <h3 className="heading-md text-travel-neutral-900">
                Ready to Start Your <span className="text-travel-blue">Journey?</span>
              </h3>
              <p className="text-travel-neutral-600">
                Begin planning your next adventure across India with confidence. Our smart travel assistant helps you every step of the way.
              </p>
              <ul className="space-y-3">
                {[
                  "Personalized travel recommendations",
                  "Real-time transport information",
                  "Verified hotels and restaurants",
                  "Complete safety features for travelers",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <Check className="h-5 w-5 text-travel-blue shrink-0 mt-0.5 mr-2" />
                    <span className="text-travel-neutral-600">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Button 
                  className="bg-travel-blue hover:bg-travel-blue-dark shadow-lg shadow-travel-blue/10 transition-all duration-300"
                  size="lg"
                >
                  Create Your Trip Now
                </Button>
              </div>
            </div>
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="relative rounded-2xl overflow-hidden shadow-elevation-3 aspect-[3/4] bg-travel-blue-light">
                  <div className="absolute inset-0 bg-gradient-to-t from-travel-blue-dark/70 to-transparent"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=600" 
                    alt="Taj Mahal in Agra, India" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <h4 className="font-semibold mb-1">Taj Mahal, Agra</h4>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1 text-sm">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>Uttar Pradesh</span>
                        </div>
                        <div className="text-sm font-medium">
                          From ₹5,000
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 rounded-xl overflow-hidden shadow-elevation-2 aspect-square w-24 sm:w-32 bg-amber-50">
                  <img 
                    src="https://images.unsplash.com/photo-1602642977157-b7c8b8003afd?auto=format&fit=crop&q=80&w=300" 
                    alt="Hawa Mahal in Jaipur, India" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
