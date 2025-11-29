import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative bg-background text-foreground py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/uploads/2025/05/Portadas-Default-2.png" 
          alt="Find your path forward" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find the Right Path Forward
          </h1>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground">
            Get help navigating a potential foreclosure with solutions tailored to your needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/save-your-home">
              <Button size="lg" className="h-12 px-8 rounded-lg font-semibold uppercase w-full sm:w-auto">
                Save Your Home
              </Button>
            </Link>
            <Link to="/sell-your-home">
              <Button size="lg" className="h-12 px-8 rounded-lg font-semibold uppercase w-full sm:w-auto">
                Sell Your Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
