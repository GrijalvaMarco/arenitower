import React from "react";
import photo from "../Assets/villa4.jpeg";

function ImageHeroSection({ image, text }) {
    return (
        <div 
            className="bg-cover min-h-screen relative flex items-center justify-center"
            style={{
                backgroundImage: `url(${image || photo})`,
                backgroundPosition: "center",
            }}
        >
            <div className="absolute left-0 top-0 w-full h-full bg-[#00000080]"></div>
            {text && (
                <div 
                    className="relative z-10 text-white text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-4 mt-[-100px]"
                >
                    {text}
                </div>
            )}
        </div>
    );
}

export default ImageHeroSection;