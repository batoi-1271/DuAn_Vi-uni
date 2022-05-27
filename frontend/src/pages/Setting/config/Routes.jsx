import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Security from '../DetailSetting/Security/Security';
import YourAccount from '../DetailSetting/YourAccount/YourAccount';

const Routes = () => {
  return (
    <Switch>
            <Route
                path='/settings'
                exact
                component={YourAccount}
            />
            <Route
                path='/settings/security_and_account_access'
                component={Security}
            />
        </Switch>
  )
}

export default Routes