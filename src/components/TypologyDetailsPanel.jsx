import React from 'react';

const TypologyDetailsPanel = ({ typology }) => {
    return (
        <div className="bg-gray rounded-lg w-full">
            <div className="bg-primary rounded-t-lg p-6 py-3 text-center">
                <h2 className="text-white font-bold text-lg">ÁREA PONDERADA {typology.area}<sup> m2</sup></h2>
            </div>
            <div className="mt-4 space-y-4 p-6">
                <div className="flex justify-arround gap-2">
                    <span className="text-black">Area Privativa:</span>
                    <span className="text-primary font-bold">50 <sup>m2</sup></span>
                </div>
                <div className="flex justify-arround gap-2">
                    <span className="text-black">Terraza Techada:</span>
                    <span className="text-primary font-bold">50 <sup>m2</sup></span>
                </div>
                <div className="flex justify-arround gap-2">
                    <span className="text-black">Bodega:</span>
                    <span className="text-primary font-bold">50 <sup>m2</sup></span>
                </div>
            </div>
        </div>
    );
};

export default TypologyDetailsPanel;
