import React from 'react';
import TypologyElement from './TypologyElement';

const Typologies = ({ typologies }: { typologies: Array<any> }) => {
    return (
        <div className="h-[80vh] overflow-y-auto m-[20px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {typologies.map((typology) => (
                    <TypologyElement key={typology.id} typology={typology} />
                ))}
            </div>
        </div>
    );
};

export default Typologies;
