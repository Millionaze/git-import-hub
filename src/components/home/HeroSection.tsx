import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-white py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Sell your house <span className="text-primary">FAST & EASY</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Simplified home selling with verified investors and dedicated support throughout the process
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Enter your property address"
                className="h-14 pl-12 pr-4 rounded-full text-foreground"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
            <Button size="lg" className="h-14 px-8 rounded-full font-semibold">
              Sell My House
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
