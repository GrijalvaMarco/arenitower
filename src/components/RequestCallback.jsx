import { MdLocalPhone } from "react-icons/md";
import Button from "./Button";
import Container from "./Container";
import { openWhatsApp } from "../utils/whatsapp";

function RequestCallback() {
  return (
    <div className="py-[100px] text-white">
      <Container>
        <div
          className="flex items-center justify-between gap-[20px] md:flex-row flex-col
      ">
          <div className="md:w-[50%] w-full flex items-center gap-[20px] md:flex-row flex-col md:text-left text-center">
            <div className="bg-primary rounded-md">
              <MdLocalPhone className="text-5xl text-[#141414]" />
            </div>
            <div>
              <h2 className="text-2xl uppercase font-bold mb-[10px]">
                ¿Dudas? Habla con un asesor: Vive el lujo en Areni Tower
              </h2>
              <p className="text-gray">
                Envía tu información de contacto y cualquier pregunta que tengas en mente, y con gusto te ayudaremos.
              </p>
            </div>
          </div>

          <div>
            <Button  onClick={() => openWhatsApp()}>Solicitar una llamada</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default RequestCallback;
