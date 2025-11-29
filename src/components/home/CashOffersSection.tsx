import { FileText, Users, DollarSign, FileCheck } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Submit Property Information",
    description: "Provide basic details about your property through our simple form.",
  },
  {
    icon: Users,
    title: "Host Private Investor Open Houses",
    description: "We coordinate viewings with verified cash investors interested in your property.",
  },
  {
    icon: DollarSign,
    title: "Receive Multiple Cash Offers",
    description: "Compare offers from multiple investors to get the best deal for your property.",
  },
  {
    icon: FileCheck,
    title: "Sign Deal & Close",
    description: "Choose your best offer and close on your timeline, often in as little as 7 days.",
  },
];

export const CashOffersSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
            Get <span className="text-primary">Verified Cash Offers</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Connect with pre-screened cash investors who are ready to make competitive offers on your property
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary mb-2">Step {index + 1}</div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-secondary/5 rounded-2xl p-8 text-center">
            <div className="aspect-video bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
              <p className="text-muted-foreground">Video: How Cash Offers Work</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
