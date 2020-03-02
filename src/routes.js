import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import { ListsComparison } from "./examples/ListsComparison";

export const RoutesMap = {
  lists: "/lists"
};

export const Routes = () => (
  <Switch>
    <Route path={RoutesMap.lists} component={ListsComparison} />
    <Route render={props => <Redirect to={RoutesMap.lists} {...props} />} />
  </Switch>
);
