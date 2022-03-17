import React, { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom';
import './leftPane.scss';
import logo from '../../assets/logo.png';

const LeftPane = () => {
  // const {pathname} = useLocation();
  const headerRef = useRef(null);


  return (
    <div ref={headerRef} className="paneLeft" id='paneLeft'>
            <div className="paneLeft__wrap container">
                  <div className="logo">
                      <Link to="/"><img src={logo} alt="" /></Link>
                  </div>
                  <div className="search">
                      <span class="icon"><i class="fa fa-search"></i></span>
                      <input type="text" placeholder='Search Vi-uni'/>
                  </div>
            </div>
            <div className="paneLeft__content">
              <h3>You might like</h3>
              <div>
                <img src="" alt="" />
                <div>
                  <p><a href="">Name</a></p>
                  <span>@abc</span>
                </div>
                <button>Follow</button>
              </div>
            </div>
      </div>
  );
}

export default LeftPane;