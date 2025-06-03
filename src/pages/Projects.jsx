import HeroSection from "../components/heroSection/HeroSection";
import ProjectsComponent from "../components/Projects";
import ClientTestimonials from "../components/ClientTestimonials";
import WhatsAppButton from "../components/WhatsAppButton";

function Projects() {
  return (
    <div>
      <HeroSection page={"Projects"} />
      <ProjectsComponent />
      <ClientTestimonials />
      <WhatsAppButton />
    </div>
  );
}

export default Projects;
