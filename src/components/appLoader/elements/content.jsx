import React from 'react';
import PropTypes from 'prop-types';

const AppLoaderContent = ({content}) => (
    <div className="d-flex justify-content-center w-100">
        <div>{content}</div>
    </div>
);
AppLoaderContent.propTypes = {
    content: PropTypes.string,
};

export default AppLoaderContent;
