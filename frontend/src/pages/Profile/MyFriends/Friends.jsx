import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./friends.scss";

import HeaderFr from "./HeaderFr";
import RoutesFr from "./RoutesFr";

const Friends = () => {
  return (
    <BrowserRouter>
      <div className="User-friends">
        <Route
          render={(props) => (
            <>
              <HeaderFr {...props} />
              <RoutesFr />
            </>
          )}
        />
      </div>
    </BrowserRouter>
  );
};

export default Friends;
