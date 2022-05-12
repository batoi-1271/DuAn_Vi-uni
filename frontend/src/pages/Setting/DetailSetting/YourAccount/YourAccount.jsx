import React from "react";
import { BrowserRouter, Route} from "react-router-dom";

import RoutesAcount from './configAccount/RoutesAcount';
import MenuAccount from './MenuAccount';


import './yourAccount.scss';
const YourAccount = () => {
  return (
    <div className='YourAccount' id='YourAccount'>
       <BrowserRouter>
        <div className=''>
            <Route render={props => (
                <>
                    <MenuAccount {...props}/>
                    <RoutesAcount/>
                </>
            )}/> 
        </div>
    </BrowserRouter>
    </div>
  )
}

export default YourAccount;