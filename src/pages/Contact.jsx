import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import HeroSection from "../components/ImageHeroSection";
import WhatsAppButton from "../components/WhatsAppButton";
import MapComponent from "../components/Map";
import image from "../Assets/contact-hero-section.jpg";

function Contact() {
  return (
    <div>
      <HeroSection image={image}/>
      <div className="text-white">
        <ContactForm />
      </div>
      <div className="my-8">
        <MapComponent />
        <ContactInfo />
      </div>
      <WhatsAppButton />
    </div>
  );
}

export default Contact;
