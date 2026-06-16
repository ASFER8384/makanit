import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import AboutSection from "@/components/AboutSection";
import Destinations from "@/components/Destinations";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AboutSection />
      <Stats />
      <Destinations />
      <Reviews />
    </>
  );
}