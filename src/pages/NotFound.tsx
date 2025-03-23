
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MapPin, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center pt-16">
        <div className="text-center max-w-md mx-auto px-4 py-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-travel-blue-light text-travel-blue mb-6">
            <MapPin className="h-8 w-8" />
          </div>
          
          <h1 className="heading-lg mb-4 text-travel-neutral-900">Page Not Found</h1>
          
          <p className="text-travel-neutral-600 text-lg mb-8">
            We can't seem to find the page you're looking for. Let's get you back on the right path.
          </p>
          
          <Link to="/">
            <Button className="bg-travel-blue hover:bg-travel-blue-dark">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Return to Home
            </Button>
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
