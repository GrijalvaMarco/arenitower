import React, { useState } from 'react';
import TypologyDetails from './TypologyDetails';

const TypologyElement = ({ typology }: { typology: any }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="bg-secondary border p-4 rounded shadow-sm">
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => setShowDetails(true)}
            >
                {typology.name}
            </button>
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
