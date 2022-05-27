import React from "react";
import { Switch, Route } from "react-router-dom";
import Following from "./page/Following";
import MyFriends from "./page/MyFriends";

const RoutesFr = () => {
  return (
    <Switch>
      <Route
        path="/friends"
        exact
        component={MyFriends}
      />
      <Route
        path="/friends/following"
        component={Following}
      />
    </Switch>
  );
};

export default RoutesFr;
