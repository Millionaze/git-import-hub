import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const EasySellingSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Easy Homeowner Solutions
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Compare real-time offers from cash buyers, agents, and investors or speak to a foreclosure attorney to help you save your home — all in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="text"
                placeholder="Enter your home address"
                className="h-12 flex-1"
              />
              <Button size="lg" className="h-12 px-8 rounded-lg font-semibold">
                Get started
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] bg-muted rounded-2xl flex items-center justify-center overflow-hidden">
              <img 
                src="/uploads/2025/05/investor.png" 
                alt="House with multiple offers" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
