import React, { useEffect, useRef } from 'react'

import { Link, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import './rightPane.scss';


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
  {
    icon: <i class="fa-solid fa-list"></i>,
    display: 'Lists',
    path: '/list'
  },
  {
    icon: <i class="fa-regular fa-user"></i>,
    display: 'Profile',
    path: '/profile'
  },
  {
    icon: <i class="fa-solid fa-ellipsis"></i>,
    display: 'More',
    // path: '/more'
  }
]


const RightPane = () => {
  const {pathname} = useLocation();
  const headerRef = useRef(null);

const active = headerNav.findIndex(e => e.path === pathname);

useEffect(() => {
  const shrinkHeader = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      headerRef.current.classList.add('shrink');
    } else {
      headerRef.current.classList.remove('shrink');
    }
  }
  window.addEventListener('scroll', shrinkHeader);
  return () => {
    window.removeEventListener('scroll', shrinkHeader);
  };
}, []);

  return (
    <div ref={headerRef} className="header" id='header'>
            <div className="header__wrap container">
                <ul className="header__nav">
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
                    <li>
                      <Button variant="contained">Post</Button>
                    </li>
                </ul>
                <div className='infoUser'>
                     <button className="account">
                         <div className="avatar">
                            <img 
                                alt="Dương Ngô Tùng"
                                src="https://pbs.twimg.com/profile_images/1472366803342925826/R9TYcoFx_bigger.jpg"/>
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