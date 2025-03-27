import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import HeroSection from "../components/heroSection/HeroSection";
import WhatsAppButton from "../components/WhatsAppButton";
import MapComponent from "../components/Map";

function Contact() {
  return (
    <div>
      <HeroSection page={"Contact"} />
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
