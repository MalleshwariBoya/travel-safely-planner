
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  AlertTriangle, 
  Phone, 
  Shield, 
  CheckCircle, 
  ExternalLink, 
  MapPin, 
  Bell,
  Info
} from "lucide-react";
import { cn } from "@/lib/utils";

const emergencyContacts = [
  { name: "Police", number: "100", icon: Shield },
  { name: "Ambulance", number: "108", icon: Phone },
  { name: "Tourist Helpline", number: "1363", icon: Phone },
  { name: "Women Helpline", number: "1091", icon: Phone },
];

const safetyTips = [
  {
    title: "Keep Digital Copies",
    description: "Store digital copies of important documents like passport, visa, and tickets in your email."
  },
  {
    title: "Share Your Itinerary",
    description: "Let someone you trust know about your travel plans and check in regularly."
  },
  {
    title: "Use Registered Transport",
    description: "Only use registered taxis, buses and trains. Avoid unofficial transport options."
  },
  {
    title: "Be Cautious with Strangers",
    description: "Be polite but cautious when strangers approach you offering deals or assistance."
  },
  {
    title: "Research Local Customs",
    description: "Learn about local customs and dress codes to respect local culture and avoid unwanted attention."
  },
  {
    title: "Stay Connected",
    description: "Keep your phone charged and carry a portable charger. Buy a local SIM card for consistent connectivity."
  },
];

export function EmergencyAssistance() {
  return (
    <section className="page-section">
      <div className="content-wrapper">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-travel-blue/10 text-travel-blue mb-4">
            <Shield className="h-4 w-4 mr-2" />
            Safety First
          </div>
          
          <h2 className="heading-lg mb-4 text-travel-neutral-900">
            Travel <span className="text-travel-blue">Safely & Securely</span>
          </h2>
          
          <p className="text-travel-neutral-600 text-lg">
            Your safety is our priority. Access emergency services, get safety tips, 
            and stay protected throughout your journey in India.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Tabs defaultValue="emergency">
              <TabsList className="mb-6">
                <TabsTrigger value="emergency">Emergency Help</TabsTrigger>
                <TabsTrigger value="safetyTips">Safety Tips</TabsTrigger>
                <TabsTrigger value="scamAlert">Scam Alerts</TabsTrigger>
              </TabsList>
              
              <TabsContent value="emergency">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <Card className="border-travel-neutral-100 shadow-elevation-1 bg-red-50 overflow-hidden">
                    <div className="border-b border-red-200 bg-white p-4">
                      <h3 className="font-semibold text-travel-neutral-900 flex items-center">
                        <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                        SOS Emergency
                      </h3>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-travel-neutral-600 mb-4">
                        Tap the button below to connect immediately with local emergency services
                      </p>
                      <Button 
                        className="w-full bg-red-600 hover:bg-red-700 text-white py-6"
                        size="lg"
                      >
                        <Phone className="h-5 w-5 mr-2 animate-pulse" />
                        <span className="font-bold">Emergency SOS</span>
                      </Button>
                      <p className="text-xs text-travel-neutral-500 mt-3 text-center">
                        Your location will be shared with emergency services
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-travel-neutral-100 shadow-elevation-1">
                    <div className="border-b border-travel-neutral-200 p-4">
                      <h3 className="font-semibold text-travel-neutral-900 flex items-center">
                        <Phone className="h-5 w-5 text-travel-blue mr-2" />
                        Emergency Contacts
                      </h3>
                    </div>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {emergencyContacts.map((contact) => (
                          <div 
                            key={contact.name} 
                            className="flex items-center justify-between border border-travel-neutral-200 rounded-md p-3 hover:bg-travel-neutral-50 transition-colors"
                          >
                            <div className="flex items-center">
                              <div className="p-2 rounded-full bg-travel-blue/10 text-travel-blue mr-3">
                                <contact.icon className="h-4 w-4" />
                              </div>
                              <span className="text-travel-neutral-900">{contact.name}</span>
                            </div>
                            <a 
                              href={`tel:${contact.number}`}
                              className="font-medium text-travel-blue hover:underline"
                            >
                              {contact.number}
                            </a>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <Card className="border-travel-neutral-100 shadow-elevation-1">
                  <div className="border-b border-travel-neutral-200 p-4">
                    <h3 className="font-semibold text-travel-neutral-900 flex items-center">
                      <MapPin className="h-5 w-5 text-travel-blue mr-2" />
                      Nearby Safety Services
                    </h3>
                  </div>
                  <CardContent className="p-6">
                    <div className="bg-travel-blue-light/30 rounded-lg h-64 flex items-center justify-center">
                      <p className="text-travel-neutral-600">Map view will display nearby police stations, hospitals, and emergency services</p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                      {[
                        { name: "Police Stations", distance: "2 nearby", icon: Shield },
                        { name: "Hospitals", distance: "3 nearby", icon: Phone },
                        { name: "Tourist Police", distance: "1 nearby", icon: Info },
                      ].map((item) => (
                        <Button 
                          key={item.name}
                          variant="outline" 
                          className="justify-start border-travel-blue/20 text-travel-neutral-700 hover:bg-travel-blue/5"
                        >
                          <item.icon className="h-4 w-4 text-travel-blue mr-2" />
                          <div className="text-left">
                            <div className="font-medium">{item.name}</div>
                            <div className="text-xs text-travel-neutral-500">{item.distance}</div>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="safetyTips">
                <Card className="border-travel-neutral-100 shadow-elevation-1">
                  <div className="border-b border-travel-neutral-200 p-4">
                    <h3 className="font-semibold text-travel-neutral-900 flex items-center">
                      <CheckCircle className="h-5 w-5 text-travel-blue mr-2" />
                      Safety Tips for Travelers in India
                    </h3>
                  </div>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {safetyTips.map((tip, index) => (
                        <div 
                          key={index} 
                          className="flex space-x-3 bg-travel-neutral-50 p-4 rounded-lg"
                        >
                          <div className="mt-1 p-2 rounded-full bg-white text-travel-blue h-fit">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium text-travel-neutral-900 mb-1">{tip.title}</h4>
                            <p className="text-sm text-travel-neutral-600">{tip.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-travel-neutral-200">
                      <h4 className="font-medium text-travel-neutral-900 mb-3">Additional Resources</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          { name: "India Tourism Safety Guidelines", link: "#" },
                          { name: "Embassy & Consulate Contacts", link: "#" },
                          { name: "Travel Insurance Recommendations", link: "#" },
                          { name: "Local Transportation Safety", link: "#" },
                        ].map((resource) => (
                          <a 
                            key={resource.name}
                            href={resource.link}
                            className="flex items-center justify-between p-3 border border-travel-neutral-200 rounded-md hover:bg-travel-neutral-50 transition-colors"
                          >
                            <span className="text-travel-neutral-900">{resource.name}</span>
                            <ExternalLink className="h-4 w-4 text-travel-blue" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="scamAlert">
                <Card className="border-travel-neutral-100 shadow-elevation-1">
                  <div className="border-b border-travel-neutral-200 p-4">
                    <h3 className="font-semibold text-travel-neutral-900 flex items-center">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
                      Common Scams to Avoid
                    </h3>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {[
                        {
                          title: "Fake Travel Agencies",
                          description: "Beware of unofficial agencies offering extremely cheap deals. Always book through verified platforms or official websites.",
                          warning: "High Risk"
                        },
                        {
                          title: "Taxi Overcharging",
                          description: "Some taxi drivers might take longer routes or claim their meter is broken. Use ride-hailing apps or pre-paid taxi services at airports.",
                          warning: "Medium Risk"
                        },
                        {
                          title: "False Guides",
                          description: "Unregistered guides may approach you at tourist spots offering special access or information. Only use guides with official ID cards.",
                          warning: "High Risk"
                        },
                        {
                          title: "Gem and Carpet Scams",
                          description: "Be cautious of shops claiming to sell valuable gems or carpets at 'special prices'. These are often overpriced or fake.",
                          warning: "Medium Risk"
                        },
                      ].map((scam, index) => (
                        <div key={index} className="border border-amber-200 rounded-lg overflow-hidden">
                          <div className={cn(
                            "p-3 border-b",
                            scam.warning === "High Risk" ? "bg-red-50 border-red-200" : "bg-amber-50 border-amber-200"
                          )}>
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium text-travel-neutral-900">{scam.title}</h4>
                              <div className={cn(
                                "text-xs font-medium px-2 py-0.5 rounded-full",
                                scam.warning === "High Risk" ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"
                              )}>
                                {scam.warning}
                              </div>
                            </div>
                          </div>
                          <div className="p-4 bg-white">
                            <p className="text-travel-neutral-600 text-sm">{scam.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <Button className="w-full mt-6 bg-amber-600 hover:bg-amber-700">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      <span>Report a Scam</span>
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          <div>
            <Card className="border-travel-neutral-100 shadow-elevation-1 mb-6">
              <div className="border-b border-travel-neutral-200 p-4">
                <h3 className="font-semibold text-travel-neutral-900 flex items-center">
                  <Bell className="h-5 w-5 text-travel-blue mr-2" />
                  Safety Alerts
                </h3>
              </div>
              <CardContent className="p-4">
                <div className="space-y-4">
                  {[
                    {
                      title: "Weather Alert: Heavy Rain",
                      location: "Kerala Region",
                      time: "Updated 2 hours ago",
                      severity: "medium",
                    },
                    {
                      title: "Transport Strike",
                      location: "Mumbai",
                      time: "Updated 5 hours ago",
                      severity: "low",
                    },
                    {
                      title: "Public Demonstration",
                      location: "Central Delhi",
                      time: "Updated 1 day ago",
                      severity: "low",
                    },
                  ].map((alert, index) => (
                    <div 
                      key={index}
                      className={cn(
                        "p-3 rounded-lg border",
                        alert.severity === "high" ? "border-red-200 bg-red-50" :
                        alert.severity === "medium" ? "border-amber-200 bg-amber-50" :
                        "border-blue-200 bg-blue-50"
                      )}
                    >
                      <h4 className="font-medium text-travel-neutral-900">{alert.title}</h4>
                      <div className="flex items-center justify-between mt-1">
                        <div className="text-sm text-travel-neutral-600">{alert.location}</div>
                        <div className="text-xs text-travel-neutral-500">{alert.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full mt-4 border-travel-blue/20 text-travel-blue hover:bg-travel-blue/5"
                >
                  View All Alerts
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-travel-neutral-100 shadow-elevation-1">
              <div className="border-b border-travel-neutral-200 p-4">
                <h3 className="font-semibold text-travel-neutral-900 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Safety Checklist
                </h3>
              </div>
              <CardContent className="p-4">
                <div className="space-y-3">
                  {[
                    { text: "Register your trip with embassy", checked: true },
                    { text: "Save emergency contacts", checked: true },
                    { text: "Get travel insurance", checked: false },
                    { text: "Share itinerary with family", checked: false },
                    { text: "Download offline maps", checked: true },
                    { text: "Make copies of important documents", checked: false },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={cn(
                        "w-5 h-5 rounded-full flex items-center justify-center",
                        item.checked ? "bg-green-100 text-green-600" : "bg-travel-neutral-100 text-travel-neutral-400"
                      )}>
                        {item.checked ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          <div className="w-2 h-2 rounded-full bg-travel-neutral-300"></div>
                        )}
                      </div>
                      <span className={cn(
                        "text-sm",
                        item.checked ? "text-travel-neutral-900" : "text-travel-neutral-600"
                      )}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-travel-neutral-200">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-travel-neutral-900">Safety Score</h4>
                    <div className="text-lg font-bold text-green-600">3/6</div>
                  </div>
                  <div className="w-full bg-travel-neutral-200 rounded-full h-2 mt-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "50%" }}></div>
                  </div>
                  <p className="text-xs text-travel-neutral-500 mt-2">
                    Complete more safety tasks to improve your safety score
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
