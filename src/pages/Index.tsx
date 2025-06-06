
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { BudgetPlanner } from "@/components/planner/BudgetPlanner";
import { useEffect } from "react";

const Index = () => {
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
      
      <main className="flex-grow pt-16">
        <Hero />
        
        <div className="animate-on-scroll opacity-0">
          <Features />
        </div>
        
        <div className="animate-on-scroll opacity-0">
          <BudgetPlanner />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
