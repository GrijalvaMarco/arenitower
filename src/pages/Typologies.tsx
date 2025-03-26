import React from 'react';
import Typologies from '../components/Typologies';
import HeroSection from '../components/heroSection/HeroSection';

const TypologyPage = () => {
    const typologies = [
        { id: 1, name: 'Typology A', area: '120 sqm', quantity: 5, details: { bedrooms: 3, bathrooms: 2, image: '/images/typology-a.jpg' } },
        { id: 2, name: 'Typology B', area: '150 sqm', quantity: 3, details: { bedrooms: 4, bathrooms: 3, image: '/images/typology-b.jpg' } },
        // ...add more typologies as needed
    ];

    return (
        <div>
            <HeroSection page={"Tipologías"} />
            <Typologies typologies={typologies} />
        </div>
    );
};

export default TypologyPage;
