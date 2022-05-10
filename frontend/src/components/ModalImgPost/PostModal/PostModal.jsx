import React, { useState, useEffect } from "react";
import OutsideClickHandler from 'react-outside-click-handler';
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

import './postModal.scss';
import Heart from "../../Heart/Heart";
import MorePost from "../../MorePost/MorePost";
import DetailComment from "../../DetailComment/DetailComment";
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
                  <MorePost/>
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
                      <Heart/>
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
      {/* DETAIL COMMENT  */}
      <DetailComment/>

    </section>
  );
}

export default PostModal;

