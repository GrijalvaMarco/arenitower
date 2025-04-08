import React from 'react';
import TypologyElement from './TypologyElement';

const Typologies = ({ typologies }: { typologies: Array<any> }) => {
    return (
        <div className="bg-secondary h-[80vh] overflow-y-auto m-[20px]">
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3 gap-3">
                {typologies.map((typology) => (
                    <TypologyElement key={typology.id} typology={typology} />
                ))}
            </div>
        </div>
    );
};

export default Typologies;
