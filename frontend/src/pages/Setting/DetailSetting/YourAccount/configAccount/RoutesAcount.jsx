import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Account from '../Account/Acount';
import Password from '../Password/Password';

const RoutesAcount = () => {
  return (
    <Switch>
            <Route
                path='/settings/account'
                exact
                component={Account}
            />
            <Route
                path='/settings/password'
                component={Password}
            />
        </Switch>
  )
}

export default RoutesAcount;