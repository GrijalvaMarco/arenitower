import Projects from "../Projects";
import MainHead from "../mainHead/MainHead";
import image from "../../assets/home-availability-section.jpeg";
import AvailabilityBanner from "./AvailabilityBanner";

function ProjectsSection() {
  return (
    <div>
      <div
        className="bg-cover min-h-screen text-white relative"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "60%",
        }}>
        { /*<MainHead>Disponibilidad</MainHead> 
      <Projects />*/ }
      </div>
      <AvailabilityBanner />
    </div>
  );
}

export default ProjectsSection;
