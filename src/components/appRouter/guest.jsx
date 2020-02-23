import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import AppLoader from 'components/appLoader';
import NoMatch from './components/noMatch';

const GuestRoute = () => {
    const AppIndex = lazy(() => import('components/appIndex'));
    const Invite = lazy(() => import('components/invite'));
    const OurDate = lazy(() => import('components/ourDate'));
    const Details = lazy(() => import('components/details'));
    const AddAHomepage = lazy(() => import('components/addAHomepage'));
    return (
        <Suspense fallback={<AppLoader />}>
            <BrowserRouter>
                <Switch>
                    <Switch>
                        <Route exact path={`/`} component={AppIndex} />
                        <Route exact path={`/invitation/:name`} component={() => <Invite />} />
                        <Route exact path={`/invitations/:name`} component={() => <Invite />} />
                        <Route exact path={`/0322`} component={OurDate} />
                        <Route exact path={`/details/:type`} component={Details} />
                        <Route exact path={`/faq/addHomepage`} component={AddAHomepage} />
                        <Route path="*">
                            <NoMatch redirectTo={`/`} />
                        </Route>
                    </Switch>
                </Switch>
            </BrowserRouter>
        </Suspense>
    );
};

export default GuestRoute;
