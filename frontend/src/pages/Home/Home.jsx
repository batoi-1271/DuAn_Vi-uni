import React, { Component, useState } from "react";
import Button from "@mui/material/Button";
import "./home.scss";
import PostUser from "./PostUser";
import Heart from "react-animated-heart";


const Home = () => {
  const [isClick, setClick] = useState(false);
  return (
    <section>
      <header className="home">
        <h2>Home</h2>
      </header>
      <PostUser />
      <div className="home__post">
        <div className="content-post">
          <div className="post-avatar">
            <img
              src="https://pbs.twimg.com/profile_images/1472366803342925826/R9TYcoFx_bigger.jpg"
              alt=""
            />
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
                <img
                  src="https://pbs.twimg.com/media/FOIOPAgVkAAinpk?format=jpg&name=small"
                  alt=""
                />
              </div>
            </div>
            <div className="post-interactive">
              <i class="fa-regular fa-comment-dots">
                <p>1</p>
              </i>
                <div id="heart">
                    <Heart className="heart" isClick={isClick} onClick={() => setClick(!isClick)} />
                </div>
                <p>1</p>
              <i class="fa-solid fa-arrow-up-from-bracket"></i>
            </div>
          </div>
        </div>
        <div className="content-post">
          <div className="post-avatar">
            <img
              src="https://pbs.twimg.com/profile_images/1472366803342925826/R9TYcoFx_bigger.jpg"
              alt=""
            />
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
                <img
                  src="https://scontent.fhan5-3.fna.fbcdn.net/v/t1.6435-9/193226360_1207246593071491_9157876366763072431_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=2Py6h5PZ1E0AX9Wcdmy&_nc_ht=scontent.fhan5-3.fna&oh=00_AT9LKcERIiW4FP8NCoeqFiYA6E6x2e48ocnyiYh3SlRp1Q&oe=625A0794"
                  alt=""
                />
              </div>
            </div>
            <div className="post-interactive">
            <i class="fa-regular fa-comment-dots">
                <p>1</p>
              </i>
              <i class="fa-solid fa-heart">
                <p>1</p>
              </i>
              <i class="fa-solid fa-arrow-up-from-bracket"></i>
            </div>
          </div>
        </div>
        <div className="content-post">
          <div className="post-avatar">
            <img
              src="https://pbs.twimg.com/profile_images/1472366803342925826/R9TYcoFx_bigger.jpg"
              alt=""
            />
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
                <img
                  src="https://pbs.twimg.com/media/FOIOPAgVkAAinpk?format=jpg&name=small"
                  alt=""
                />
              </div>
            </div>
            <div className="post-interactive">
            <i class="fa-regular fa-comment-dots">
                <p>1</p>
              </i>
              <i class="fa-solid fa-heart">
                <p>1</p>
              </i>
              <i class="fa-solid fa-arrow-up-from-bracket"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
