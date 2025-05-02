import React from 'react';
import Typologies from '../components/Typologies';
import HeroSection from '../components/heroSection/HeroSection';
import { tipologyData }  from '../data/data';

const TypologyPage = () => {

    return (
        <div className="bg-secondary">
            <HeroSection page={"Tipologías"} />
            <Typologies typologies={tipologyData} />
        </div>
    );
};

export default TypologyPage;
