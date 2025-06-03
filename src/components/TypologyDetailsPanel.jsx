import React from 'react';
import { MdBed } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { GiCookingPot } from "react-icons/gi";
import { FaCouch } from "react-icons/fa";
import { FaDoorOpen } from "react-icons/fa";

const TypologyDetailsPanel = ({ typology }) => {
    return (
        <div className="bg-gray rounded-lg w-full">
            <div className="bg-primary rounded-t-lg p-6 py-3 text-center">
                <h2 className="text-white font-bold text-lg">ÁREA PONDERADA {typology.area}<sup> m2</sup></h2>
            </div>
            <div className="mt-4 space-y-4 p-6">
                <div className="flex items-center space-x-2">
                    <MdBed size={24} className="text-primary" />
                    <span className="text-black">{typology.details?.bedrooms || 0} {typology.details?.bedrooms > 1 ? 'récamaras' : 'récamara'}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <FaBath size={24} className="text-primary" />
                    <span className="text-black">{typology.details?.bathrooms || 0} {typology.details?.bathrooms > 1 ? 'Baños' : 'Baño'}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <GiCookingPot size={24} className="text-primary" />
                    <span className="text-black">
                        {typology.details?.kitchenettes > 1
                            ? `${typology.details?.kitchenettes} Cocinetas`
                            : 'Cocineta'}
                    </span>
                </div>
                <div className="flex items-center space-x-2">
                    <FaCouch size={24} className="text-primary" />
                    <span className="text-black">Sala/Comedor</span>
                </div>
                {typology.details?.lockOff !== undefined && (
                    <div className="flex items-center space-x-2">
                        <FaDoorOpen size={24} className="text-primary" />
                        <span className="text-black">Lock off</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TypologyDetailsPanel;
