import React from 'react';

function VirtualTour360({ url }) {
    return (
        <div className="w-full h-[80vh]">
            <iframe
                src={url}
                className="w-full h-full"
                allowFullScreen
                title="360 Virtual Tour"
            ></iframe>
        </div>
    );
}

export default VirtualTour360;