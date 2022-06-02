import React, { Component, useState } from "react";

import OutsideClickHandler from "react-outside-click-handler";

import "./editpost.scss";

const EditPost = ({ show, close, title, children }) => {
  const options = ["Everyone", "Friends", "Only me"];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggling = () => setIsOpen(!isOpen);
  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <>
      {show ? (
        <div className="modalEdit_Post" onClick={() => close()}>
          <div
            className="modalEdit_Post_modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal_header">
              <h4></h4>
              <h4 className="modal_header-title">Edit post</h4>
              <button className="close" onClick={() => close()}>
                <i class="fal fa-times"></i>
              </button>
            </div>
            <main className="modal_main">
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
                      <h4>Trần Văn Hào</h4>
                      <p>@HaoTran</p>
                      <p>22h</p>
                    </div>
                  </div>
                  <OutsideClickHandler
                    onOutsideClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    <div className="privacy">
                      <div className="select" onClick={toggling}>
                        {selectedOption
                          ? selectedOption + " can reply"
                          : "Everyone"}
                      </div>
                      {isOpen && (
                        <div className="dropContainerPrivate">
                          <div className="dropList">
                            <div className="title">
                              <h4>Who can reply?</h4>
                              <p>
                                Choose who can reply to this Tweet. Anyone
                                mentioned can always reply.
                              </p>
                            </div>
                            {options.map((option) => (
                              <div
                                className="items"
                                onClick={onOptionClicked(option)}
                                key={Math.random()}
                              >
                                {option}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </OutsideClickHandler>
                </div>
              </div>
              <form action="">
                <div className="main">
                  <div className="main-content">
                    <div className="main-title">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        Lorem ipsum dolor sit amet
                      </p>
                    </div>

                    <div className="main-img">
                      <div className="content-img">
                        <img
                          src="https://images.unsplash.com/photo-1640622304293-ec9c89c6bac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="add-img">
                      <span>
                        <i class="fas fa-mobile-android-alt"></i>
                      </span>
                      <p>Add photos and videos from your mobile device.</p>
                      <button>Add</button>
                    </div>
                  </div>
                </div>
                <div className="edit_item">
                  <div className="item">
                    <h4>Add to your post</h4>
                    <div className="icon">
                      <label for="file-upload" class="file-upload">
                        <i class="fas fa-camera"></i>
                      </label>
                      <input id="file-upload" type="file" />
                      <a href="">
                        <i class="fas fa-map-marker-alt"></i>
                      </a>
                      <a href="">
                        <i class="far fa-laugh"></i>
                      </a>
                      <i class="fas fa-ellipsis-h"></i>
                    </div>
                  </div>
                  <div className="btnSave">
                    <button>Save</button>
                  </div>
                </div>
              </form>
            </main>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default EditPost;
