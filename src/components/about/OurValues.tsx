import React from 'react';
import Container from '../Container';
import photo1 from '../../Assets/aboutus-our-values.jpg';

const OurValues = () => {

    const accordionItems = [
        {
            title: 'Exclusividad:',
            content: 'Solo 22 residencias. Un privilegio para quienes buscan lo extraordinario.',
        },
        {
            title: 'Flexibilidad Inteligente (Lock-Off):',
            content: 'Vive en tu santuario, renta tu inversión. Dos espacios, un mismo lujo.',
        },
        {
            title: 'Conexión Emocional con Puerto Vallarta:',
            content: 'Diseños que celebran el alma de Vallarta: donde el lujo se funde con la brisa del Pacífico.',
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
                            En Areni Tower, creemos que la compra de un departamento es más que una transacción; es el inicio de una nueva etapa en la vida de nuestros clientes. Por eso, nos guiamos por valores que garantizan una experiencia transparente, segura y personalizada.
                        </p>
                        <div className="space-y-6" style={{ marginTop: '1rem' }}>
                            {accordionItems.map((item, index) => (
                                <div key={index}>
                                    <div className="w-full text-left py-2 flex justify-between items-center text-white font-semibold bg-gray-800">
                                        <span className="text-lg">{item.title}</span>
                                    </div>
                                    <div className="py-2 text-gray-300 bg-gray-900">
                                        <p className="leading-relaxed">{item.content}</p>
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
