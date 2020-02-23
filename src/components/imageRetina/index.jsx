import React from 'react';
import PropTypes from 'prop-types';

const ImageRetina = props => {
    const {alt, className, set = [], src, onLoad = () => {}} = props;
    return (
        <img
            className={className}
            src={src}
            srcSet={set.join(',')}
            alt={alt}
            onLoad={onLoad}
        />
    );
};

ImageRetina.propTypes = {
    alt: PropTypes.string,
    className: PropTypes.string,
    src: PropTypes.string,
    set: PropTypes.array,
    onLoad: PropTypes.func,
};

export default ImageRetina;
