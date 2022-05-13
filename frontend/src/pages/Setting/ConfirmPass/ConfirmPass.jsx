import React from 'react';
import { Link, useLocation, useHistory } from "react-router-dom";
import AcountItems from '../DetailSetting/YourAccount/Account/AcountItems';

import './confirmPass.scss';

const ConfirmPass = () => {
  return (
    <div className='confirmPass'>
        <div className="heading">
            <h2>Confirm your password</h2>
            <p>Please enter your password in order to get this.</p>
        </div>
        <div className="formPass">
            <form action="">
                <div className="inputPass">
                    <input type="password" placeholder='Password'/>
                </div>
                <div className='forgotPass'>
                    <a href="#">Forgot password?</a>
                </div>
                <div className="btnConfirm">
                    <Link to="/settings/account/data"><input type="button" value="Confirm"></input></Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ConfirmPass