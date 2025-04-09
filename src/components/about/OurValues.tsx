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
                    <div className="w-full md:w-1/2 border-gray-700 pb-4">
                        <h2 className="text-3xl font-bold text-white mb-8">
                            Nuestros Valores
                        </h2>
                        <p className="text-gray-300 mb-8 leading-relaxed mt-4" style={{ marginTop: '1rem' }}>
                            En Arenitower, creemos que la compra de un departamento es más que una transacción; es el inicio de una nueva etapa en la vida de nuestros clientes. Por eso, nos guiamos por valores que garantizan una experiencia transparente, segura y personalizada.
                        </p>
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
