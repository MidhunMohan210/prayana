import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import PopularPackagesSection from "@/components/sections/PopularPackagesSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import TopDestinationsSection from "@/components/sections/TopDestinationsSection";
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
        <TopDestinationsSection />
        <AboutSection />
        <VideoStorySection />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
