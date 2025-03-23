
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Hotel, 
  Star, 
  MapPin, 
  Shield, 
  IndianRupee, 
  Coffee, 
  Utensils,
  Wifi,
  ShieldCheck,
  Heart,
  Search
} from "lucide-react";

const hotels = [
  {
    id: "hotel1",
    name: "Taj Palace",
    location: "New Delhi",
    rating: 4.8,
    reviews: 2463,
    price: 8500,
    type: "5-star hotel",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    distance: "3.2 km from city center",
    features: ["Free Wifi", "24/7 Room Service", "Swimming Pool", "Spa"],
    verified: true,
    safetyScore: 98,
    soloFriendly: true
  },
  {
    id: "hotel2",
    name: "The Oberoi",
    location: "Mumbai",
    rating: 4.9,
    reviews: 1892,
    price: 12000,
    type: "Luxury hotel",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800",
    distance: "1.5 km from city center",
    features: ["Free Wifi", "24/7 Room Service", "Sea View", "Fine Dining"],
    verified: true,
    safetyScore: 99,
    soloFriendly: true
  },
  {
    id: "hotel3",
    name: "Leela Palace",
    location: "Bengaluru",
    rating: 4.7,
    reviews: 1540,
    price: 9200,
    type: "5-star hotel",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=800",
    distance: "4.8 km from city center",
    features: ["Free Wifi", "Airport Transfer", "Business Center", "Gym"],
    verified: true,
    safetyScore: 95,
    soloFriendly: true
  }
];

const restaurants = [
  {
    id: "rest1",
    name: "Bukhara",
    location: "ITC Maurya, New Delhi",
    rating: 4.8,
    reviews: 3254,
    priceRange: "₹₹₹₹",
    cuisine: "North Indian, Mughlai",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800",
    distance: "2.3 km from city center",
    features: ["Veg Options", "Fine Dining", "Award Winning"],
    verified: true,
    safetyScore: 97
  },
  {
    id: "rest2",
    name: "Indian Accent",
    location: "The Lodhi, New Delhi",
    rating: 4.9,
    reviews: 2187,
    priceRange: "₹₹₹₹",
    cuisine: "Modern Indian",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    distance: "3.5 km from city center",
    features: ["Veg Options", "Fine Dining", "Romantic"],
    verified: true,
    safetyScore: 98
  },
  {
    id: "rest3",
    name: "Karim's",
    location: "Old Delhi",
    rating: 4.6,
    reviews: 8762,
    priceRange: "₹₹",
    cuisine: "Mughlai, North Indian",
    image: "https://images.unsplash.com/photo-1631292784640-1c8298b771c5?auto=format&fit=crop&q=80&w=800",
    distance: "0.5 km from city center",
    features: ["Authentic", "Historic", "Budget Friendly"],
    verified: true,
    safetyScore: 90
  }
];

const HotelCard = ({ hotel }: { hotel: typeof hotels[0] }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  return (
    <Card className="overflow-hidden shadow-elevation-1 hover:shadow-elevation-2 transition-all duration-300 border-travel-neutral-100">
      <div className="relative">
        <img 
          src={hotel.image} 
          alt={hotel.name}
          className="h-48 w-full object-cover"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm hover:bg-white/90 h-8 w-8"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart className={cn("h-4 w-4", isFavorite ? "fill-red-500 text-red-500" : "text-gray-600")} />
        </Button>
        
        {hotel.soloFriendly && (
          <Badge className="absolute bottom-2 left-2 bg-travel-blue/90 hover:bg-travel-blue">
            <Shield className="h-3 w-3 mr-1" />
            Solo Traveler Safe
          </Badge>
        )}
      </div>
      
      <CardContent className="p-4">
        <div className="mb-2 flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-travel-neutral-900">{hotel.name}</h3>
            <div className="flex items-center text-travel-neutral-500 text-sm">
              <MapPin className="h-3.5 w-3.5 mr-1" />
              <span>{hotel.location}</span>
            </div>
          </div>
          
          <div className="flex items-center bg-travel-neutral-50 px-2 py-1 rounded text-sm">
            <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500 mr-1" />
            <span className="font-medium text-travel-neutral-900">{hotel.rating}</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="text-sm text-travel-neutral-600">{hotel.type} • {hotel.distance}</div>
          
          <div className="flex flex-wrap gap-1">
            {hotel.features.slice(0, 3).map((feature) => (
              <Badge 
                key={feature} 
                variant="outline" 
                className="bg-travel-neutral-50 border-travel-neutral-200 text-travel-neutral-700 font-normal"
              >
                {feature}
              </Badge>
            ))}
            {hotel.features.length > 3 && (
              <Badge 
                variant="outline" 
                className="bg-travel-neutral-50 border-travel-neutral-200 text-travel-neutral-700 font-normal"
              >
                +{hotel.features.length - 3} more
              </Badge>
            )}
          </div>
          
          {hotel.verified && (
            <div className="flex items-center text-green-600 text-sm">
              <ShieldCheck className="h-4 w-4 mr-1" />
              <span>Verified • Safety Score {hotel.safetyScore}%</span>
            </div>
          )}
          
          <div className="flex items-center justify-between pt-2">
            <div>
              <div className="flex items-center">
                <IndianRupee className="h-4 w-4 text-travel-blue" />
                <span className="font-bold text-travel-neutral-900 text-lg">{hotel.price}</span>
              </div>
              <div className="text-travel-neutral-500 text-xs">per night</div>
            </div>
            
            <Button size="sm" className="bg-travel-blue hover:bg-travel-blue-dark">
              View Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const RestaurantCard = ({ restaurant }: { restaurant: typeof restaurants[0] }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  return (
    <Card className="overflow-hidden shadow-elevation-1 hover:shadow-elevation-2 transition-all duration-300 border-travel-neutral-100">
      <div className="relative">
        <img 
          src={restaurant.image} 
          alt={restaurant.name}
          className="h-48 w-full object-cover"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm hover:bg-white/90 h-8 w-8"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart className={cn("h-4 w-4", isFavorite ? "fill-red-500 text-red-500" : "text-gray-600")} />
        </Button>
      </div>
      
      <CardContent className="p-4">
        <div className="mb-2 flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-travel-neutral-900">{restaurant.name}</h3>
            <div className="flex items-center text-travel-neutral-500 text-sm">
              <MapPin className="h-3.5 w-3.5 mr-1" />
              <span>{restaurant.location}</span>
            </div>
          </div>
          
          <div className="flex items-center bg-travel-neutral-50 px-2 py-1 rounded text-sm">
            <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500 mr-1" />
            <span className="font-medium text-travel-neutral-900">{restaurant.rating}</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="text-sm text-travel-neutral-600">
            {restaurant.cuisine} • {restaurant.priceRange}
          </div>
          
          <div className="flex flex-wrap gap-1">
            {restaurant.features.map((feature) => (
              <Badge 
                key={feature} 
                variant="outline" 
                className="bg-travel-neutral-50 border-travel-neutral-200 text-travel-neutral-700 font-normal"
              >
                {feature}
              </Badge>
            ))}
          </div>
          
          {restaurant.verified && (
            <div className="flex items-center text-green-600 text-sm">
              <ShieldCheck className="h-4 w-4 mr-1" />
              <span>Verified • Safety Score {restaurant.safetyScore}%</span>
            </div>
          )}
          
          <div className="flex items-center justify-between pt-2">
            <div className="text-travel-neutral-600 text-sm">
              {restaurant.distance}
            </div>
            
            <Button size="sm" className="bg-travel-blue hover:bg-travel-blue-dark">
              View Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export function StayOptions() {
  return (
    <section className="page-section">
      <div className="content-wrapper">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-travel-blue/10 text-travel-blue mb-4">
            <Hotel className="h-4 w-4 mr-2" />
            Verified Accommodations & Dining
          </div>
          
          <h2 className="heading-lg mb-4 text-travel-neutral-900">
            Safe <span className="text-travel-blue">Stays & Dining</span> Options
          </h2>
          
          <p className="text-travel-neutral-600 text-lg">
            Discover verified hotels and restaurants that meet our strict safety standards, 
            perfect for solo travelers and tourists exploring India.
          </p>
        </div>
        
        <div className="mb-10">
          <div className="flex items-center justify-between mb-8">
            <div className="space-y-1">
              <h3 className="text-xl font-semibold text-travel-neutral-900">Delhi</h3>
              <p className="text-travel-neutral-500">20-25 Nov • 2 Guests</p>
            </div>
            
            <Button className="bg-travel-blue hover:bg-travel-blue-dark">
              <Search className="h-4 w-4 mr-2" />
              Modify Search
            </Button>
          </div>
          
          <Tabs defaultValue="hotels">
            <TabsList className="mb-8">
              <TabsTrigger value="hotels" className="flex items-center">
                <Hotel className="h-4 w-4 mr-2" />
                <span>Hotels</span>
              </TabsTrigger>
              <TabsTrigger value="restaurants" className="flex items-center">
                <Utensils className="h-4 w-4 mr-2" />
                <span>Restaurants</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="hotels">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hotels.map((hotel) => (
                  <HotelCard key={hotel.id} hotel={hotel} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="restaurants">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {restaurants.map((restaurant) => (
                  <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="bg-travel-blue-light/30 rounded-xl p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-travel-neutral-900">
                Safety First For Solo Travelers
              </h3>
              <p className="text-travel-neutral-600">
                We prioritize your safety with our strict verification process. Every accommodation 
                and dining option is checked for security measures, staff training, and positive 
                reviews from solo travelers.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                {[
                  {icon: ShieldCheck, title: "100% Verified", desc: "All properties verified by our team"},
                  {icon: Wifi, title: "Free WiFi", desc: "Stay connected for safety"},
                  {icon: Coffee, title: "Solo Dining", desc: "Comfortable spaces for solo travelers"},
                  {icon: Star, title: "Quality Standards", desc: "Minimum 4.2+ rating required"},
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-2">
                    <div className="p-2 rounded-full bg-white text-travel-blue mt-1">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium text-travel-neutral-900">{item.title}</h4>
                      <p className="text-xs text-travel-neutral-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-lg p-4 shadow-elevation-2 max-w-md mx-auto">
                <div className="flex items-center space-x-4 mb-4 pb-4 border-b border-travel-neutral-100">
                  <div className="bg-travel-blue/10 rounded-full p-3">
                    <Shield className="h-6 w-6 text-travel-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-travel-neutral-900">TravelSmart Safety Score</h4>
                    <p className="text-sm text-travel-neutral-600">Our proprietary safety rating system</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    {name: "Location Safety", score: 92},
                    {name: "Property Security", score: 96},
                    {name: "Staff Verification", score: 98},
                    {name: "Solo Traveler Reviews", score: 94},
                    {name: "Emergency Response", score: 95},
                  ].map((item) => (
                    <div key={item.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-travel-neutral-700">{item.name}</span>
                        <span className="text-sm font-medium text-travel-neutral-900">{item.score}%</span>
                      </div>
                      <div className="w-full bg-travel-neutral-100 rounded-full h-1.5">
                        <div 
                          className="bg-travel-blue h-1.5 rounded-full" 
                          style={{ width: `${item.score}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="pt-2 flex justify-between items-center border-t border-travel-neutral-100">
                    <div className="text-sm text-travel-neutral-600">Overall Safety Score</div>
                    <div className="text-lg font-bold text-travel-blue">95%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
