import React, { useState } from "react";
import "./profile.scss";
import { Link, useLocation, useHistory } from "react-router-dom";
import ButtonEdit from "./Button/ButtonEdit";

const headerAc = [
  {
    display: "Post",
    path: "/profile",
  },
  {
    display: "Media",
    path: "/profile/media",
  },
  {
    display: "Share",
    path: "/profile/likes",
  },
];

const HeaderProfile = () => {
  const { pathname } = useLocation();
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  const history = useHistory();

  const active = headerAc.findIndex((e) => e.path === pathname);
  return (
    <>
      {pathname.includes("/profile") && (
        <div className="profile">
          <div className="profile__header">
          <div className="backProfile">
              <button type="button" onClick={history.goBack}>
              <i class="fas fa-arrow-left"></i>
              </button>
        </div>
            <div className="profileName-user">
              <h3>Dương Ngô Tùng</h3>
              <p>3 Posts </p>
            </div>
          </div>
          <div className="profile__Info">
            <div className="infoContent">
              <div className="infoContent__Cover-img">
                <img
                  src="https://images.unsplash.com/photo-1640622308238-70e5f22fe0be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt=""
                />
              </div>
              <div className="infoContent__TextInfo">
                <div className="infoUser">
                  <div className="infoUser__userAvatar">
                    <img
                      src="https://pbs.twimg.com/profile_images/1472366803342925826/R9TYcoFx_bigger.jpg"
                      alt=""
                    />
                  </div>
                  <div className="infoUser__userEdit">
                    <button onClick={() => Toggle()}>Edit profile</button>
                    <ButtonEdit
                      show={modal}
                      close={Toggle}
                      title="Edit profile"
                    ></ButtonEdit>
                  </div>
                </div>
                <div className="userName">
                  <h3>Dương Ngô Tùng</h3>
                  <p>@DngNgTng1</p>
                </div>
                <div className="bio">
                  <p>Không có công việc nào không có áp lực, tuy nhiên chỉ có không đam mê công việc mới là áp lớn lực khiến ta từ bỏ công việc đó.</p>
                </div>
                <div className="dateCreate">
                  <span>
                    <i class="fa-solid fa-calendar-days"></i> Joined December
                    2021
                  </span>
                </div>
                <div className="friends">
                  <Link to="/friends">
                    {" "}
                    <p>7 Friends</p>{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="profileItems-menu">
              <ul className="header-nav">
                {headerAc.map((e, i) => (
                  <li key={i} className={`${i === active ? "active" : ""}`}>
                    <Link to={e.path}>{e.display}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderProfile;
