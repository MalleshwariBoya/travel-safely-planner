
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { IndianRupee, Sparkles, ArrowRight } from "lucide-react";

export function BudgetPlanner() {
  const [budget, setBudget] = useState<number>(15000);
  const [tripDuration, setTripDuration] = useState<number>(5);
  
  return (
    <section className="page-section">
      <div className="content-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-travel-blue/10 text-travel-blue">
              <Sparkles className="h-4 w-4 mr-2" />
              Smart Budget Planning
            </div>
            
            <h2 className="heading-lg text-travel-neutral-900">
              Plan Your Trip Based On 
              <span className="text-travel-blue"> Your Budget</span>
            </h2>
            
            <p className="text-travel-neutral-600 text-lg">
              We help you make the most of your available budget to create the perfect itinerary. Simply tell us how much you'd like to spend, and we'll take care of the rest.
            </p>
            
            <div className="space-y-8 bg-white p-6 rounded-xl shadow-elevation-1">
              <div className="space-y-4">
                <Label className="text-travel-neutral-700">Your Budget (₹)</Label>
                <div className="relative">
                  <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-travel-neutral-400" />
                  <Input 
                    type="number"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="pl-10 bg-travel-neutral-50 border-travel-neutral-200 focus:border-travel-blue focus:ring-travel-blue/20"
                  />
                </div>
                <Slider 
                  value={[budget]} 
                  min={5000} 
                  max={100000}
                  step={1000}
                  onValueChange={(value) => setBudget(value[0])}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-travel-neutral-500">
                  <span>Budget (₹5K)</span>
                  <span>Premium (₹100K)</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <Label className="text-travel-neutral-700">Trip Duration (Days)</Label>
                <div className="relative">
                  <Input 
                    type="number"
                    value={tripDuration}
                    onChange={(e) => setTripDuration(Number(e.target.value))}
                    className="bg-travel-neutral-50 border-travel-neutral-200 focus:border-travel-blue focus:ring-travel-blue/20"
                  />
                </div>
                <Slider 
                  value={[tripDuration]} 
                  min={1} 
                  max={30}
                  step={1}
                  onValueChange={(value) => setTripDuration(value[0])}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-travel-neutral-500">
                  <span>1 Day</span>
                  <span>30 Days</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="from">From</Label>
                  <Select defaultValue="delhi">
                    <SelectTrigger id="from" className="bg-travel-neutral-50 border-travel-neutral-200 focus:border-travel-blue focus:ring-travel-blue/20">
                      <SelectValue placeholder="Select city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="delhi">New Delhi</SelectItem>
                      <SelectItem value="mumbai">Mumbai</SelectItem>
                      <SelectItem value="bangalore">Bangalore</SelectItem>
                      <SelectItem value="chennai">Chennai</SelectItem>
                      <SelectItem value="kolkata">Kolkata</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="to">To</Label>
                  <Select defaultValue="jaipur">
                    <SelectTrigger id="to" className="bg-travel-neutral-50 border-travel-neutral-200 focus:border-travel-blue focus:ring-travel-blue/20">
                      <SelectValue placeholder="Select city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="jaipur">Jaipur</SelectItem>
                      <SelectItem value="agra">Agra</SelectItem>
                      <SelectItem value="varanasi">Varanasi</SelectItem>
                      <SelectItem value="goa">Goa</SelectItem>
                      <SelectItem value="kerala">Kerala</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button className="w-full bg-travel-blue hover:bg-travel-blue-dark group">
                <span>Get Recommendations</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-2xl shadow-elevation-2 overflow-hidden border border-travel-neutral-100">
              <div className="p-6 bg-travel-blue-light/30 border-b border-travel-neutral-100">
                <h3 className="font-semibold text-xl text-travel-neutral-900">Your Budget Breakdown</h3>
                <p className="text-travel-neutral-600 text-sm mt-1">
                  Estimated allocation for a {tripDuration}-day trip with ₹{budget.toLocaleString()}
                </p>
              </div>
              
              <div className="p-6">
                <Tabs defaultValue="basic">
                  <TabsList className="grid grid-cols-3 mb-6">
                    <TabsTrigger value="basic">Basic</TabsTrigger>
                    <TabsTrigger value="moderate">Moderate</TabsTrigger>
                    <TabsTrigger value="premium">Premium</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="basic" className="space-y-6">
                    <div className="space-y-4">
                      {[
                        { name: "Transportation", percentage: 35, amount: Math.round(budget * 0.35) },
                        { name: "Accommodation", percentage: 30, amount: Math.round(budget * 0.3) },
                        { name: "Food & Dining", percentage: 20, amount: Math.round(budget * 0.2) },
                        { name: "Sightseeing", percentage: 10, amount: Math.round(budget * 0.1) },
                        { name: "Miscellaneous", percentage: 5, amount: Math.round(budget * 0.05) },
                      ].map((item) => (
                        <div key={item.name}>
                          <div className="flex justify-between mb-1">
                            <span className="text-travel-neutral-700">{item.name}</span>
                            <span className="text-travel-neutral-900 font-medium">₹{item.amount.toLocaleString()}</span>
                          </div>
                          <div className="w-full bg-travel-neutral-100 rounded-full h-2">
                            <div 
                              className="bg-travel-blue h-2 rounded-full" 
                              style={{ width: `${item.percentage}%` }}
                            ></div>
                          </div>
                          <div className="text-right text-xs text-travel-neutral-500 mt-1">
                            {item.percentage}% of total
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-travel-blue-light/20 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-travel-neutral-700">Daily budget per person</span>
                        <span className="text-travel-blue font-bold text-xl">
                          ₹{Math.round(budget / tripDuration).toLocaleString()}
                        </span>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button 
                        variant="outline"
                        className="w-full border-travel-blue/20 text-travel-blue hover:bg-travel-blue/5"
                      >
                        Customize Budget Allocation
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="moderate" className="space-y-6">
                    <div className="h-40 flex items-center justify-center">
                      <p className="text-travel-neutral-500">Select this option for better hotels and more comfortable transportation.</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="premium" className="space-y-6">
                    <div className="h-40 flex items-center justify-center">
                      <p className="text-travel-neutral-500">Select this option for luxury hotels and premium transportation.</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
