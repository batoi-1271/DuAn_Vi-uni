import React, {useRef } from "react";
import "../Notification/notification.scss";
import {Link, useLocation } from "react-router-dom";


const headerAc = [
  {
    display: "All",
    path: "/notifications",
  },
  {
    display: "Mentions",
    path: "/notifications/mention",
  }
];

const HeaderNoti = () => { 
  const { pathname } = useLocation();
  const active = headerAc.findIndex((e) => e.path === pathname);

  return (
    
    <div className="notification">
      <div className="notification__header">
        <h2>Notification</h2>
        <span>
          <a href="">
            <i class="fas fa-cog"></i>
          </a>
        </span>
      </div>
      <div className="notification__main">
        <ul className="header-nav">
          {headerAc.map((e, i) => (
            <li key={i} className={`${i === active ? "active" : ""}`}>
              <Link to={e.path}>
                {e.display}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeaderNoti;
