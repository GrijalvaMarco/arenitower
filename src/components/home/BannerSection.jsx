import { useState, useEffect } from "react";
import photo from "../../Assets/banner-hero-section.jpeg";

function BannerSection() {
    const texts = [
        "Departamentos con lock-off: tu refugio personal y tu mejor inversión",
        "VIVE EN EL LUGAR QUE SIEMPRE SOÑASTE",
        "Edición limitada en la zona cotizada de Puerto Vallarta",
    ];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

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
                    <h2 className="md:text-5xl sm:text-4xl text-md font-bold">
                        {texts[currentTextIndex]}
                    </h2>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
}

export default BannerSection;