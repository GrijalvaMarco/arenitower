import { useState } from "react";
import { tipologyData, typologyDataByLevel } from "../../data/data";
import TypologyDetails from "./TypologyDetails";

function TipologySection() {
    // Estado para almacenar la tipología seleccionada (objeto completo de tipologyData)
    const [selectedTipology, setSelectedTipology] = useState(tipologyData[0]);

    // Agrupamos los datos por tipo (N1, N2, etc.)
    const typeGroups = typologyDataByLevel.reduce((acc, typology) => {
        if (acc[typology.type]) {
            acc[typology.type].push(typology);
        } else {
            acc[typology.type] = [typology];
        }
        return acc;
    }, {});

    // Estado para controlar qué grupos están colapsados
    const [collapsedTypes, setCollapsedTypes] = useState(
        Object.keys(typeGroups).reduce((acc, type) => {
            acc[type] = true;
            return acc;
        }, {})
    );

    // Función para alternar el estado de colapso de un grupo
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

    // Función para seleccionar una tipología y buscar sus detalles completos
    const handleSelectTypology = (typologyItem) => {
        // Buscar los detalles completos en tipologyData usando el typologyId
        const fullTypologyDetails = tipologyData.find(item => item.id === typologyItem.typologyId);
        if (fullTypologyDetails) {
            setSelectedTipology(fullTypologyDetails);
        }
    };

    return (
        <div className="tipology-section bg-secondary text-white py-[40px]">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-4">
                    {/* Sidebar para los grupos de tipologías */}
                    <div className="col-span-12 sm:col-span-4 lg:col-span-2">
                        {
                            Object.keys(typeGroups).map((type) => {
                                const isCollapsed = collapsedTypes[type];
                                return (
                                    <div key={type} className="mb-[20px] mt-[10px] pl-[20px]">
                                        <h2
                                            className="text-2xl sm:text-3xl font-bold cursor-pointer"
                                            onClick={() => toggleCollapse(type)}
                                        >
                                            {type}
                                        </h2>
                                        {!isCollapsed && (
                                            <ul>
                                                {
                                                    typeGroups[type].map((typology) => {
                                                        return (
                                                            <li
                                                                key={typology.name}
                                                                className="cursor-pointer p-[5px] border border-secondary text-center hover:bg-secondary hover:text-primary"
                                                                onClick={() => handleSelectTypology(typology)}
                                                            >
                                                                {typology.name}
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
                    {/* Sección de imagen */}
                    <div className="col-span-12 sm:col-span-8 lg:col-span-6">
                        {
                            selectedTipology ? (
                                <img
                                    src={selectedTipology.floorPlanImage}
                                    alt={selectedTipology.name}
                                    className="w-full h-full object-cover p-4"
                                />
                            ) : (
                                <p className="text-center">Selecciona una tipología para ver la imagen</p>
                            )
                        }
                    </div>
                    {/* Sección de detalles */}
                    <div className="col-span-12 sm:col-span-12 lg:col-span-4">
                        {
                            selectedTipology ? (
                                <TypologyDetails tipology={selectedTipology} />
                            ) : (
                                <p className="text-center">Selecciona una tipología para ver los detalles</p>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TipologySection;