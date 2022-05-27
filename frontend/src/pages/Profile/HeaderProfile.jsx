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
                      src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/273716337_5253722654673043_8378353710474997808_n.jpg?_nc_cat=108&ccb=1-6&_nc_sid=8bfeb9&_nc_ohc=v37aVhKpA_UAX8KafEZ&_nc_ht=scontent.fhan14-2.fna&oh=00_AT8Y3uGQvEdNVfmVJCTGSH9XIxRoEKYtF5k1vEYx_F1zbg&oe=627EADFA"
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
