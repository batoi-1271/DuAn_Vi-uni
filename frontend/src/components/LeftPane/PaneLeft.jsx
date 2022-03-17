import React, { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom';
import './leftPane.scss';
import logo from '../../assets/logo.png';


const users = [
  {
    id: 1,
    name: "Nguyen Ba Toi",
    username: "Toiba2001",
    imageUrl: <img
      alt="Dương Ngô Tùng"
      src="https://pbs.twimg.com/profile_images/1472366803342925826/R9TYcoFx_bigger.jpg" />,
  },
  {
    id: 2,
    name: "Nguyen Ba Toi",
    username: "Toiba2001",
    imageUrl: <img
      alt="Dương Ngô Tùng"
      src="https://pbs.twimg.com/profile_images/1472366803342925826/R9TYcoFx_bigger.jpg" />,
  },
  {
    id: 3,
    name: "Nguyen Ba Toi",
    username: "Toiba2001",
    imageUrl: <img
      alt="Dương Ngô Tùng"
      src="https://pbs.twimg.com/profile_images/1472366803342925826/R9TYcoFx_bigger.jpg" />,
  }
];

const LeftPane = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);


  return (
    <div ref={headerRef} className="paneLeft" id='paneLeft'>
      <div className="paneLeft__wrap container">
        <div className="logo">
          <Link to="/"><img src={logo} alt="" /></Link>
        </div>
        <div className="search">
          <span class="icon"><i class="fa fa-search"></i></span>
          <input type="text" placeholder='Search Vi-uni' />
        </div>
      </div>
      <div className="box_paneLeft">
        <h3>You might like</h3>
        <ul className="paneLeft__info">
          {
            users.map((e, i) => (
              <li key={i} className="infoUser">
                <div className="avatar">
                  {e.imageUrl}
                </div>
                <div className='info'>
                  <div className="name">{e.name}</div>
                  <div className="username">{e.username}</div>
                </div>
                <div className="addFr">
                  <button>Add friend</button>
                </div>
              </li>
            ))
          }
        </ul>
        <span><a href="">See more</a></span>
      </div>
    </div>
  );
}

export default LeftPane;