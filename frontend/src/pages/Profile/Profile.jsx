import React from "react";
import { BrowserRouter, Route} from "react-router-dom";

import HeaderProfile from "./HeaderProfile";
import RouterProfile from "./RouterProfile";

import "../Profile/profile.scss";

const Profile = () => {
  return (
    <BrowserRouter>
        <div className='User-profile'>
            <Route render={props => (
                <>
                    <HeaderProfile {...props}/>
                    <RouterProfile/>
                </>
            )}/> 
        </div>
    </BrowserRouter>
  );
};

export default Profile;
