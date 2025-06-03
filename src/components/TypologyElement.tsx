import React, { useState } from 'react';
import TypologyDetails from './TypologyDetails';
import Button from './Button';

const TypologyElement = ({ typology }: { typology: any }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <>
            <div className="bg-lightGray shadow-md overflow-hidden transition-transform transform hover:scale-105">
                <img
                    src={typology.image}
                    alt={`${typology.label} illustration`}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h2 className="text-xl font-semibold text-white mb-2">{typology.label}</h2>
                    <span className="inline-block bg-accentColor text-white text-xs font-bold rounded-md px-2 py-1 mb-4">
                        {typology.quantity === 1 ? "Sólo: " : "Quedan: "}{typology.quantity}
                    </span>
                    <p className="text-sm text-white mb-4">Area: {typology.area} <sup>m2</sup></p>
                    <div className="text-white">
                        <Button onClick={() => setShowDetails(true)}>
                            Ver detalles
                        </Button>
                    </div>
                </div>
            </div>
            {showDetails && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                        <TypologyDetails
                            details={typology}
                            onClose={() => setShowDetails(false)}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default TypologyElement;
