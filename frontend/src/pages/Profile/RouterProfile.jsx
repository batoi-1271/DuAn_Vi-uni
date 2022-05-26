import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Post from './Post/Post';
import Media from './Media/Media';
import Share from './share/Share';
import Home from '../Home/Home';
import Friends from '../../components/MyFriends/Friends';


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
                path='/profile/share'
                component={Share}
            />
            <Route
                path='/'
                exact
                component={Home}
            />
                <Route 
                path='/friends'
                component={Friends}
            />
        </Switch>
     );
}
 
export default RouterProfile;

