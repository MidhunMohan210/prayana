import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import PopularPackagesSection from "@/components/sections/PopularPackagesSection";
import TravelPartnerSection from "@/components/sections/TravelPartnerSection";
import VideoStorySection from "@/components/sections/VideoStorySection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TravelPartnerSection />
        <PopularPackagesSection />
        <VideoStorySection />
      </main>
    </>
  );
}
