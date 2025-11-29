import { CheckCircle } from "lucide-react";

const steps = [
  "Get the house listed",
  "Receive offers",
  "Sign Contracts",
  "Set closing date.",
];

export const SellRetailSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center md:text-left mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">
              Sell It Retail
            </h2>
            <p className="text-lg text-muted-foreground">
              Get the Maximum price with the help of Our Real Estate professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-lg">{step}</span>
                </div>
              ))}
            </div>

            <div className="bg-muted/30 rounded-2xl p-8">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Agent Offers Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
