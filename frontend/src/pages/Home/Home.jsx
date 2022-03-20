import React, { Component, useState } from 'react'
import Button from '@mui/material/Button';
import './home.scss';


const Home = (close) => {
  const options = ["Everyone", "Friends", "Only me"];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <section onClick={() => close()}>
      <header className='home'>
        <h2>Home</h2>
      </header>
      <div className="postUser">
        <div className="avatar">
          <img
            alt="Dương Ngô Tùng"
            src="https://pbs.twimg.com/profile_images/1472366803342925826/R9TYcoFx_bigger.jpg" />
        </div>
        <div className="contentPost">
          <div className="contentPost__user">
            <textarea type="text" placeholder="What's happening?" />
          </div>
          <div className="privacy" >

            <div className='select' onClick={toggling}>
              {selectedOption || "Everyone"}
            </div>
            {isOpen && (
              <div className='dropContainer'>
                <div className='dropList'>
                  <div className='title'>
                    <h4>Who can reply?</h4>
                    <p>Choose who can reply to this Tweet. Anyone mentioned can always reply.</p>
                  </div>
                  {options.map(option => (
                    <div className='items' onClick={onOptionClicked(option)} key={Math.random()}>
                      {option}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="iconPost">
        <div className="content">
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
    </section>
  );
}

export default Home;
