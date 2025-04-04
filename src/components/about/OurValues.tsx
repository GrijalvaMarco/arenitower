import React, { useState, useEffect } from 'react';
import Container from '../Container';
import photo1 from '../../Assets/home-carousel1.jpeg';

const OurValues = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0); // First item expanded by default

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionItems = [
        {
            title: 'Exclusividad Radical',
            content: 'El mercado de lujo busca lo único, no lo masivo.',
            list: ['Edición limitada (ej: "Solo 22 departamentos")', 'Amenidades hiperpersonalizadas (ej: concierge 24/7)', 'Diseños arquitectónicos firmados por un nombre de prestigio']
        },
        {
            title: 'Flexibilidad Inteligente (Lock-Off como Estándar)',
            content: 'Atrae tanto a residentes como inversionistas.',
            list: ['Diseño modular', 'Opciones de personalización', 'Uso eficiente del espacio']
        },
        {
            title: 'Conexión Emocional con Puerto Vallarta',
            content: 'El lujo ya no es solo materiales, es pertenencia.',
            list: ['Integración cultural', 'Vistas panorámicas', 'Acceso a eventos locales']
        }
    ];

    return (
        <section className="bg-secondary text-white py-[100px]">
            <Container>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-16">
                    {/* Left Column */}
                    <div className="w-full md:w-1/2 border-b border-gray-700 pb-4">
                        <h2 className="text-3xl font-bold text-white mb-8">
                            Nuestros Valores
                        </h2>
                        <p className="text-gray-300 mb-8 leading-relaxed mt-4" style={{ marginTop: '1rem' }}>
                            En Arenitower, creemos que la compra de un departamento es más que una transacción; es el inicio de una nueva etapa en la vida de nuestros clientes. Por eso, nos guiamos por valores que garantizan una experiencia transparente, segura y personalizada.
                        </p>
                        <div className="space-y-6" style={{ marginTop: '1rem' }}>
                            {accordionItems.map((item, index) => (
                                <div key={index} className="pb-4">
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full text-left py-5 flex justify-between items-center text-white font-semibold bg-gray-800 hover:bg-gray-700 transition-colors"
                                    >
                                        <span className="text-lg">{item.title}</span>
                                        <span className="text-lg">{activeIndex === index ? '-' : '+'}</span>
                                    </button>
                                    <div
                                        className={`transition-all duration-500 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        {activeIndex === index && (
                                            <div className="py-4 text-gray-300 bg-gray-900">
                                                <p className="mb-4 leading-relaxed">{item.content}</p>
                                                <ul className="list-disc list-inside space-y-2 pl-4">
                                                    {item.list.map((listItem, idx) => (
                                                        <li key={idx}>{listItem}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                    {index < accordionItems.length - 1 && <hr className="border-gray-700" />}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full md:w-1/2 space-y-8 pl-4 pb-4 px-4">
                        <img
                            src={photo1}
                            alt="Professional in modern office"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default OurValues;
