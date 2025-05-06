import React from "react";
import photo from "../Assets/villa4.jpeg";

function ImageHeroSection({ image }) {
    return (
        <div 
            className="bg-cover min-h-screen relative"
            style={{
                backgroundImage: `url(${image || photo})`,
                backgroundPosition: "center",
            }}
        >
            <div className="absolute left-0 top-0 w-full h-full bg-[#00000080]"></div>
        </div>
    );
}

export default ImageHeroSection;