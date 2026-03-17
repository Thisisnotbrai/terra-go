import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { ImpactMetrics } from "./ImpactMetrics";
import { FeaturedProject } from "./FeaturedProject";
import { HowItWorks } from "./HowitWorks";
import { ProofOfImpact } from "./ProofofImpact";
import { CommunitySection } from "./CommunitySection";
import { CTASection } from "./CTASection";
import { Footer } from "./Footer";

export function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="destinations">
          <HeroSection />
          <ImpactMetrics />
          <FeaturedProject />
        </section>

        <section id="activities">
          <HowItWorks />
        </section>

        <section id="community">
          <CommunitySection />
        </section>

        <section id="impact">
          <ProofOfImpact />
          <CTASection />
        </section>
      </main>
      <Footer />
    </div>
  );
}