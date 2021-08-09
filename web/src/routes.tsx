import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CreateGroup from './pages/CreateGroup';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/group" component={CreateGroup} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

