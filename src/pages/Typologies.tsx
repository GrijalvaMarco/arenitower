import React from 'react';
import Typologies from '../components/Typologies';
import HeroSection from '../components/ImageHeroSection';
import { tipologyData }  from '../data/data';
import image from "../Assets/typology-hero-section.jpg";

const TypologyPage = () => {

    return (
        <div className="bg-secondary">
            <HeroSection image={image} />
            <Typologies typologies={tipologyData} />
        </div>
    );
};

export default TypologyPage;
