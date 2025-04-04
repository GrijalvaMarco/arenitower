import AboutUs from "../components/AboutUs";
import WhoWeAre from "../components/about/WhoWeAre";
import AboutHeroSection from "../components/about/AboutHeroSection"; // Updated import
import WhatsAppButton from "../components/WhatsAppButton";
import OurValues from "../components/about/OurValues";

function About() {
  return (
    <div>
      <AboutHeroSection /> {/* Updated component */}
      <WhoWeAre />
      <OurValues />
      <AboutUs />
      <WhatsAppButton />
    </div>
  );
}

export default About;
