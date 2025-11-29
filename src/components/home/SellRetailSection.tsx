import { Home, Camera, TrendingUp, Users } from "lucide-react";

const benefits = [
  {
    icon: Home,
    title: "Professional Marketing",
    description: "Premium listing presentation to maximize your home's appeal",
  },
  {
    icon: Camera,
    title: "Professional Photography",
    description: "High-quality photos and virtual tours to showcase your property",
  },
  {
    icon: TrendingUp,
    title: "Strategic Pricing",
    description: "Data-driven pricing strategy to attract serious buyers",
  },
  {
    icon: Users,
    title: "Expert Negotiation",
    description: "Experienced agents working to get you the best possible price",
  },
];

export const SellRetailSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
            Sell It <span className="text-primary">Retail</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Maximize your home's value with our full-service retail listing program
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-xl hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-muted/30 rounded-2xl p-8 text-center">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
              <p className="text-muted-foreground">Video: Retail Selling Process</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
