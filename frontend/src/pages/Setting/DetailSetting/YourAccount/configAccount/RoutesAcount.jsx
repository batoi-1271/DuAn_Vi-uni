import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Account from '../Account/Acount';
import AcountItems from '../Account/AcountItems';
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
            <Route
                path='/settings/account/data'
                component={AcountItems}
            />
        </Switch>
  )
}

export default RoutesAcount;