import React from "react";
import {Link, useLocation, useHistory  } from "react-router-dom";
import "./friends.scss";

const headerAc = [
  {
    display: "Friends",
    path: "/friends",
  },
  {
    display: "Following",
    path: "/friends/following",
  },
];

const HeaderFr = () => { 
  const { pathname } = useLocation();
  const history = useHistory();

  const active = headerAc.findIndex((e) => e.path === pathname);
  return (
    <div className="fiends">
      <div className="fiends__header">
        <div className="backProfile">
            <button type="button" onClick={history.goBack}>
            <i class="fas fa-arrow-left"></i>
            </button>
        </div>
        <div className="nameHeader">
              <h3>Dương Ngô Tùng</h3>
              <p>@DngNgTng1</p>
        </div>
    </div>

      <div className="fiends__main">
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

export default HeaderFr;
