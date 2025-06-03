import React from 'react';
import TypologyElement from './TypologyElement';

const Typologies = ({ typologies }: { typologies: Array<any> }) => {
    return (
        <div className="top-[-200px]">
            <div className="bg-secondary m-[20px] sm:grid-cols-1">
                <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {typologies.map((typology) => (
                        <TypologyElement key={typology.id} typology={typology} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Typologies;
