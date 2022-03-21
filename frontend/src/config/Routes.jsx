import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import List from '../pages/List/List';
import Messages from '../pages/Message/Messages';
import Notification from '../pages/Notification/Notification';
import Profile from '../pages/Profile/Profile';
import Save from '../pages/Saved/Save';


const Routes = () => {
    return (
        <Switch>
            <Route
                path='/profile'
                component={Profile}
            />
            <Route
                path='/list'
                component={List}
            />
            <Route
                path='/saved'
                component={Save}
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
