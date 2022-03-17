import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';
import Notification from '../pages/Notification';
import Messages from '../pages/Messages';
import Bookmarks from '../pages/Bookmarks'; 
import Lists from '../pages/List';
import Profile from '../pages/Profile';

const Routes = () => {
    return (
        <Switch>
            {/* <Route
                path='/:category/search/:keyword'
                component={Catalog}
            /> */}
            <Route
                path='/:category/:id'
                component={Detail}
            />
            <Route
                path='/profile'
                component={Profile}
            />
            <Route
                path='/list'
                component={Lists}
            />
            <Route
                path='/saved'
                component={Bookmarks}
            />
            <Route
                path='/message'
                component={Messages}
            />
            <Route
                path='/notifications'
                component={Notification}
            />
            <Route
                path='/'
                exact
                component={Home}
            />
        </Switch>
    );
}

export default Routes;
