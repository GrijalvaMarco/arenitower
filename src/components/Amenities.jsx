import React from "react";
import { FaDumbbell, FaSwimmingPool, FaParking, FaDoorOpen, FaFireAlt, FaShieldAlt } from "react-icons/fa";

const amenities = [
  { icon: <FaDumbbell />, text: "Gym" },
  { icon: <FaSwimmingPool />, text: "Alberca / Sky pool" },
  { icon: <FaParking />, text: "Estacionamiento techado" },
  { icon: <FaDoorOpen />, text: "Lobby" },
  { icon: <FaFireAlt />, text: "Fire pits" },
  { icon: <FaShieldAlt />, text: "Seguridad 24/7" },
];

function Amenities() {
  return (
    <div className="bg-primary text-white py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Areas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-4xl mb-4">{amenity.icon}</div>
              <p className="text-lg">{amenity.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Amenities;