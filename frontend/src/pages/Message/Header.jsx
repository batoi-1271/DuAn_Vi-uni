import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

const Header = () => {
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
                  component={Mention} />
              </Switch>
            </>
          )}
        />
      </div>
    </BrowserRouter>
  );
};

export default Header;
