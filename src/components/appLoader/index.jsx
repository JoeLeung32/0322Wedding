import React from 'react';
import PropTypes from 'prop-types';

import AppLoaderContent from 'components/appLoader/elements/content';

const AppLoader = ({absolute, fixed, transparent, noWrapper}) => {
    const css = ['appLoader', 'h-100'];
    if (absolute) css.push('position-absolute w-100');
    if (fixed) css.push('position-fixed w-100');
    if (transparent) css.push('bg-transparent');
    const content = 'Loading...';
    if (noWrapper) {
        return <AppLoaderContent content={content} />;
    }
    return (
        <div className={css.join(' ')}>
            <div className="d-flex flex-wrap align-items-center vh-100">
                <AppLoaderContent content={content} />
            </div>
        </div>
    );
};
AppLoader.propTypes = {
    absolute: PropTypes.bool,
    fixed: PropTypes.bool,
    transparent: PropTypes.bool,
    noWrapper: PropTypes.bool,
};

export default AppLoader;
