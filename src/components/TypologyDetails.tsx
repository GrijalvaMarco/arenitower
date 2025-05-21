import React from 'react';
import { MdClose } from "react-icons/md";
import TypologyDetailsPanel from './TypologyDetailsPanel';
import Button from './Button';
import { Link } from "react-router-dom";


const TypologyDetails = ({ details, onClose }: { details: any; onClose: () => void }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 text-white">
            <div className="bg-secondary w-full max-w-full h-[90vh] p-6 rounded shadow-lg relative overflow-y-auto mx-4 transition-transform transform scale-95 opacity-0 animate-fade-in">
                <button
                    className="absolute top-4 right-4 text-primary p-2 rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 ease-in-out border-2 border-gray-300 group"
                    onClick={onClose}
                >
                    <MdClose size={24} className="transform group-hover:rotate-45 transition-transform duration-500" />
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <img
                        src={details.floorPlanImage}
                        alt="Typology"
                        className="w-full h-auto rounded"
                    />
                    <div className="flex flex-col items-start justify-start h-full mx-8 my-8">
                        <div className="mb-6">
                            <h1 className="text-4xl font-bold">{details.label}</h1>
                        </div>
                        <div className="w-full md:w-[60%]">
                            <TypologyDetailsPanel typology={details} />
                        </div>
                        <div className="mt-8">
                            <Link to="/contact">
                                <Button>Solicitar información</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TypologyDetails;
