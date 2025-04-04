import React, { useState } from 'react';
import TypologyDetails from './TypologyDetails';
import photo from '../Assets/home-carousel1.jpeg';

const TypologyElement = ({ typology }: { typology: any }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="bg-secondary p-4">
            <h2 className="text-lg text-white font-bold text-center mb-4">{typology.name}</h2>
            <div className="relative">
                <img
                    src={photo}
                    alt={`${typology.name} illustration`}
                    className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
                />
                <button
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-sm px-4 py-2 rounded-lg hover:bg-opacity-70 transition-opacity"
                    onClick={() => setShowDetails(true)}
                >
                    Ver detalles
                </button>
            </div>
            <p className="text-sm mt-2">
                Quantity: {typology.quantity}
            </p>
            <div className="flex items-center mt-2">
                <p className="text-sm">Area: {typology.area}</p>
            </div>
            {showDetails && (
                <TypologyDetails
                    details={typology.details}
                    onClose={() => setShowDetails(false)}
                />
            )}
        </div>
    );
};

export default TypologyElement;
