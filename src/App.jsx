import React, {Suspense} from 'react';

import AppLoader from "components/appLoader";
import AppRouter from "components/appRouter";

const App = () => {
    return (
        <Suspense fallback={<AppLoader />}>
            <AppRouter />
        </Suspense>
    );
};

export default App;
