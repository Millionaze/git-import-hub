export const WhyDefaultPathwaySection = () => {
  const features = [
    {
      icon: "/uploads/2025/04/icono-1.svg",
      title: "Expert Guidance",
      description: "Experienced real estate professionals and legal experts at your service"
    },
    {
      icon: "/uploads/2025/04/icono-2.svg",
      title: "Multiple Options",
      description: "Compare cash offers, retail listings, and foreclosure prevention solutions"
    },
    {
      icon: "/uploads/2025/04/icono-3.svg",
      title: "Fast Process",
      description: "Get offers quickly and close on your timeline"
    },
    {
      icon: "/uploads/2025/04/icono-4.svg",
      title: "No Obligation",
      description: "Review all your options with zero pressure or commitment"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Default Pathway?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our team is made up of experienced real estate professionals and legal experts who specialize in helping homeowners navigate financial hardships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  <img 
                    src={feature.icon} 
                    alt={feature.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <img 
              src="/uploads/2025/04/featured-image-0.jpg" 
              alt="Professional real estate services" 
              className="w-full h-64 object-cover rounded-2xl"
            />
            <img 
              src="/uploads/2025/04/featured-image-1.jpg" 
              alt="Home selling solutions" 
              className="w-full h-64 object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
