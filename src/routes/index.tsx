import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import Filters from '../pages/Filters';
import Search from '../pages/Search';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/filters" exact component={Filters} />
    <Route path="/search" exact component={Search} />
  </Switch>
);

export default Routes;
