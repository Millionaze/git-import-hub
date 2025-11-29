import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-foreground">
            Find the Right Path Forward
          </h1>
          <p className="text-base md:text-lg mb-10 text-foreground/80 max-w-2xl mx-auto">
            Get help navigating a potential foreclosure with solutions tailored to your needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/save-your-home" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="h-14 px-12 rounded-full font-bold uppercase w-full text-base bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
              >
                Save Your Home
              </Button>
            </Link>
            <Link to="/sell-your-home" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="h-14 px-12 rounded-full font-bold uppercase w-full text-base bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
              >
                Sell Your Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
