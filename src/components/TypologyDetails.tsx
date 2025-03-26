import React from 'react';

const TypologyDetails = ({ details, onClose }: { details: any; onClose: () => void }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-full h-[80vh] p-6 rounded shadow-lg relative overflow-y-auto mx-4">
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
                    <div className="flex flex-col items-center justify-center h-full">
                        <div className="text-center mb-6">
                            <h1 className="text-2xl font-bold">Typology Name</h1>
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
