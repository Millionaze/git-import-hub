import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { EasySellingSection } from "@/components/home/EasySellingSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { CashOffersSection } from "@/components/home/CashOffersSection";
import { SellRetailSection } from "@/components/home/SellRetailSection";
import { SupportSection } from "@/components/home/SupportSection";
import { StatisticsSection } from "@/components/home/StatisticsSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <EasySellingSection />
        <HowItWorksSection />
        <CashOffersSection />
        <SellRetailSection />
        <SupportSection />
        <StatisticsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
