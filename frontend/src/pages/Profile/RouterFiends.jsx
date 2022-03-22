import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Followers from './Follow/Followers/Followers';
import Friends from './Friends/Friends';

const RouterFriends = () => {
  return (
    <Switch>
        <Route
            path='/profile/follower'
            component={Followers}
        />
        <Route
            path='/profile/friends'
            exact
            component={Friends}
        />
    </Switch>
  )
}

export default RouterFriends