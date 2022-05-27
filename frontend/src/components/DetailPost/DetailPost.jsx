import React, { useState, useEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import MorePost from "../../components/MorePost/MorePost";
import ModalImage from "../../components/ModalImgPost/modal-image";

import Comment from "../../components/Comment/Comment";

import "./detailPost.scss";

const DetailPost = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  return (
    <div className="card-post">
      <div className="content-post">
        <div className="post-avatar">
          <img
            src="https://images.unsplash.com/photo-1648022504736-c04c27b68cb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=378&q=80"
            alt=""
          />
          <div className="post-avatar_profile">
            {/* -----------header------------ */}
            <div className="avatar_profile-header">
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""
              />
              <button>
                <span>Following</span>
              </button>
            </div>
            <div className="avatar_profile-boby">
              <h3>Hao Tran</h3>
              <a href="">@HaoTran</a>
              <p>Cuộc sống áp lực</p>
              <div className="profile-body-fow">
                <button>
                  {" "}
                  <a href="">1k Following</a>
                </button>
                <button>
                  <a href="">2k Followers</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="post-info">
          <div className="post-info_header">
            <div className="post-name">
              <h4>Trần Văn Hào</h4>
              <p>@HaoTran</p>
              <p>22h</p>
            </div>

            <OutsideClickHandler
              onOutsideClick={() => {
                setIsOpen(false);
              }}
            >
              <div className="post-more">
                <div className="post-more_Content">
                  <button onClick={toggling}>
                    <i class="fas fa-ellipsis-h"></i>
                  </button>
                  {isOpen && <MorePost />}
                </div>
              </div>
            </OutsideClickHandler>
          </div>
          <div className="post-content">
            <div className="post-content-title">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>

            <div className="post-content-img">
              <ModalImage
                src="https://images.unsplash.com/photo-1648737155328-0c0012cf2f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                // alt={PostModal}
                ratio={`5:5`}
              />
              {/* <img
                      src="https://images.unsplash.com/photo-1640622304293-ec9c89c6bac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                      alt=""
                    /> */}
            </div>
          </div>

          <div className="post-interactive">
            <img src="" alt="" />
            <div className="post-interactive_icon">
              <Comment />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPost;
