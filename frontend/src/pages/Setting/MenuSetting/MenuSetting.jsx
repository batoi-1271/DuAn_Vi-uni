import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './menuSetting.scss';

const menuSetting = [
  {
    display: "Your account",
    path: "/settings",
  },
  {
    display: "Vi-uni Blue",
    path: "/settings/",
  },
  {
    display: "Security and account access",
    path: "/settings/security_and_account_access",
  },
  {
    display: "Privacy and safety",
    path: "/settings/privacy_and_safety",
  },
  {
    display: "Notifications",
    path: "/settings/notifications",
  },
  {
    display: "Accessibility, display, and languages",
    path: "/settings/accessibility_display_and_languages",
  },
];

const MenuSetting = () => {

  const { pathname } = useLocation();
  const [modal, setModal] = useState(false);

  const active = menuSetting.findIndex((e) => e.path === pathname);
  return (
    <div className="menuSetting" id='menuSetting'>
      <div className="menuSetting__header">
        <h2>Settings</h2>
        <i class="fas fa-cog fa-spin"></i>
      </div>
      <div className="menuSetting__main">
        <ul className="header-nav">
          {menuSetting.map((e, i) => (
            <Link to={e.path}>
            <li key={i} className={`${i === active ? "active" : ""}`}>
              
                {e.display}
              
              <i class="fal fa-angle-right"></i>
            </li>
            </Link>
          ))}
        </ul>
      </div>
  </div>
  )
}

export default MenuSetting;