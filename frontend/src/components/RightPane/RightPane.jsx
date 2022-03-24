import React, { useEffect, useRef, useState } from 'react'

import { Link, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import './rightPane.scss';
import Modal from './Modal/Modal';
import PostUser from '../../pages/Home/PostUser';
import More from './More/More';


const headerNav = [
  {
    icon: <i class="fa-solid fa-house-chimney"></i>,
    display: 'Home',
    path: '/'
  },
  {
    icon: <i class="fa-regular fa-bell"></i>,
    display: 'Notifications',
    path: '/notifications'
  },
  {
    icon: <i class="fa-regular fa-message"></i>,
    display: 'Message',
    path: '/message'
  },
  {
    icon: <i class="fa-regular fa-bookmark"></i>,
    display: 'Saved',
    path: '/saved'
  },
  // {
  //   icon: <i class="fa-solid fa-list"></i>,
  //   display: 'Lists',
  //   path: '/list'
  // },
  {
    icon: <i class="fa-regular fa-user"></i>,
    display: 'Profile',
    path: '/profile'
  },

]


const RightPane = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);
  const [more, setMore] = useState(false);
  const ToggleMore = () => setMore(!more);

  const { pathname } = useLocation();
  const headerRef = useRef(null);

  const active = headerNav.findIndex(e => e.path === pathname);
  return (
    <div ref={headerRef} className="header" id='header'>
      <div className="header__wrap container">
        <ul className="header__nav nav">
          {
             headerNav.map((e, i) => (
              <li key={i} className={`${i === active ? 'active' : ''}`}>

                <Link to={e.path}>
                  <span>{e.icon}</span>
                  {e.display}
                </Link>
              </li>
            ))
          }
          <div className='more'>
          
            <button onClick={() => ToggleMore()}><i class="fa-solid fa-ellipsis"/>More</button>
            <More show={more} close={ToggleMore} title="">
            </More>
          </div>
          <div className='post'>
            <Button variant="contained" onClick={() => Toggle()}>Post</Button>
            <Modal show={modal} close={Toggle} title="Create post">
              <PostUser />
            </Modal>

          </div>
        </ul>

        <div className='infoUser'>
          <button className="account">
            <div className="avatar">
              <img
                alt="Dương Ngô Tùng"
                src="https://pbs.twimg.com/profile_images/1472366803342925826/R9TYcoFx_bigger.jpg" />
            </div>
            <div className='info'>
              <div className="name">Dương Ngô Tùng</div>
              <div className="username">@DngNgTng1</div>
            </div>
            <div className="edit">
              <i class="fa-solid fa-ellipsis"></i>
            </div>
          </button>
        </div>
      </div>
    </div>
  );

}

export default RightPane;