import React, { useState, useEffect } from "react";
import OutsideClickHandler from 'react-outside-click-handler';
import { Link } from "react-router-dom";

import FadeLoader from "react-spinners/FadeLoader";
import { css } from "@emotion/react";

import Comment from '../../components/Comment/Comment';

import "./home.scss";

import PostUser from "./PostUser";


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const [loading, setLoading] = useState(false);
  const override = css`
    position: absolute;
    top: 60%;
    left: 52%;
    transform: translate(-60%, -52%);
  `;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);

  return (
    <section>
      <header className="home">
        <h2>Home</h2>
      </header>
      <PostUser />
      {loading ? (
        <FadeLoader
          color={"#36BBD7"}
          speedMultiplier={2}
          css={override}
          loading={loading}
          size={30}
        />
      ) : (
        <div className="home__post">
          <div className="content-post">
            <div className="post-avatar">
              <img
                src="https://images.unsplash.com/photo-1648022504736-c04c27b68cb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=378&q=80"
                alt=""
              />
            </div>
            <div className="post-info">
              <div className="post-info_header">
                <div className="post-name">
                  <h4>Dương Ngô Tùng</h4>
                  <p>@DngNgTng1</p>
                  <p>22h</p>
                </div>

                <OutsideClickHandler onOutsideClick={() => { setIsOpen(false) }}>
                  <div className="post-more">
                    <div className="post-more_Content">
                      <button onClick={toggling}><i class="fas fa-ellipsis-h"></i></button>
                      {isOpen && (
                        <div className="dropContainer">
                          <div className="unfollow dropContainer_content">
                            <i class="fal fa-user-times"></i>
                            <Link to="#">Unfollow <span>@username</span></Link>
                          </div>
                          <div className="report dropContainer_content">
                            <i class="fal fa-flag"></i>
                            <Link to="#">Report post</Link>
                          </div>
                          <div className="save dropContainer_content">
                            <i class="fal fa-bookmark"></i>
                            <Link to="#">Save post</Link>
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
                </OutsideClickHandler>

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

              <div className="post-interactive">
                <img src="" alt="" />
                <div className="post-interactive_icon">
                  <Comment/>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
