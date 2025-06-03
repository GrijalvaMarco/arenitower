import React from 'react';
import Video from '../Video';

const VirtualTourVideo = ({ videoId }) => {
    return (
        <div className="video-wrapper bg-secondary mt-[40px]" style={{ height: '80vh', width: '100%' }}>
            <div className="container mx-auto py-[40px] h-full">
                <Video videoId={videoId} />
            </div>
        </div>
    );
};

export default VirtualTourVideo;