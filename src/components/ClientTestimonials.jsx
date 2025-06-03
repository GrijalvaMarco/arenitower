import { clientTestimonialsData } from "../data/data";
import Container from "./Container";

function ClientTestimonials() {
  return (
    <div className="bg-primary text-white py-[100px]">
      <Container>
        <div className="flex lg:flex-row flex-col lg:gap-[5px] gap-[20px]">
          {clientTestimonialsData.map((el) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                key={el.id}
                className="w-full flex items-center lg:flex-row flex-col lg:text-left text-center ">
                {/* Adding some space to the middle one  */}
                <div
                  className={`lg:pl-[20px] text-sm text-gray lg:border-l  border-gray ${
                    el.id === 2 ? "lg:pr-[20px]" : ""
                  }`}>
                  <p className="lg:text-lg text-md">
                    {el.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default ClientTestimonials;
