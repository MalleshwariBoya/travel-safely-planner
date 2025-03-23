
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white pt-16 border-t border-gray-100">
      <div className="content-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-travel-blue">
              <MapPin className="h-6 w-6" />
              <span className="text-xl font-bold">TravelSmart</span>
            </div>
            <p className="text-travel-neutral-500 text-sm leading-relaxed">
              Helping tourists and solo travelers in India plan safe, budget-friendly trips with trusted services and local insights.
            </p>
            <div className="flex space-x-4 text-travel-neutral-400">
              <a href="#" className="hover:text-travel-blue transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-travel-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-travel-blue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-travel-blue transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-travel-neutral-900 mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                ["Trip Planning", "/"],
                ["Transport Booking", "/transport"],
                ["Hotel Reservations", "/stays"],
                ["Itinerary Creation", "/itinerary"],
                ["Travel Safety", "/safety"],
              ].map(([title, url]) => (
                <li key={title}>
                  <Link 
                    to={url}
                    className="text-travel-neutral-500 hover:text-travel-blue text-sm transition-colors"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-travel-neutral-900 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                ["About Us", "#"],
                ["Our Team", "#"],
                ["Careers", "#"],
                ["Press", "#"],
                ["Partners", "#"],
              ].map(([title, url]) => (
                <li key={title}>
                  <a 
                    href={url}
                    className="text-travel-neutral-500 hover:text-travel-blue text-sm transition-colors"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-travel-neutral-900 mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-travel-neutral-500 text-sm">
                <Mail className="h-4 w-4 text-travel-blue" />
                <span>support@travelsmart.com</span>
              </li>
              <li className="flex items-center space-x-3 text-travel-neutral-500 text-sm">
                <Phone className="h-4 w-4 text-travel-blue" />
                <span>+91 98765 43210</span>
              </li>
              <li className="text-travel-neutral-500 text-sm pt-2">
                <p className="mb-1">Bangalore Office:</p>
                <address className="not-italic">
                  TravelSmart India Pvt Ltd<br />
                  #123, MG Road, Indiranagar<br />
                  Bangalore - 560038
                </address>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="py-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-travel-neutral-500">
          <p>© {currentYear} TravelSmart. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-travel-blue transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-travel-blue transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-travel-blue transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
