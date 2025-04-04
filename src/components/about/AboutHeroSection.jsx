import React from "react";
import image from "../../assets/home-availability-section.jpeg";

function AboutHeroSection() {
    return (
        <div className="bg-cover min-h-screen text-white relative"
            style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: "60%",
            }}>
            <div className="absolute left-0 top-0 w-full h-full bg-[#00000080]"></div>
            <section className="h-[calc(100vh-80px)]">
                <div className="container mx-auto px-[10px]">
                    <div className="relative h-[100vh] w-full">
                        {/* Content */}
                        <div className="text-center h-full flex items-center justify-center flex-col
               w-[80%] mx-auto p-[20px] uppercase relative md:gap-[20px] gap-[10px]">
                            <h2 className="text-3xl md:text-5xl font-bold">
                                Jugamos con la dualidad: la calidez terrenal de Vallarta y la sofisticación vertical
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutHeroSection;
