import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export const SupportSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Dedicated <span className="text-primary">Support</span> Throughout
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our team is with you every step of the way, from initial consultation to closing day. 
                We're here to answer questions, provide guidance, and ensure a smooth selling experience.
              </p>
              <Button size="lg" className="rounded-full">
                <Phone className="mr-2 h-5 w-5" />
                Get Help Now
              </Button>
            </div>
            
            <div className="bg-secondary/5 rounded-2xl p-8">
              <div className="aspect-video bg-secondary/10 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Video: Our Support Process</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
