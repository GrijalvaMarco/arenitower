import photo1 from "../../Assets/home-carousel1.jpeg";
import photo2 from "../../Assets/home-carousel2.jpeg";
import Container from "../Container";

function WhoWeAre() {
  return (
    <div className="bg-primary">
      <Container>
        <div className="text-white">
          <div className="relative top-[-100px]">
            <div
              data-aos="flip-left"
              className=" flex md:flex-row flex-col bg-[#222222] ">
              <img
                src={photo1}
                alt="office"
                className="bg-cover md:w-[50%] w-full"
              />

              <div className="flex  justify-center flex-col md:p-[50px] p-[30px]">
                <h2 className="sm:text-3xl text-2xl uppercase font-bold mb-[10px]">
                  Historia
                </h2>
                <p className="text-gray">
                  Areni Tower nace de un homenaje a la esencia de Puerto Vallarta:
                  la arena dorada que guarda historias al pie de verticales que tocan
                  el cielo. Aquí, cada departamento es un santuario de diseño, donde los
                  atardeceres se convierten en arte, departamentos llenos de detalles
                  pensados para quienes buscan lo extraordinario.
                  No vendemos espacios, creamos legados.
                </p>
              </div>
            </div>

            <div
              data-aos="flip-right"
              className="flex md:flex-row flex-col-reverse  mt-[30px] bg-[#222222] ">
              <div className="flex  justify-center flex-col md:p-[50px] p-[30px]">
                <h2 className="sm:text-3xl text-2xl uppercase font-bold mb-[10px]">
                  Misión
                </h2>
                <p className="text-gray">
                  Elevar el estándar de vida en Puerto Vallarta a través de Areni Tower,
                  donde la arquitectura, los servicios exclusivos y la ubicación
                  privilegiada se unen para ofrecer una experiencia de lujo sin concesiones.
                </p>
              </div>

              <img
                src={photo2}
                alt="vision"
                className="bg-cover md:w-[50%] w-full"
              />
            </div>

            <div
              data-aos="flip-right"
              className="flex md:flex-row flex-col-reverse  mt-[30px] bg-[#222222] ">
              <div className="flex  justify-center flex-col md:p-[50px] p-[30px]">
                <h2 className="sm:text-3xl text-2xl uppercase font-bold mb-[10px]">
                  Our Vision
                </h2>
                <p className="text-gray">
                  Ser el ícono de prestigio residencial en Vallarta, reconocido por fusionar el
                  alma cálidadel destino con la excelencia en diseño y comodidad, atrayendo
                  a quienes demandan sólo lo excepcional.
                </p>
              </div>

              <img
                src={photo2}
                alt="vision"
                className="bg-cover md:w-[50%] w-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default WhoWeAre;
