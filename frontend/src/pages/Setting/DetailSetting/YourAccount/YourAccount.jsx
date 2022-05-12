import React from 'react';

import './yourAccount.scss';
const YourAccount = () => {
  return (
    <div className='YourAccount' id='YourAccount'>
      <div className="YourAccount__header">
        <h2>Your Account</h2>
      </div>
      <div className="YourAccount__describe">
        <p>See information about your account, 
          download an archive of your data, 
          or learn about your account deactivation options</p>
      </div>
    </div>
  )
}

export default YourAccount;