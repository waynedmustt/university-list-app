import React, { Suspense } from 'react';
import {
    Route,
    Switch,
    Redirect
  } from 'react-router-dom';
import AppLayout from '../../components/app-layout';

const Home = React.lazy(() =>
  import(/* webpackChunkName: "app-home" */ './home')
);
const Search = React.lazy(() =>
  import(/* webpackChunkName: "app-search" */ './search')
);
const Favourite = React.lazy(() =>
  import(/* webpackChunkName: "app-favourite" */ './favourite')
);
const App = ({ match }) => {
    return (
        <AppLayout
        >
            <div className="container univ-list-container pt-5-3">
                <Suspense fallback={<div>Loading ...</div>}>
                    <Switch>
                        <Redirect exact from={`${match.url}/`} to={`${match.url}/home`} />
                        <Route
                            path={`${match.url}/home`}
                            render={props => <Home {...props} />}
                        />
                        <Route
                            path={`${match.url}/search`}
                            render={props => <Search {...props} />}
                        />
                        <Route
                            path={`${match.url}/favourite`}
                            render={props => <Favourite {...props} />}
                        />
                        <Redirect to="/error" />
                    </Switch>
                </Suspense>
            </div>
        </AppLayout>
    );
}

export default App;