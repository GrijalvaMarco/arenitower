import AboutUs from "../components/AboutUs";
import ClientTestimonials from "../components/ClientTestimonials";
import WhoWeAre from "../components/about/WhoWeAre";
import AboutHeroSection from "../components/about/AboutHeroSection"; // Updated import
import WhatsAppButton from "../components/WhatsAppButton";
import image from "../Assets/villa.jpg";

function About() {
  return (
    <div>
      <AboutHeroSection /> {/* Updated component */}
      <WhoWeAre />
      <AboutUs />
      <WhatsAppButton />
    </div>
  );
}

export default About;
