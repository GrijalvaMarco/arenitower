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
                  Areni Tower nace de un homenaje a la esencia de Puerto Vallarta: la arena dorada que guarda historias al pie de verticales que tocan el cielo. Aquí, cada departamento es un santuario de diseño, donde los atardeceres se convierten en arte, departamentos llenos de detalles pensados para quienes buscan lo extraordinario. No vendemos espacios, creamos legados.
                  <br />
                  <br />
                  En Areni Tower, entendemos que el lujo y la rentabilidad pueden coexistir. Por eso, cada departamento ofrece la flexibilidad de un lock-off inteligente: diseñado para quienes desean disfrutar de su santuario personal mientras su inversión trabaja con la renta de un espacio independiente. Sin comprometer privacidad, diseño o exclusividad.

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
                  Reinventar el concepto de inversión inmobiliaria de lujo en Puerto Vallarta,
                  combinando diseño excepcional, ubicación privilegiada y flexibilidad inteligente (lock-off)
                  para maximizar rentabilidad sin sacrificar estilo de vida.
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
                  Visión
                </h2>
                <p className="text-gray">
                  Ser el desarrollo más cotizado por inversionistas sofisticados que buscan
                  un equilibrio perfecto entre disfrute personal y retorno financiero en el mercado de lujo vallartense.
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
