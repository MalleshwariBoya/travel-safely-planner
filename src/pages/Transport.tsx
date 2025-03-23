
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TransportOptions } from "@/components/transport/TransportOptions";
import { useEffect } from "react";

const Transport = () => {
  useEffect(() => {
    // Smooth scroll animation for the entire page
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="animate-on-scroll opacity-0">
          <TransportOptions />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Transport;
