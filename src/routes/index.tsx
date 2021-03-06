import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Spinner } from '../components/Spinner';
import { RoutePaths } from '../lib/constants';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { AuthenticatedRoute } from '../components/AuthenticatedRoute';

import { Home } from './Home';

const Settings = lazy(() => import('./Settings'));
const Login = lazy(() => import('./Login'));
const Plates = lazy(() => import('./Plates'));
const Profile = lazy(() => import('./Profile'));
const PlateDetails = lazy(() => import('./PlateDetails'));

export const Routes: React.FC = () => {
  return (
    <Suspense fallback={<Spinner isOverlay />}>
      <Switch>
        <Route
          exact
          path={RoutePaths.HOME}
          render={() => (
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          )}
        />
        <Route exact path={RoutePaths.LOGIN} component={Login} />
        <Route
          exact
          path={RoutePaths.SETTINGS}
          layoutComponent={DefaultLayout}
          component={Settings}
        />
        <AuthenticatedRoute
          exact
          path={RoutePaths.PLATES}
          layoutComponent={DefaultLayout}
          component={Plates}
        />
        <AuthenticatedRoute
          exact
          path={`${RoutePaths.PLATE_DETAILS}/:id`}
          layoutComponent={DefaultLayout}
          component={PlateDetails}
        />
        <AuthenticatedRoute
          exact
          path={RoutePaths.PROFILE}
          layoutComponent={DefaultLayout}
          component={Profile}
        />
      </Switch>
    </Suspense>
  );
};
