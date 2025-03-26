import { useState } from "react";
import { tipologyData } from "../../data/data";
import TypologyDetails from "./TypologyDetails";

function TipologySection() {
    const [selectedTipology, setSelectedTipology] = useState(null);

    const tipologyGroups = tipologyData.reduce((acc, tipology) => {
        if (acc[tipology.type]) {
            acc[tipology.type].push(tipology);
        } else {
            acc[tipology.type] = [tipology];
        }
        return acc;
    }, {});

    const [collapsedTypes, setCollapsedTypes] = useState(
        Object.keys(tipologyGroups).reduce((acc, type) => {
            acc[type] = true;
            return acc;
        }, {})
    );

    const toggleCollapse = (type) => {
        console.log('Type: ', type);
        setCollapsedTypes((prev) => {
            const newCollapsedTypes = Object.keys(prev).reduce((acc, key) => {
                acc[key] = key === type ? !prev[key] : true;
                return acc;
            }, {});
            return newCollapsedTypes;
        });
    };

    return (
        <div className="tipology-section bg-primary text-white py-[40px]">
            <h1
                className={`relative mb-[20px] py-[15px] text-center sm:text-5xl text-3xl uppercase font-bold`}>
                Tipología
            </h1>
            <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-2">
                        {
                            Object.keys(tipologyGroups).map((type) => {
                                const isCollapsed = collapsedTypes[type];
                                return (
                                    <div key={type} className="mb-[20px] mt-[10px]">
                                        <h2
                                            className="text-3xl font-bold cursor-pointer"
                                            onClick={() => toggleCollapse(type)}
                                        >
                                            {type}
                                        </h2>
                                        {!isCollapsed && (
                                            <ul>
                                                {
                                                    tipologyGroups[type].map((tipology) => {
                                                        return (
                                                            <li
                                                                key={tipology.name}
                                                                className="cursor-pointer p-[5px] border border-secondary text-center hover:bg-secondary hover:text-primary"
                                                                onClick={() => setSelectedTipology(tipology)}
                                                            >
                                                                {tipology.name}
                                                            </li>
                                                        );
                                                    })
                                                }
                                            </ul>
                                        )}
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className="col-span-6">
                        {
                            selectedTipology ? (
                                <img
                                    src={selectedTipology.image}
                                    alt={selectedTipology.name}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <p>Selecciona una tipología para ver la imagen</p>
                            )
                        }
                    </div>
                    <div className="col-span-4">
                            {selectedTipology ? (
                                <TypologyDetails tipology={selectedTipology} />
                            ) : (
                                <p>Selecciona una tipología para ver los detalles</p>
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TipologySection;