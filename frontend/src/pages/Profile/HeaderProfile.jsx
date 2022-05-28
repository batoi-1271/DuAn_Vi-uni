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
    path: "/profile/share",
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
                      src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/61126501_562569430817430_3500967725759463424_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=T_NcSF-1hRgAX8UanoN&_nc_ht=scontent.fhan2-4.fna&oh=00_AT8-3T42UKKeM0X2XmdsaKpeOLHL8OQdj7-j-TviaCvREQ&oe=62B5316A"
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
                  {/* <p></p> */}
                  <p>Ra xã hội làm ăn bươn chải, liều thì ăn nhiều, không liều thì ăn ít. Muốn thành công thì phải chấp nhận trải qua đắng cay ngọt bùi.</p>
                </div>
                <div className="dateCreate">
                  <span>
                    <i class="fas fa-birthday-cake" /> Born October 14, 2001
                  </span>
                  <span>
                    <i class="fas fa-calendar-alt"></i> Joined December
                    2021
                  </span>
                </div>
                <div className="friends">
                  <Link to="/friends">
                    <p>7 Friends</p>
                  </Link>
                  <Link to="/friends/following">
                    <p>0 Following</p>
                  </Link>
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
        </div>
      )}
    </>
  );
};

export default HeaderProfile;
