import React, { Component, useState, useEffect } from "react";
import "./home.scss";
import PostUser from "./PostUser";
import Tooltip from '@mui/material/Tooltip';
import FadeLoader from "react-spinners/FadeLoader";
import { css } from "@emotion/react";


const Home = () => {
  const [isClick, setClick] = useState(false);

  const [loading, setLoading] = useState(false);
  const override = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -505);
`;
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <section>
      <header className="home">
        <h2>Home</h2>
      </header>
      <PostUser />
      {
        loading ? (
          <FadeLoader color={"#36BBD7"} speedMultiplier={2} css={override} loading={loading} size={30} />
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
                <div className="post-info-header">
                  <div className="post-name">
                    <h4>Dương Ngô Tùng</h4>
                    <p>@DngNgTng1</p>
                    <p>22h</p>
                  </div>
                  <div className="post-dot">
                    <i class="fas fa-ellipsis-h"></i>
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
                        <input type="checkbox" id="checkbox" />
                        <label for="checkbox">
                          <svg id="heart-svg" viewBox="467 392 58 57" xmlns="http://www.w3.org/2000/svg">
                            <g id="Group" fill="none" fill-rule="evenodd" transform="translate(467 392)">
                              <path d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z" id="heart" fill="transparent" stroke="black" stroke-width="2" stroke-linecap="butt" />
                              <circle id="main-circ" fill="#E2264D" opacity="0" cx="29.5" cy="29.5" r="1.5" />

                              <g id="grp7" opacity="0" transform="translate(7 6)">
                                <circle id="oval1" fill="#9CD8C3" cx="2" cy="6" r="2" />
                                <circle id="oval2" fill="#8CE8C3" cx="5" cy="2" r="2" />
                              </g>

                              <g id="grp6" opacity="0" transform="translate(0 28)">
                                <circle id="oval1" fill="#CC8EF5" cx="2" cy="7" r="2" />
                                <circle id="oval2" fill="#91D2FA" cx="3" cy="2" r="2" />
                              </g>

                              <g id="grp3" opacity="0" transform="translate(52 28)">
                                <circle id="oval2" fill="#9CD8C3" cx="2" cy="7" r="2" />
                                <circle id="oval1" fill="#8CE8C3" cx="4" cy="2" r="2" />
                              </g>

                              <g id="grp2" opacity="0" transform="translate(44 6)">
                                <circle id="oval2" fill="#CC8EF5" cx="5" cy="6" r="2" />
                                <circle id="oval1" fill="#CC8EF5" cx="2" cy="2" r="2" />
                              </g>

                              <g id="grp5" opacity="0" transform="translate(14 50)">
                                <circle id="oval1" fill="#91D2FA" cx="6" cy="5" r="2" />
                                <circle id="oval2" fill="#91D2FA" cx="2" cy="2" r="2" />
                              </g>

                              <g id="grp4" opacity="0" transform="translate(35 50)">
                                <circle id="oval1" fill="#F48EA7" cx="6" cy="5" r="2" />
                                <circle id="oval2" fill="#F48EA7" cx="2" cy="2" r="2" />
                              </g>

                              <g id="grp1" opacity="0" transform="translate(24)">
                                <circle id="oval1" fill="#9FC7FA" cx="2.5" cy="3" r="2" />
                                <circle id="oval2" fill="#9FC7FA" cx="7.5" cy="2" r="2" />
                              </g>
                            </g>
                          </svg>
                        </label>
                      </button>
                    </Tooltip>
                    <p>2k</p>
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
                    <i class="fas fa-ellipsis-h"></i>
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
                        <input type="checkbox" id="checkbox" />
                        <label for="checkbox">
                          <svg id="heart-svg" viewBox="467 392 58 57" xmlns="http://www.w3.org/2000/svg">
                            <g id="Group" fill="none" fill-rule="evenodd" transform="translate(467 392)">
                              <path d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z" id="heart" fill="transparent" stroke="black" stroke-width="2" stroke-linecap="butt" />
                              <circle id="main-circ" fill="#E2264D" opacity="0" cx="29.5" cy="29.5" r="1.5" />

                              <g id="grp7" opacity="0" transform="translate(7 6)">
                                <circle id="oval1" fill="#9CD8C3" cx="2" cy="6" r="2" />
                                <circle id="oval2" fill="#8CE8C3" cx="5" cy="2" r="2" />
                              </g>

                              <g id="grp6" opacity="0" transform="translate(0 28)">
                                <circle id="oval1" fill="#CC8EF5" cx="2" cy="7" r="2" />
                                <circle id="oval2" fill="#91D2FA" cx="3" cy="2" r="2" />
                              </g>

                              <g id="grp3" opacity="0" transform="translate(52 28)">
                                <circle id="oval2" fill="#9CD8C3" cx="2" cy="7" r="2" />
                                <circle id="oval1" fill="#8CE8C3" cx="4" cy="2" r="2" />
                              </g>

                              <g id="grp2" opacity="0" transform="translate(44 6)">
                                <circle id="oval2" fill="#CC8EF5" cx="5" cy="6" r="2" />
                                <circle id="oval1" fill="#CC8EF5" cx="2" cy="2" r="2" />
                              </g>

                              <g id="grp5" opacity="0" transform="translate(14 50)">
                                <circle id="oval1" fill="#91D2FA" cx="6" cy="5" r="2" />
                                <circle id="oval2" fill="#91D2FA" cx="2" cy="2" r="2" />
                              </g>

                              <g id="grp4" opacity="0" transform="translate(35 50)">
                                <circle id="oval1" fill="#F48EA7" cx="6" cy="5" r="2" />
                                <circle id="oval2" fill="#F48EA7" cx="2" cy="2" r="2" />
                              </g>

                              <g id="grp1" opacity="0" transform="translate(24)">
                                <circle id="oval1" fill="#9FC7FA" cx="2.5" cy="3" r="2" />
                                <circle id="oval2" fill="#9FC7FA" cx="7.5" cy="2" r="2" />
                              </g>
                            </g>
                          </svg>
                        </label>
                      </button>
                    </Tooltip>
                    <p>2k</p>
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
                    <i class="fas fa-ellipsis-h"></i>
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
                    <h4>Trần Văn Hào</h4>
                    <p>@Tranhao2001</p>
                    <p>22h</p>
                  </div>
                  <div className="post-dot">
                    <i class="fas fa-ellipsis-h"></i>
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
        )


      }

    </section>
  );
};

export default Home;
