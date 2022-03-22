import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Following from './Following/Following';
import MyFriend from './Friends/MyFriend';

const RouterFriends = () => {
  return (
    <Switch>
        <Route
            path='/friends/following'
            component={Following}
        />
        <Route
            path='/friends'
            exact
            component={MyFriend}
        />
    </Switch>
  )
}

export default RouterFriends;