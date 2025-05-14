import React from "react";
import { FaShip, FaShoppingBag, FaHospital, FaUtensils, FaFish, FaParachuteBox, FaCoffee, FaFilm, FaTableTennis } from "react-icons/fa";
import { GiPalmTree } from "react-icons/gi";
import image from "../Assets/areni-location.png";
import Button from "./Button";

function MapComponent() {
  const handleMapClick = () => {
    window.open("https://www.google.com/maps?q=Av.+Francisco+Medina+Ascencio+2860,+Zona+Hotelera+Nte.,+48314+Puerto+Vallarta,+Jal.&z=15", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="h-screen flex flex-col sm:flex-row bg-white">
      <div className="sm:w-2/5 w-full p-4 z-10 relative flex flex-col justify-center items-center">
        <h2 className="text-6xl font-bold">UBICACIÓN</h2>
        <p className="mt-8 mb-8 text-center">
          <span className="text-3xl font-bold block">Conectado a todo y con</span>
          <span className="text-3xl font-bold block ml-4">vista al mar.</span>
        </p>
        <div className="w-full max-w-md">
          <ul className="mt-4 space-y-2 text-2xl">
            <li className="flex items-start text-2xl">
              <FaShip className="w-6 h-6 mr-2 flex-shrink-0" />
              Marina Puerto Vallarta
            </li>
            <li className="flex items-start">
              <GiPalmTree className="w-6 h-6 mr-2 flex-shrink-0" />
              Club de Play Regina Puerto Vallarta
            </li>
            <li className="flex items-start">
              <FaShoppingBag className="w-6 h-6 mr-2 flex-shrink-0" />
              Centros comerciales
            </li>
            <li className="flex items-start">
              <FaHospital className="w-6 h-6 mr-2 flex-shrink-0" />
              Hospitales a 2 min
            </li>
            <li className="flex items-start">
              <FaUtensils className="w-6 h-6 mr-2 flex-shrink-0" />
              Restaurantes a 5 min
            </li>
            <li className="flex items-start">
              <FaFish className="w-6 h-6 mr-2 flex-shrink-0" />
              Club de pesca
            </li>
            <li className="flex items-start">
              <FaParachuteBox className="w-6 h-6 mr-2 flex-shrink-0" />
              Skydive, sky tours
            </li>
            <li className="flex items-start">
              <FaCoffee className="w-6 h-6 mr-2 flex-shrink-0" />
              Cafeterías
            </li>
            <li className="flex items-start">
              <FaFilm className="w-6 h-6 mr-2 flex-shrink-0" />
              Cine
            </li>
            <li className="flex items-start">
              <FaTableTennis className="w-6 h-6 mr-2 flex-shrink-0" />
              Padel
            </li>
          </ul>
          <div className="mt-6 text-white">
            <Button onClick={handleMapClick}>Cómo llegar</Button>
          </div>
        </div>
      </div>
      <div 
        className="sm:w-3/5 w-full h-64 sm:h-auto bg-contain bg-no-repeat bg-center relative"
        style={{ backgroundImage: `url(${image})` }}
      >
      </div>
    </div>
  );
}

export default MapComponent;
