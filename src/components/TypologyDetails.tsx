import React from 'react';
import { MdBed } from "react-icons/md";
import { FaBath } from "react-icons/fa";

const TypologyDetails = ({ details, onClose }: { details: any; onClose: () => void }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-secondary w-full max-w-full h-[80vh] p-6 rounded shadow-lg relative overflow-y-auto mx-4 transition-transform transform scale-95 opacity-0 animate-fade-in">
                <button
                    className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={onClose}
                >
                    Close
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <img
                        src={details.image}
                        alt="Typology"
                        className="w-full h-auto rounded"
                    />
                    <div className="flex flex-col items-start justify-start h-full mx-4">
                        <div className="mb-6">
                            <h1 className="text-2xl font-bold">{details.name}</h1>
                        </div>
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="flex items-center space-x-2">
                                <MdBed size={32} />
                                <span>{details.details.bedrooms} {details.details.bedrooms > 1 ? 'récamaras' : 'récamara'}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaBath size={24} />
                                <span>{details.details.bathrooms} {details.details.bathrooms > 1 ? 'baños' : 'baño'}</span>
                            </div>
                        </div>
                        <h2 className="text-xl font-semibold mb-4">Specifications</h2>
                        <p className="mb-2">Bedrooms: {details.bedrooms}</p>
                        <p className="mb-2">Bathrooms: {details.bathrooms}</p>
                        <p>Area: {details.area}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TypologyDetails;
