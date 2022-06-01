import React, { useState ,useEffect} from "react";
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

  const [user,setUser] = useState();
  
useEffect(()=>{
         
    
          // http://viuni.tk/user/me
      
         const result =  fetch(`http://viuni.tk/user/me`,{
                headers:{
                 'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
               }

             })
                 .then(response  => {
                     if(response.ok){
                         return response.json()
                     }
                     throw Error(response.status)
                 })
                 .then((result) => {
                  setUser(result)
                  console.log(result)
               
                    
                 })
      
        
      
     

 },[0]);
  const d = user != null ? new Date(user.created_date) : null;
  const bird =  user != null ? new Date(user.dob) : null;
 const demo = {
  "id": 3,
  "username": "clone1",
  "gender": true,
  "dob": "2001-01-01",
  "bio": null,
  "created_date": "2022-03-07T16:57:24.926+00:00",
  "last_name": "Nguyễn Sỹ ",
  "first_name": "Hoàng",
  "avatar_image": {
      "id": 24,
      "link_image": "https://res.cloudinary.com/viuni/image/upload/v1648223671/bnzxscsqdt9dumujsnr0.png"
  },
  "cover_image": null,
  "hometown": null,
  "current_city": null
}
{console.log(demo.username)}
  return (
    <>
      {pathname.includes("/profile") && (
         
        //  Object.entries(user.content).map((arr,i) => 
        user != null ?  <div className="profile">
          <div className="profile__header">
            <div className="backProfile">
              <button type="button" onClick={history.goBack}>
                <i class="fas fa-arrow-left"></i>
              </button>
            </div>
            <div className="profileName-user">
              <h3>{user.last_name  != null ? user.last_name : null} {user.first_name  != null ? user.first_name : null}</h3>
              <p>3 Posts </p>
            </div>
          </div>
          <div className="profile__Info">
            <div className="infoContent">
              <div className="infoContent__Cover-img">
                <img
                  src={user.cover_image != null ? user.cover_image.link_image : null}
                  alt=""
                />
              </div>

              <div className="infoContent__TextInfo">
                <div className="infoUser">
                  <div className="infoUser__userAvatar">
                    <img
                      src={user.avatar_image != null ? user.avatar_image.link_image : null}
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
                  <h3></h3>
                  {/* <p>@DngNgTng1</p> */}
                </div>
                <div className="bio">
                  {/* <p></p> */}
                  <p>{user.bio  != null ? user.bio : null}</p>
                </div>
                <div className="dateCreate">
                  <span>
                    <i class="fas fa-birthday-cake" /> Born  {bird  != null ? bird.getDate() : null}/{bird  != null ? bird.getMonth()+1 : null}/{bird  != null ? bird.getFullYear() : null}
                  </span>
                  <span>
                    <i class="fas fa-calendar-alt"></i> Joined  {d  != null ? d.getDate() : null}/{d  != null ? d.getFullYear() : null}
                    
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
          : null
      )}
    </>
  );
};

export default HeaderProfile;
