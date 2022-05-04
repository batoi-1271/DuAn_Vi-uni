import React, { useState, useEffect } from "react";
import OutsideClickHandler from 'react-outside-click-handler';
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

import './postModal.scss';
const PostModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  return (
    <section>
      <div className="PostModal">
        {/* AVATAR & INFOMATION USER  */}
        <div className="PostModal_header">
          <div className="PostModal_header_avatar">
            <img
              src="https://images.unsplash.com/photo-1648022504736-c04c27b68cb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=378&q=80"
              alt=""
            />
          </div>

          <div className="PostModal_header_info">
            <div className="PostModal_content_info_name">
              <h4>Dương Ngô Tùng</h4>
            </div>
            <div className="PostModal_header_info_username">
              <p>@DngNgTng1</p>
            </div>
          </div>

          <OutsideClickHandler onOutsideClick={() => { setIsOpen(false) }}>
            <div className="PostModal_header_more">
              <div className="PostModal_header_more_Content">
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

        {/* CONTENT POST */}
        <div className="PostModal_content">
          <div className="PostModal_content_status">
              <p>Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="PostModal_content_time">
            <p>2:37 PM · May 2, 2022</p>
          </div>
        </div>

        {/* REACTION POST  */}
        <div className="PostModal_interactive">
                <div className="comment interactive">
                    <Tooltip id="comment" title="Comment" arrow>
                        <button>
                            <i class="fal fa-comment"></i>
                        </button>
                    </Tooltip>
                    <p>1k</p>

                </div>
                <div className="like interactive">
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
                <div className="share interactive">
                    <Tooltip id="Share" title="Share" arrow>
                        <button>
                            <i class="fal fa-share-all"></i>
                        </button>
                    </Tooltip>
                    <p>10k</p>
                </div>
            </div>
      </div>
      <div>

      </div>
    </section>
  );
}

export default PostModal

