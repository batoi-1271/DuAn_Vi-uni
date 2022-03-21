import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Post from './Post/Post';
import Media from './Media/Media';
import Likes from './Likes/Likes';
import Home from '../Home/Home';

const RouterProfile = () => {
    return ( 
        <Switch>
            <Route
                path='/profile'
                exact
                component={Post}
            />
            <Route
                path='/profile/media'
                component={Media}
            />
            <Route
                path='/profile/likes'
                component={Likes}
            />
            <Route
                path='/'
                exact
                component={Home}
            />
        </Switch>
     );
}
 
export default RouterProfile;