import React from "react";

import {BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Friends from "../components/MyFriends/Friends";

import Home from "../pages/Home/Home";
import Messages from "../pages/Message/Messages";
import Notification from "../pages/Notification/Notification";
import Profile from "../pages/Profile/Profile";
import Save from "../pages/Saved/Save";
import Settings from "../pages/Setting/Settings";

const Routes = () => {
  return (
    <Switch>
      <Route 
        path="/settings" 
        component={Settings} />
      <Route 
        path="/profile" 
        component={Profile} />
      <Route 
        path="/friends" 
        component={Friends} />
      <Route 
        path="/saved" 
        component={Save} />
      <Route 
        path="/message" 
        component={Messages} />
      <Route 
        path="/notifications" 
        component={Notification} />
      <Route 
        path="/" 
        exact 
        component={Home} />
    </Switch>
  );
};

export default Routes;
