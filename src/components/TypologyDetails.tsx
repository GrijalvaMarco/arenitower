import React from 'react';
import { MdBed } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { GiCookingPot } from "react-icons/gi";
import { FaCouch } from "react-icons/fa";
import { FaDoorOpen } from "react-icons/fa";

const TypologyDetails = ({ details, onClose }: { details: any; onClose: () => void }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-secondary w-full max-w-full h-[90vh] p-6 rounded shadow-lg relative overflow-y-auto mx-4 transition-transform transform scale-95 opacity-0 animate-fade-in">
                <button
                    className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={onClose}
                >
                    Close
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <img
                        src={details.floorPlanImage}
                        alt="Typology"
                        className="w-full h-auto rounded"
                    />
                    <div className="flex flex-col items-start justify-start h-full mx-4">
                        <div className="mb-6">
                            <h1 className="text-2xl font-bold">{details.label}</h1>
                        </div>
                        <h2 className="text-2xl  mb-4">
                            {details.quantity} unidades en desarrollo
                        </h2>
                        <h2 className="text-xl font-semibold mb-4">Caracteristicas</h2>
                        <div className="flex items-center space-x-2">
                            <MdBed size={32} />
                            <span>{details.details.bedrooms} {details.details.bedrooms > 1 ? 'récamaras' : 'récamara'}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaBath size={24} />
                            <span>{details.details.bathrooms} {details.details.bathrooms > 1 ? 'Baños' : 'Baño'}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <GiCookingPot size={24} />
                            <span>
                                {details.details.kitchenettes > 1
                                    ? `${details.details.kitchenettes} Cocinetas`
                                    : 'Cocineta'}
                            </span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaCouch size={24} />
                            <span>Sala/Comedor</span>
                        </div>
                        {details.details.lockOff !== undefined && (
                            <div className="flex items-center space-x-2">
                                <FaDoorOpen size={24} />
                                <span>LockOff</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TypologyDetails;
