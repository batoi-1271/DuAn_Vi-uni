import React from "react";
import { BrowserRouter, Route} from "react-router-dom";

import MenuSetting from "./MenuSetting/MenuSetting";
import Routes from "./config/Routes";

import './settings.scss';

const Settings = () => {
  return (
    <BrowserRouter>
        <div className='settings'>
            <Route render={props => (
                <>
                    <MenuSetting {...props}/>
                    <Routes/>
                </>
            )}/> 
        </div>
    </BrowserRouter>
  )
}

export default Settings;