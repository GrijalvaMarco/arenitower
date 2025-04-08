import React from 'react';
import Typologies from '../components/Typologies';
import HeroSection from '../components/heroSection/HeroSection';

const TypologyPage = () => {
    const typologies = [
        { id: 1, name: 'Modelo A', area: '120 sqm', quantity: 5, details: { bedrooms: 3, bathrooms: 2, image: '/images/typology-a.jpg' } },
        { id: 2, name: 'Modelo B', area: '150 sqm', quantity: 3, details: { bedrooms: 4, bathrooms: 3, image: '/images/typology-b.jpg' } },
        { id: 3, name: 'Modelo C', area: '150 sqm', quantity: 3, details: { bedrooms: 4, bathrooms: 3, image: '/images/typology-b.jpg' } },
        { id: 4, name: 'Estudio a nivel de Lobby 33 m2', area: '150 sqm', quantity: 3, details: { bedrooms: 4, bathrooms: 3, image: '/images/typology-b.jpg' } },
        { id: 5, name: 'Estudio a nivel de Lobby 77 m2', area: '150 sqm', quantity: 3, details: { bedrooms: 4, bathrooms: 3, image: '/images/typology-b.jpg' } },
        { id: 6, name: 'Departamento 138.95 m2', area: '150 sqm', quantity: 3, details: { bedrooms: 4, bathrooms: 3, image: '/images/typology-b.jpg' } },
        { id: 7, name: 'Departamento 147.79 m2', area: '150 sqm', quantity: 3, details: { bedrooms: 4, bathrooms: 3, image: '/images/typology-b.jpg' } },
    ];

    return (
        <div className="bg-secondary">
            <HeroSection page={"Tipologías"} />
            <Typologies typologies={typologies} />
        </div>
    );
};

export default TypologyPage;
