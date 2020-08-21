import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import Filters from '../pages/Filters';
import Search from '../pages/Search';
import Login from '../pages/Login';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/filters" exact component={Filters} />
    <Route path="/search" exact component={Search} />
    <Route path="/login" exact component={Login} />
  </Switch>
);

export default Routes;
