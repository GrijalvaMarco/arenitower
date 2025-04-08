import React, { useState } from 'react';
import TypologyDetails from './TypologyDetails';
import photo from '../Assets/home-carousel1.jpeg';
import Button from './Button';

const TypologyElement = ({ typology }: { typology: any }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <>
            <div className="bg-lightGray shadow-md overflow-hidden transition-transform transform hover:scale-105">
                <img
                    src={photo}
                    alt={`${typology.name} illustration`}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h2 className="text-xl font-semibold text-white mb-2">{typology.name}</h2>
                    <p className="text-sm text-white mb-4">Quantity: {typology.quantity}</p>
                    <p className="text-sm text-white mb-4">Area: {typology.area}</p>
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
