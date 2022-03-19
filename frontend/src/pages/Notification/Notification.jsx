import React from "react";
import "../Notification/notification.scss";
import { BrowserRouter, Route } from "react-router-dom";

import "./notification.scss";
import HeaderNoti from "./HeaderNoti";
import RoutesNo from "./RoutesNo";

const Notification = () => {
  return (
    <BrowserRouter>
      <div className="User-notification">
        <Route
          render={(props) => (
            <>
              <HeaderNoti {...props} />
              <RoutesNo />
              
            </>
          )}
        />
      </div>
    </BrowserRouter>
  );
};

export default Notification;
