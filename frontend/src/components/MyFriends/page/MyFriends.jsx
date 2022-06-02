import { Button } from "@mui/material";
import React, { useRef, useState,useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Unfriend from "../../TogUnfriend/Unfriend";
 import avatar from "../../../assets/avatar.png";
import "./myfriends.scss";

const MyFriends = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const [modal, setModal] = useState(false);
    const [alluser, setalluser] = useState([]);
  const Toggle = () => setModal(!modal);
    useEffect(() => {
    async function getdata() {
      // const res = await axios.get('http://viuni.tk/home');
      const res =  axios('http://viuni.tk/home',
      {
        method: 'GET',
        headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem("accessToken"),
                  "Content-Type":"application/json"
              }
      }
      )
      return res
    }
    getdata().then(res => {
      console.log(res);
      setalluser(res.data);
    })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <div className="myFriends" >
      {alluser.map((alluser,e)=> {
        return (
        <div className="friends-lish" key={alluser.id}>
          <div className="friends-lish-profile">
            <div className="friends-lish-avt">
              <img
                src={alluser.avatar_image.link_image ? alluser.avatar_image.link_image : avatar}
                alt=""
              />
            </div>
            <div className="friends-lish-name">
               <h3> {alluser.last_name} {alluser.first_name}</h3>
              <p>@{alluser.username}</p>
            </div>
          </div>
          <div className="friends-lish-fow">
            <Button onClick={() => Toggle()}><span>Friend</span></Button>

            <Unfriend show={modal} close={Toggle}/>
            <i class="fas fa-ellipsis-h"></i>
          </div>
      </div>
        )
      })
      }

    </div>
  );
};

export default MyFriends;
