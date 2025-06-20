import { Link } from "react-router-dom";
import { footerIcons, headerData } from "../data/data";

import Button from "./Button";
import Container from "./Container";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="bg-secondary text-white py-[50px]">
        <Container>
          <div className="border-t border-[#b9bbbd] flex lg:gap-[10px] gap-[20px] py-[40px] lg:flex-nowrap flex-wrap">
            <ul className="w-[100%] py-[10px]">
              <h2 className="text-xl uppercase font-bold mb-[20px]">Menú</h2>
              {headerData.map((el) => {
                return (
                  <li
                    key={el.id}
                    className="relative text-gray text-sm mb-[10px] hover:text-primary transition-all hover:translate-x-[10px] ">
                    <Link to={el.to}>{el.title}</Link>
                  </li>
                );
              })}
            </ul>

            <div className="w-[100%] py-[10px]">
              <h2 className="text-xl uppercase font-bold mb-[20px]">
                Síguenos
              </h2>

              <div className="flex items-center gap-[10px]">
                {footerIcons.map((el) => {
                  const Icon = el.icon;
                  return (
                    <Link
                      key={el.id}
                      to={el.to}
                      rel="noopener noreferrer"
                      target="_blank">
                      <Icon className="text-2xl hover:text-primary" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* <div className="w-[100%] py-[10px]">
              <h2 className="text-xl uppercase font-bold mb-[20px]">
                Síguenos
              </h2>
              <Button>Request A Callback</Button>
            </div> */}
          </div>
        </Container>
      </div>

      <div className="bg-lightGray text-gray py-[30px]">
        <Container>
          <p className="sm:text-base text-sm">
            © {currentYear} Areni Tower All Rights Reserved.
          </p>
        </Container>
      </div>
    </>
  );
}

export default Footer;
