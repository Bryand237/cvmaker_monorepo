import AnimatedSection from "@/components/AnimatedSection";
import HomeFooter from "@/secrions/HomeFooter";
import HomeHero from "@/secrions/HomeHero";
import HomeTemplates from "@/secrions/HomeTemplates";
import HomeWelcom from "@/secrions/HomeWelcom";
import HomeFeatures from "@/secrions/HomeFeatures";
import HomeCTA from "@/secrions/HomeCTA";

const HomePage = () => {
  return (
    <div className="w-screen h-fit">
      {/* Hero Section - Full Screen Welcome */}
      <AnimatedSection>
        <HomeWelcom />
      </AnimatedSection>

      {/* Secondary Hero with Benefits */}
      <AnimatedSection>
        <HomeHero />
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection>
        <HomeFeatures />
      </AnimatedSection>

      {/* Templates Showcase */}
      <AnimatedSection>
        <HomeTemplates />
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection>
        <HomeCTA />
      </AnimatedSection>

      {/* Footer */}
      <HomeFooter />
    </div>
  );
};

export default HomePage;
