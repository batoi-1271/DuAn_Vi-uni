import React from 'react';
import { Link, useLocation, useHistory } from "react-router-dom";
import Header from '../../../Header/Header';
import './account.scss';

const Account = () => {
  const history = useHistory();

  return (
    <div className='Account'>
        <Header title = "Your Account"/>
    </div>
  )
}

export default Account;