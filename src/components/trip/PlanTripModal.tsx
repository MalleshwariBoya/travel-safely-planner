
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, CalendarRange, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface PlanTripModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PlanTripModal({ isOpen, onClose }: PlanTripModalProps) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState("1");
  const [isPlanning, setIsPlanning] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPlanning(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Trip Planned!",
        description: "Redirecting you to transportation options.",
      });
      setIsPlanning(false);
      onClose();
      navigate("/transport");
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg max-w-md w-full relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center mb-6 text-travel-neutral-900 dark:text-white">Plan Your Trip</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="from" className="block text-sm font-medium text-travel-neutral-700 dark:text-gray-300">
                From
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-travel-neutral-500" />
                <Input
                  id="from"
                  type="text"
                  placeholder="Departure city"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  required
                  className="pl-10 w-full"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="to" className="block text-sm font-medium text-travel-neutral-700 dark:text-gray-300">
                To
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-travel-neutral-500" />
                <Input
                  id="to"
                  type="text"
                  placeholder="Destination city"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  required
                  className="pl-10 w-full"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="date" className="block text-sm font-medium text-travel-neutral-700 dark:text-gray-300">
                Travel Date
              </label>
              <div className="relative">
                <CalendarRange className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-travel-neutral-500" />
                <Input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="pl-10 w-full"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="travelers" className="block text-sm font-medium text-travel-neutral-700 dark:text-gray-300">
                Number of Travelers
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-travel-neutral-500" />
                <Input
                  id="travelers"
                  type="number"
                  min="1"
                  max="10"
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  required
                  className="pl-10 w-full"
                />
              </div>
            </div>
            
            <Button
              type="submit"
              className="w-full bg-travel-blue hover:bg-travel-blue-dark mt-4"
              disabled={isPlanning}
            >
              {isPlanning ? "Planning..." : "Find Transportation Options"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
