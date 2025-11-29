import { Button } from "@/components/ui/button";

export const SupportSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Dedicated support throughout the entire process.
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our dedicated professionals are available to help you answer any questions at any time.
              </p>
              <Button size="lg" className="rounded-lg">
                Get Cash Offer
              </Button>
            </div>
            
            <div className="bg-background rounded-2xl p-8">
              <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Support Chat Visualization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
