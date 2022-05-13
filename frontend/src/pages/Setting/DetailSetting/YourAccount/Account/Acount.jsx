import React from 'react';
import { Link, useLocation, useHistory } from "react-router-dom";
import ConfirmPass from '../../../ConfirmPass/ConfirmPass';
import Header from '../../../Header/Header';
import './account.scss';
import AcountItems from './AcountItems';

const Account = () => {
  const history = useHistory();

  return (
    <div className='Account'>
        <Header title = "Account information"/>
        <ConfirmPass/>
        {/* <AcountItems/> */}
    </div>
  )
}

export default Account;