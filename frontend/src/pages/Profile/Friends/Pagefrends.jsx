import React from 'react'
// import './pagefriend.scss';
import { Link, useLocation, useHistory } from "react-router-dom";

const headerAc = [
  {
    display: "Friends",
    path: "/friends/",
  },
  {
    display: "Following",
    path: "/friends/following",
  },
];

const Pagefrends = () => {

  const { pathname } = useLocation();
  const history = useHistory();

  function handleClick() {
    history.push("/profile");
  }
  const active = headerAc.findIndex((e) => e.path === pathname);
  return (
    <div className="pageFriend">
      <div className="pageHeader">
        <div className="iconHeader">
          <button type="button" onClick={handleClick}>
            <i class="fa-solid fa-arrow-left"></i>
          </button>
        </div>
        <div className="nameHeader">
          <h3>Dương Ngô Tùng</h3>
          <p>@DngNgTng1</p>
        </div>
      </div>
      <div className="friends__main">
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

export default Pagefrends;