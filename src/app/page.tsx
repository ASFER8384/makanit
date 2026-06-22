import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import AboutSection from "@/components/AboutSection";
import Destinations from "@/components/Destinations";
import Reviews from "@/components/Reviews";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Reveal>
        <Services />
      </Reveal>
      <Reveal>
        <AboutSection />
      </Reveal>
      <Reveal>
        <Stats />
      </Reveal>
      <Reveal>
        <Destinations />
      </Reveal>
      <Reveal>
        <Reviews />
      </Reveal>
    </>
  );
}
