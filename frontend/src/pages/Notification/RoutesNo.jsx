import React from "react";
import { Switch, Route } from "react-router-dom";
import AllNotification from "./page/AllNotification";
import Mention from "./page/Mention";

const RoutesNo = () => {
  return (
    <Switch>
      <Route 
        path="/notifications" 
        exact 
        component={AllNotification}
      />
      <Route 
        path="/notifications/mention" 
        component={Mention} 
      />

    </Switch>
  );
};

export default RoutesNo;
