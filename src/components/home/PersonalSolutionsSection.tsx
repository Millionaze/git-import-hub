export const PersonalSolutionsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Personal solutions
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                We recognize that every homeowner's situation is unique — and our services are tailored to meet your needs.
              </h3>
              <p className="text-lg text-muted-foreground">
                Whether you're in a distressed situation and need a fast cash offer, or prefer to list your home for top market value, our network of professionals will help you choose the right path forward.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/uploads/2025/04/Diseno-sin-titulo-12.png" 
                alt="Personalized home solutions" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <img 
              src="/uploads/2025/04/Diseno-sin-titulo-13.png" 
              alt="Fast cash offers" 
              className="w-full h-48 object-cover rounded-xl"
            />
            <img 
              src="/uploads/2025/04/Diseno-sin-titulo-14.png" 
              alt="Retail listing services" 
              className="w-full h-48 object-cover rounded-xl"
            />
            <img 
              src="/uploads/2025/04/Diseno-sin-titulo-15.png" 
              alt="Expert guidance" 
              className="w-full h-48 object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
