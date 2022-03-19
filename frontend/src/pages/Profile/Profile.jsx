import React, { Component, useState, useRef } from "react";
import "../Profile/profile.scss";
import { BrowserRouter, Route, Link, useLocation } from "react-router-dom";
import HeaderProfile from "./HeaderProfile";
import RouterProfile from "./RouterProfile";


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
