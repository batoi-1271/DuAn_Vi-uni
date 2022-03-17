import React from 'react';
import "../scss/components/home.scss"

const Home = () => {
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
            <input type="text" placeholder="What's happening?"/>
          </div>
      </div>
    </section>
  );
}

export default Home;