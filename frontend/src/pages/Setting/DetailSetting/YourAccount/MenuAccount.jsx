import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './yourAccount.scss';

const menuAccount = [
  {
    icon: <i class="fal fa-user"></i>,
    display: "Acount information",
    intro: "See your account information like email address.",
    path: "/settings/account",
  },
  {
    icon: <i class="fal fa-key"></i>,
    display: "Change your password",
    intro: "Change your password at any time.",
    path: "/settings/password",
  },
  {
    icon: <i class="fal fa-arrow-alt-to-bottom"></i>,
    display: "Download an archive of your data",
    intro: "Get insights into the type of information stored for your account.",
    path: "/settings/download_your_data",
  },
  {
    icon: <i class="fal fa-user-friends"></i>,
    display: "ViDeck teams",
    intro: "Invite anyone to Vi-uni from this account using the Teams feature in ViDeck.",
    path: "/settings/teams",
  },
  {
    icon: <i class="fal fa-heart-broken"></i>,
    display: "Deactivate your account ",
    intro: "Find out how you can deactivate your account.",
    path: "/settings/deactivate",
  }
];

const MenuAccount = () => {

  const { pathname } = useLocation();
  const active = menuAccount.findIndex((e) => e.path === pathname);

  return (
    <>
      {pathname !== "/settings/account" && pathname !== "/settings/password" && pathname !== "/settings/account/data" && (
        <div className="menuAccount" id='menuAccount'>
          <div className="YourAccount__header">
            <h2>Your Account</h2>
          </div>
          <div className="YourAccount__describe">
            <p>See information about your account,
              download an archive of your data,
              or learn about your account deactivation options</p>
          </div>
          <div className="YourAccount__main">
            <ul className="header-nav">
              {menuAccount.map((e, i) => (
                <Link to={e.path}>
                  <li key={i} className={`${i === active ? "active" : ""}`}>
                    <div className='icon'>
                      {e.icon}
                      </div>
                    <div className='intro'>
                      <h4>{e.display}</h4>
                      <p>{e.intro}</p>
                    </div>

                    <div className='arrow'>
                      <i class="fal fa-angle-right"></i>
                      </div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default MenuAccount;