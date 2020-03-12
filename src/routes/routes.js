import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import { ListsComparison } from "../examples/ListsComparison";
import { RoutesMap } from "./routes-map";

export const Routes = () => (
  <Switch>
    <Route path={RoutesMap.lists} component={ListsComparison} />
    <Route render={props => <Redirect to={RoutesMap.lists} {...props} />} />
  </Switch>
);
