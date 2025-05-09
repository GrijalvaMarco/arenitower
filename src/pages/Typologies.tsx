import React from 'react';
import Typologies from '../components/Typologies';
import HeroSection from '../components/ImageHeroSection';
import { tipologyData }  from '../data/data';
import image from "../Assets/typology-hero-section.jpg";
import ClientTestimonials from '../components/ClientTestimonials';
import Amenities from '../components/Amenities';

const TypologyPage = () => {

    return (
        <div className="bg-secondary">
            <HeroSection image={image} text={"Tipologías"} />
            <ClientTestimonials />
            <Amenities />
            <Typologies typologies={tipologyData} />
        </div>
    );
};

export default TypologyPage;
