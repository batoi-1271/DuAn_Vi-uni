import React, { Component, useState } from "react";
import "./home.scss";
import PostUser from "./PostUser";
import Tooltip from '@mui/material/Tooltip';

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
              src="https://images.unsplash.com/photo-1648022504736-c04c27b68cb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=378&q=80"
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
                  src="https://images.unsplash.com/photo-1640622304293-ec9c89c6bac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt=""
                />
              </div>
            </div>


          {/* Sử dụng icon và tooltip title    */}
            <div className="post-interactive">

              <div className="post-interactive-icon">
                <Tooltip id="comment" title="Comment" arrow>
                  <button>
                    <i class="far fa-comment-dots"></i>
                  </button>
                </Tooltip>
                <p>1</p>
              </div>

              <div className="post-interactive-icon">
                <Tooltip id="heart" title="Like" arrow>
                  <button>
                  <i class="fal fa-heart"></i>
                  </button>
                </Tooltip>
                <p>1</p>
              </div>

              <div className="post-interactive-icon">
              <Tooltip title="Share" arrow>
                <button>
                <i class="far fa-share-square"></i>
                </button>
              </Tooltip>
              <p>1</p>
              </div>
              
            </div>
          </div>
        </div>
        <div className="content-post">
          <div className="post-avatar">
            <img
              src="https://images.unsplash.com/photo-1647288850210-f5b9b1ea34a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
            />
          </div>
          <div className="post-info">
            <div className="post-info-header">
              <div className="post-name">
                <h4>Trần văn Hào</h4>
                <p>@t_tranvanhao</p>
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
                  src="https://images.unsplash.com/photo-1648668425549-84b695d2ec2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=442&q=80"
                  alt=""
                />
              </div>
            </div>
            <div className="post-interactive">
              <div className="post-interactive-icon">
                <Tooltip id="comment" title="Comment" arrow>
                  <button>
                    <i class="far fa-comment-dots"></i>
                  </button>
                </Tooltip>
                <p>1</p>
              </div>
              <div className="post-interactive-icon">
                <Tooltip id="heart" title="Like" arrow>
                  <button>
                  <i class="fal fa-heart"></i>
                  </button>
                </Tooltip>
                <p>1</p>
              </div>
              <div className="post-interactive-icon">
              <Tooltip title="Share" arrow>
                <button>
                <i class="far fa-share-square"></i>
                </button>
              </Tooltip>
              <p>1</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-post">
          <div className="post-avatar">
            <img
              src="https://images.unsplash.com/photo-1646841238177-b3efeafe8b97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
            />
          </div>
          <div className="post-info">
            <div className="post-info-header">
              <div className="post-name">
                <h4>Nguyễn Bá Tới</h4>
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
                  src="https://images.unsplash.com/photo-1648656455858-f03fd496547b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </div>
            </div>
            <div className="post-interactive">
              <div className="post-interactive-icon">
                <Tooltip id="comment" title="Comment" arrow>
                  <button>
                    <i class="far fa-comment-dots"></i>
                  </button>
                </Tooltip>
                <p>1</p>
              </div>
              <div className="post-interactive-icon">
                <Tooltip id="heart" title="Like" arrow>
                  <button>
                  <i class="fal fa-heart"></i>
                  </button>
                </Tooltip>
                <p>1</p>
              </div>
              <div className="post-interactive-icon">
              <Tooltip title="Share" arrow>
                <button>
                <i class="far fa-share-square"></i>
                </button>
              </Tooltip>
              <p>1</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-post">
          <div className="post-avatar">
            <img
              src="https://images.unsplash.com/photo-1642697651382-e8c60a220e7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
            />
          </div>
          <div className="post-info">
            <div className="post-info-header">
              <div className="post-name">
                <h4>Nguyễn Giá Trường</h4>
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
                  src="https://images.unsplash.com/photo-1640622308205-8ad9478c2386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </div>
            </div>
            <div className="post-interactive">
              <div className="post-interactive-icon">
                <Tooltip id="comment" title="Comment" arrow>
                  <button>
                    <i class="far fa-comment-dots"></i>
                  </button>
                </Tooltip>
                <p>1</p>
              </div>
              <div className="post-interactive-icon">
                <Tooltip id="heart" title="Like" arrow>
                  <button>
                  <i class="fal fa-heart"></i>
                  </button>
                </Tooltip>
                <p>1</p>
              </div>
              <div className="post-interactive-icon">
              <Tooltip title="Share" arrow>
                <button>
                <i class="far fa-share-square"></i>
                </button>
              </Tooltip>
              <p>1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
