import { FileText, Users, DollarSign, FileCheck } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "1",
    title: "Submit Your Property Information",
    description: "Provide basic details and upload pictures",
  },
  {
    icon: Users,
    number: "2",
    title: "Host Private Investor Open houses",
    description: "Let Our Investors preview the property before bidding.",
  },
  {
    icon: DollarSign,
    number: "3",
    title: "Receive Multiple Cash Offers",
    description: "Get competitive bids from qualified local investors.",
  },
  {
    icon: FileCheck,
    number: "4",
    title: "Sign The Deal & Close",
    description: "Choose the best Offer. Close in as little as 7/14 days.",
  },
];

export const CashOffersSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">
              Cash Offers From Verified Investors
            </h2>
            <p className="text-lg text-muted-foreground">
              Submit your property and compare offers from pre-vetted cash buyers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="bg-background rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-muted-foreground mb-2">
                      {step.number}. {step.title}
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-background rounded-2xl p-8 text-center">
            <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Mobile App Preview</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
