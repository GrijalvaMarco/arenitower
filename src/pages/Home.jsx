import HeroSection from "../components/home/HeroSection";
import ClientTestimonials from "../components/ClientTestimonials";
import ProjectsSection from "../components/home/ProjectsSection";
import AboutUs from "../components/AboutUs";
import RequestCallback from "../components/RequestCallback";
import BannerSection from "../components/home/BannerSection";
import TypologySection from "../components/home/TypologySection";
import WhatsAppButton from "../components/WhatsAppButton";
import CarouselBanner from "../components/home/CarouselBanner";
import Amenities from "../components/Amenities";

function Home() {
  return (
    <div>
      <BannerSection />
      <Amenities />
      <ProjectsSection />
      <TypologySection />
      <CarouselBanner />
      <AboutUs />
      <RequestCallback />
      <WhatsAppButton />
    </div>
  );
}

export default Home;
