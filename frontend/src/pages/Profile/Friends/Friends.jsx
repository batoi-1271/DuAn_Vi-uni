import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import './pagefriend.scss';
import RouterFriends from './RouterFiends';
import Pagefrends from './Pagefrends';

const Friends = () => {
  return (
    <BrowserRouter>
      <div className="User-friends">
        <Route
          render={(props) => (
            <>
              <Pagefrends {...props} />
              <RouterFriends />
              
            </>
          )}
        />
      </div>
    </BrowserRouter>
  )
}

export default Friends;