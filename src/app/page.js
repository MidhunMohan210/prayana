import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import TravelPartnerSection from "@/components/sections/TravelPartnerSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TravelPartnerSection />
      </main>
    </>
  );
}
