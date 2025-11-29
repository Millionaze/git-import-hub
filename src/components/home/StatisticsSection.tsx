import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export const StatisticsSection = () => {
  return (
    <section className="py-20 bg-destructive/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 mb-6">
            <AlertCircle className="h-8 w-8 text-destructive" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Did You <span className="text-primary">Know?</span>
          </h2>
          
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg mb-8">
            <p className="text-5xl md:text-6xl font-display font-bold text-primary mb-4">
              1 in 2,500
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              homes in the United States are in some stage of foreclosure. If you're facing financial difficulties, 
              you're not alone, and there are solutions available.
            </p>
          </div>

          <Button size="lg" variant="default" className="rounded-full">
            Get Help Now
          </Button>
        </div>
      </div>
    </section>
  );
};
