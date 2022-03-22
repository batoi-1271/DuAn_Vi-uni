import React, { useRef,useState } from "react";
import "./profile.scss";
import { Link, useLocation } from "react-router-dom";
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
    display: "Likes",
    path: "/profile/likes",
  },
];

const HeaderProfile = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  const active = headerAc.findIndex((e) => e.path === pathname);
  return (
    <>
      {pathname.includes("/profile") && (
        <div className="profile" ref={headerRef}>
          <div className="profile__header">
            <div className="profileName-user">
              <h3>Dương Ngô Tùng</h3>
              <p>3 Posts </p>
            </div>
          </div>
          <div className="profile__Info">
            <div className="infoContent">
              <div className="infoContent__Cover-img">
                <img
                  src="https://lovablemessages.com/wp-content/uploads/2021/12/bo-hinh-nen-3d-that-dep-va-that-hap-dan-24-1068x601.jpg"
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
                  <ButtonEdit show={modal} close = {Toggle} title = "Edit profile">
                  </ButtonEdit>
                  </div>
                </div>
                <div className="userName">
                  <h3>Dương Ngô Tùng</h3>
                  <p>@DngNgTng1</p>
                </div>
                <div className="dateCreate">
                  <span>
                    <i class="fa-solid fa-calendar-days"></i> Joined December
                    2021
                  </span>
                </div>
                <div className="follower">
                  <p>3 Following</p>
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





