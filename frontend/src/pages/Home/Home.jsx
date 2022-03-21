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
        <div className="home__post">
          <div className="content-post">
                <div className="post-avatar">
                    <img src="https://pbs.twimg.com/profile_images/1472366803342925826/R9TYcoFx_bigger.jpg" alt="" />
                </div>
                <div className="post-info">
                    <div className="post-info-header">
                        <div className="post-name">
                            <h4>Dương Ngô Tùng</h4>
                            <p>@DngNgTng1</p>
                            <p>22h</p>   
                        </div>
                        <div className="post-dot">
                        <i class="fa-solid fa-ellipsis"></i>
                        </div>
                    </div>
                    <div className="post-content">
                        <div className="post-content-title">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <div className="post-content-img">
                            <img src="https://pbs.twimg.com/media/FOIOPAgVkAAinpk?format=jpg&name=small" alt="" />
                        </div>
                    </div>
                    <div className="post-interactive">
                        <i class="fa-solid fa-comment"><p>1</p></i>
                        <i class="fa-solid fa-heart"><p>1</p></i>
                        <i class="fa-solid fa-arrow-up-from-bracket"></i>
                    </div>
                </div>
            </div>
            <div className="content-post">
                <div className="post-avatar">
                    <img src="https://pbs.twimg.com/profile_images/1472366803342925826/R9TYcoFx_bigger.jpg" alt="" />
                </div>
                <div className="post-info">
                    <div className="post-info-header">
                        <div className="post-name">
                            <h4>Dương Ngô Tùng</h4>
                            <p>@DngNgTng1</p>
                            <p>22h</p>   
                        </div>
                        <div className="post-dot">
                        <i class="fa-solid fa-ellipsis"></i>
                        </div>
                    </div>
                    <div className="post-content">
                        <div className="post-content-title">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <div className="post-content-img">
                            <img src="https://scontent.fhan5-3.fna.fbcdn.net/v/t1.6435-9/193226360_1207246593071491_9157876366763072431_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=2Py6h5PZ1E0AX9Wcdmy&_nc_ht=scontent.fhan5-3.fna&oh=00_AT9LKcERIiW4FP8NCoeqFiYA6E6x2e48ocnyiYh3SlRp1Q&oe=625A0794" alt="" />
                        </div>
                    </div>
                    <div className="post-interactive">
                        <i class="fa-solid fa-comment" ><p>1</p></i>
                        <i class="fa-solid fa-heart"><p>1</p></i>
                        <i class="fa-solid fa-arrow-up-from-bracket"></i>
                    </div>
                </div>
            </div>
            <div className="content-post">
                <div className="post-avatar">
                    <img src="https://pbs.twimg.com/profile_images/1472366803342925826/R9TYcoFx_bigger.jpg" alt="" />
                </div>
                <div className="post-info">
                    <div className="post-info-header">
                        <div className="post-name">
                            <h4>Dương Ngô Tùng</h4>
                            <p>@DngNgTng1</p>
                            <p>22h</p>   
                        </div>
                        <div className="post-dot">
                        <i class="fa-solid fa-ellipsis"></i>
                        </div>
                    </div>
                    <div className="post-content">
                        <div className="post-content-title">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <div className="post-content-img">
                            <img src="https://pbs.twimg.com/media/FOIOPAgVkAAinpk?format=jpg&name=small" alt="" />
                        </div>
                    </div>
                    <div className="post-interactive">
                        <i class="fa-solid fa-comment"><p>1</p></i>
                        <i class="fa-solid fa-heart"><p>1</p></i>
                        <i class="fa-solid fa-arrow-up-from-bracket"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
  );
}

export default Home;
