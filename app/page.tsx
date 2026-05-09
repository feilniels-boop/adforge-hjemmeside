import { CredibilityStrip } from "@/components/CredibilityStrip";
import { FAQSection } from "@/components/FAQSection";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { LeadForm } from "@/components/LeadForm";
import { PortfolioMarquee } from "@/components/PortfolioMarquee";
import { PricingSection } from "@/components/PricingSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ValuePropositionSection } from "@/components/ValuePropositionSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PortfolioMarquee />
        <ValuePropositionSection />
        <CredibilityStrip />
        <ProcessSection />
        <LeadForm />
        <PricingSection />
        <FAQSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
