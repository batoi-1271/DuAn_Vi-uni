import React from "react";
import {Switch, BrowserRouter, Route } from "react-router-dom";

import "./notification.scss";

import HeaderNoti from "./HeaderNoti";
import AllNotification from "./page/AllNotification";
import Mention from "./page/Mention";

const Notification = () => {
  return (
    <BrowserRouter>
      <div className="User-notification">
        <Route
          render={(props) => (
            <>
              <HeaderNoti {...props} />
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
            </>
          )}
        />
      </div>
    </BrowserRouter>
  );
};

export default Notification;
