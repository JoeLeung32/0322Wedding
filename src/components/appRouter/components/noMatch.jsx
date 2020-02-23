import React from 'react';
import {Redirect, useLocation} from 'react-router-dom';
import qs from 'qs';

import PropTypes from 'prop-types';

const NoMatch = ({redirectTo}) => {
    const location = useLocation();
    const {pathname} = location;
    const qsData = qs.stringify({
        redirect_uri: btoa(unescape(encodeURIComponent(pathname))),
        dnb_case: 'not_matched',
        dnb_time: new Date().getTime(),
    });
    const opt = {
        pathname: redirectTo,
        search: `?${qsData}`,
        state: {referrer: location},
    };
    if (pathname) {
        if (pathname === '/') delete opt.search;
        if (pathname.includes('/signout')) delete opt.search;
    }
    return <Redirect from="/" to={opt} />;
};
NoMatch.propTypes = {
    redirectTo: PropTypes.string,
};

export default NoMatch;
