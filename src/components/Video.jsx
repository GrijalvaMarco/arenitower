import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ videoId, width, height }) => {
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
            <iframe
                style={{ width: '100%', height: '100%' }}
                src={videoSrc}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube video"
            ></iframe>
        </div>
    );
};

Video.propTypes = {
    videoId: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
};

Video.defaultProps = {
    width: '560px',
    height: '315px',
};

export default Video;