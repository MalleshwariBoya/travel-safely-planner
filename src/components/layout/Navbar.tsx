
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin } from "lucide-react";
import { SignInModal } from "@/components/auth/SignInModal";
import { PlanTripModal } from "@/components/trip/PlanTripModal";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Transport", href: "/transport" },
  { name: "Stays", href: "/stays" },
  { name: "Itinerary", href: "/itinerary" },
  { name: "Safety", href: "/safety" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isPlanTripModalOpen, setIsPlanTripModalOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled 
          ? "py-3 bg-white/80 backdrop-blur-md shadow-sm" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="content-wrapper flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-travel-blue transition-opacity hover:opacity-90"
        >
          <MapPin className="h-7 w-7 sm:h-8 sm:w-8" />
          <span className="text-lg sm:text-xl font-bold">TravelSmart</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-sm font-medium transition-colors relative py-2",
                location.pathname === item.href
                  ? "text-travel-blue"
                  : "text-travel-neutral-600 hover:text-travel-blue"
              )}
            >
              {item.name}
              {location.pathname === item.href && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-travel-blue rounded-full" />
              )}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="outline"
            className="transition-all duration-200 border-travel-blue/20 text-travel-blue hover:bg-travel-blue/5 hover:border-travel-blue/30"
            onClick={() => setIsSignInModalOpen(true)}
          >
            Sign In
          </Button>
          <Button
            className="bg-travel-blue transition-all duration-200 hover:bg-travel-blue-dark"
            onClick={() => setIsPlanTripModalOpen(true)}
          >
            Plan Trip
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 text-travel-neutral-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-16 bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col p-4 space-y-6 pt-6">
          <nav className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-base font-medium py-2 px-4 rounded-md transition-colors",
                  location.pathname === item.href
                    ? "text-white bg-travel-blue"
                    : "text-travel-neutral-600 hover:bg-travel-blue/5"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="grid grid-cols-2 gap-4 px-4 pt-4">
            <Button
              variant="outline"
              className="w-full border-travel-blue/20 text-travel-blue hover:bg-travel-blue/5"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsSignInModalOpen(true);
              }}
            >
              Sign In
            </Button>
            <Button
              className="w-full bg-travel-blue hover:bg-travel-blue-dark"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsPlanTripModalOpen(true);
              }}
            >
              Plan Trip
            </Button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <SignInModal 
        isOpen={isSignInModalOpen} 
        onClose={() => setIsSignInModalOpen(false)} 
      />
      
      <PlanTripModal 
        isOpen={isPlanTripModalOpen} 
        onClose={() => setIsPlanTripModalOpen(false)} 
      />
    </header>
  );
}
