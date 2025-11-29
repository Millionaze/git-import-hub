import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const EasySellingSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="text-left space-y-6">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight">
              Easy Homeowner Solutions
            </h2>
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
              Compare real-time offers from cash buyers, agents, and investors or speak to a foreclosure attorney to help you save your home — all in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Input
                type="text"
                placeholder="Enter your home address"
                className="h-12 flex-1 text-base"
              />
              <Button size="lg" className="h-12 px-8 rounded-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground">
                Get started
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-visible">
              <img 
                src="/uploads/2025/05/investor.png" 
                alt="House with multiple offers" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Offer Bubbles Overlay */}
              <div className="absolute top-[15%] left-[10%] bg-card/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-border flex items-center gap-2 animate-fade-in">
                <img 
                  src="/uploads/2025/05/defaultpathway.png" 
                  alt="Default Pathway" 
                  className="w-6 h-6 object-contain"
                />
                <span className="font-bold text-foreground">$ 530K</span>
              </div>
              
              <div className="absolute top-[30%] right-[5%] bg-card/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-border flex items-center gap-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                  <img 
                    src="/uploads/2025/05/agent_1.png" 
                    alt="Agent" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-bold text-foreground">$ 595K</span>
              </div>
              
              <div className="absolute bottom-[25%] left-[15%] bg-card/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-border flex items-center gap-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                  <img 
                    src="/uploads/2025/05/agente_2.png" 
                    alt="Agent" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-bold text-foreground">$ 655K</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
