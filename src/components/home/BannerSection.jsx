import photo from "../../Assets/banner-hero-section.jpeg";

function BannerSection() {
    return (
        <div
          className="bg-cover min-h-screen text-white relative"
          style={{
            backgroundImage: `url(${photo})`,
            backgroundPosition: "60%",
          }}>
          <div className="absolute left-0 top-0 w-full h-full bg-[#00000080]"></div>
          <section className="h-[calc(100vh-80px)] ">
            <div className="container mx-auto px-[10px]">
              <div className="relative h-[100vh] w-full">
                {/* Content */}
                <div
                  className="text-center h-full flex items-center justify-center flex-col
                   w-[80%] mx-auto p-[20px] uppercase relative md:gap-[20px] gap-[10px]">
                    <h2 className="md:text-6xl sm:text-4xl text-lg  font-bold">
                        LAS MEJORES VISTAS PERTENECEN A TU HOGAR
                    </h2>
                  <p className="sm:text-base text-xs">
                    Departamentos en Preventa desde $6.4 MDP.  Opciones de 1, 2 y 3 recámaras en Providencia, Guadalajara.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
}

export default BannerSection;