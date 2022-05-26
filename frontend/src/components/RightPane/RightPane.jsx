import React, { useRef, useState } from 'react';
import {BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
import './rightPane.scss';
import './more.scss';
import OutsideClickHandler from 'react-outside-click-handler';

import Modal from './Modal/Modal';
import PostUser from '../../pages/Home/PostUser';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';

const headerNav = [
  {
    icon: <i class="fas fa-house-user"></i>,
    display: 'Home',
    path: '/'
  },
  {
    icon: <i class="far fa-bells"></i>,
    display: 'Notifications',
    path: '/notifications'
  },
  {
    icon: <i class="far fa-comments-alt"></i>,
    display: 'Message',
    path: '/message'
  },
  {
    icon: <i class="far fa-bookmark"></i>,
    display: 'Saved',
    path: '/saved'
  },
  
  {
    icon: <i class="far fa-user"></i>,
    display: 'Profile',
    path: '/profile'
  },

]


const RightPane = () => {

  // STYLE ACTIVE AVATAR

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: -1,
        left: -1,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

  const { pathname } = useLocation();

  const headerRef = useRef(null);

  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  const [isOpenAccout, setIsOpenAccount] = useState(false);
  const ToglingAccount = () => setIsOpenAccount(!isOpenAccout);

  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const active = headerNav.findIndex(e => e.path === pathname);

  return (
    <div ref={headerRef} className="header" id='header'>
      <div className="header__wrap container">

        {/* MENU BAR  */}

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

          {/* OPEN MORE  */}

          <OutsideClickHandler onOutsideClick={() => { setIsOpen(false) }}>
            <div className="moreRight">
              <div className='more'>
                <button onClick={toggling}><i class="far fa-ellipsis-h" />More</button>
              </div>
              {isOpen && (
                <div className="dropContainer">
                  <ul>
                    <li className='items'><Link to="/settings"><i class="far fa-cogs"></i>Setting and private</Link></li>
                    <li className='items'><Link to="#"><i class="far fa-question-circle"></i>Help center</Link></li>
                    <li className='items'><Link to="#"><i class="fas fa-fill-drip"></i>Display</Link></li>
                  </ul>
                </div>
              )}
            </div>
          </OutsideClickHandler>
{/* OPEN MORE  */}

          {/* BUTTON POST  */}

          <div className='post'>
            <Button variant="contained" onClick={() => Toggle()}>Post</Button>
            <Modal show={modal} close={Toggle} title="Create post">
              <PostUser />
            </Modal>

          </div>
        </ul>

 {/* BUTTON POST  */}

        {/* TOGGLING LOGOUT ACCOUNT */}
        
        <OutsideClickHandler onOutsideClick={() => { setIsOpenAccount(false) }}>
          <div className='infoUser'>
            {isOpenAccout && (
              <div className="dropAccount">
                <div className="accountTog">
                  <div className="avatar">
                    <img
                      alt="Dương Ngô Tùng"
                      src="https://pbs.twimg.com/profile_images/1472366803342925826/R9TYcoFx_bigger.jpg" />
                  </div>
                  <div className='infoAcc'>
                    <div className="name">Dương Ngô Tùng</div>
                    <div className="username">@DngNgTng1</div>
                  </div>
                </div>
                <ul className='itemAcc'>
                  <li className='add'><Link to="#">Add an existing account</Link></li>
                  <li className='logout'><Link to="#">Log out <span>@DuongNgoTug</span></Link></li>
                </ul>
              </div>
            )}

{/* TOGGLING LOGOUT ACCOUNT */}

              {/* INFO USER  */}

            <button className="account" onClick={ToglingAccount}>
              <StyledBadge className='avatar'
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
              >
                <Avatar alt="Remy Sharp" src="https://pbs.twimg.com/profile_images/1472366803342925826/R9TYcoFx_bigger.jpg" />
              </StyledBadge>

              {/* <div className="avatar">
              <img
                alt="Dương Ngô Tùng"
                src="https://pbs.twimg.com/profile_images/1472366803342925826/R9TYcoFx_bigger.jpg" />
            </div> */}

              <div className='info'>
                <div className="name">Dương Ngô Tùng</div>
                <div className="username">@DngNgTng1</div>
              </div>
              <div className="edit">
                <i class="fas fa-ellipsis-h"></i>
              </div>
            </button>

  {/* INFO USER  */}
          </div>
        </OutsideClickHandler>

      </div>

      <div className="copyRight">

          <ul>
            <li><Link to="#">Terms of Service</Link></li>
            <li><Link to="#">Privacy Policy</Link></li>
            <li><Link to="#">Cookie Policy</Link></li>
            <li><Link to="#">Accessibility</Link></li>
            <li><Link to="#">Ads info</Link></li>
            <li><Link to="#">More</Link></li>
            <li><Link to="#">© 2022 Vi-Uni, Inc.</Link></li>
          </ul>
          
      </div>
    </div>
  );

}

export default RightPane;