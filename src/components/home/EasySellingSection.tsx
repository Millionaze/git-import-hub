import { Button } from "@/components/ui/button";

export const EasySellingSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-card rounded-3xl p-8 md:p-12 shadow-lg text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Selling made <span className="text-primary">easy</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you need to sell fast for cash or want to maximize your home's value on the retail market, 
            we provide personalized solutions tailored to your unique situation.
          </p>
          <Button size="lg" variant="outline" className="rounded-full">
            SELLING OPTIONS
          </Button>
        </div>
      </div>
    </section>
  );
};
