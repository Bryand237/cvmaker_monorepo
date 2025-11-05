import AnimatedSection from "@/components/AnimatedSection";
import HomeFooter from "@/secrions/HomeFooter";
import HomeHero from "@/secrions/HomeHero";
import HomeTemplates from "@/secrions/HomeTemplates";
import HomeWelcom from "@/secrions/HomeWelcom";

const HomePage = () => {
  return (
    <div className="w-screen h-fit bg-gray-950">
      {/* <SectionWithReveal>
        <HomeWelcom />
      </SectionWithReveal>
      <SectionWithReveal>
        <HomeHero />
      </SectionWithReveal>
      <SectionWithReveal>
        <HomeFooter />
      </SectionWithReveal> */}
      <AnimatedSection>
        <HomeWelcom />
      </AnimatedSection>
      <AnimatedSection>
        <HomeHero />
      </AnimatedSection>
      <AnimatedSection>
        <HomeTemplates />
      </AnimatedSection>
      <AnimatedSection>
        <HomeFooter />
      </AnimatedSection>
    </div>
  );
};

export default HomePage;
