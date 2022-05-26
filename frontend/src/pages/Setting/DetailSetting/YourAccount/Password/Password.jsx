import React from 'react';
import { Link, useLocation, useHistory } from "react-router-dom";
import Header from '../../../Header/Header';
import "./password.scss";

const Password = () => {
  const history = useHistory();

  return (
    <div className='Password'>
      <Header title="Change your password" />
      <div className="formPass">
        <form action="">
          <div className="formPass_currentPass">
            <input type="password" placeholder='Current password' />
            <p><Link to="#">Forgot password?</Link></p>
          </div>

          <div className="formPass_newPass">
            <input type="password" placeholder='New password' />
          </div>
          <div className="formPass_confirmPass">
            <input type="password" placeholder='Confirm password' />
          </div>

          <div className="formPass_Text">
            <p>Changing your password will log you out of all your
              active Vi-uni sessions
              except the one you’re using at this time. The <Link to="#"> 2 applications </Link>
              with access to your account won’t be affected. <Link to="#">Learn more</Link></p>
          </div>
          <div id="btnUpdate" className="formPass_btn">
            <input type="button" className='btnUpdate' value="Save"></input>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Password;