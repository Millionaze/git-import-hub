import { MessageSquare, ClipboardCheck, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Initial Consultation",
    description: "We discuss your goals, timeline, and unique circumstances to understand your needs.",
  },
  {
    icon: ClipboardCheck,
    title: "Personalized Assessment",
    description: "We evaluate your property and situation to recommend the best selling strategy for you.",
  },
  {
    icon: Rocket,
    title: "Implementation",
    description: "We execute your chosen plan with dedicated support every step of the way.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
          How It <span className="text-primary">Works</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-8 h-0.5 bg-primary/30 transform translate-x-full -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
