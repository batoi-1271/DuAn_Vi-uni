import React, { Component,useState } from 'react'
import Button from '@mui/material/Button';

import './home.scss';

const Home = () => {
  const [foodState, setState] = useState("Onlyme");
  return (
    <section>
      <header className='home'>
        <h2>Home</h2>
      </header>
      <div className="postUser">
        <div className="avatar">
          <img 
              alt="Dương Ngô Tùng"
              src="https://pbs.twimg.com/profile_images/1472366803342925826/R9TYcoFx_bigger.jpg"/>
        </div>
          <div className="contentPost">
            <div className="contentPost__user">
              <input type="text" placeholder="What's happening?"/>
            </div>
            <div className="privacy">
            <select
              className="custom-select"
              onChange={(e) => {
                const selected = e.target.value;
                setState(selected);
              }}>
              <option value="Everyone">Everyone</option>
              <option value="Friends">Friends</option>
              <option value="Onlyme">Only me</option>
            </select>
            </div>
            <div className="iconPost">
              <div className="icon">
                <a href=""><i class="fa-solid fa-image"></i></a>
                <a href=""><i class="fa-solid fa-location-pin"></i></a>
                <a href=""><i class="fa-regular fa-face-grin"></i></a>
              </div>
              <div className="btnPost">
                <Button variant="contained">Post</Button>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}

export default Home;