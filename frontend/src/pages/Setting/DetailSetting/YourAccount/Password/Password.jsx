import React from 'react';
import { Link, useLocation, useHistory } from "react-router-dom";
import Header from '../../../Header/Header';
import "./password.scss";

const Password = () => {
  const history = useHistory();

  return (
    <div className='Password'>
      <Header title = "Change your password"/>
    </div>
  )
}

export default Password;