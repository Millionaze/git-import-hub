import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { EasySellingSection } from "@/components/home/EasySellingSection";
import { WhyDefaultPathwaySection } from "@/components/home/WhyDefaultPathwaySection";
import { PersonalSolutionsSection } from "@/components/home/PersonalSolutionsSection";
import { CashOffersSection } from "@/components/home/CashOffersSection";
import { SellRetailSection } from "@/components/home/SellRetailSection";
import { SupportSection } from "@/components/home/SupportSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <EasySellingSection />
        <WhyDefaultPathwaySection />
        <PersonalSolutionsSection />
        <CashOffersSection />
        <SellRetailSection />
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
