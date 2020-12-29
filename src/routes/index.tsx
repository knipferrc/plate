import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from './home';

const Settings = lazy(() => import('./settings'));
const Login = lazy(() => import('./login'));

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/login" component={Login} />
    </Switch>
  );
};
