import React, { Component, useState } from "react";
import Button from "@mui/material/Button";
import "./home.scss";

import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";

const PostUser = () => {
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
    <section>
      <form action="">
        <div className="postUser" id="postUser">
          <div className="avatar">
            

            <Link to="./profile">
              <img
                alt="Dương Ngô Tùng"
                src="https://pbs.twimg.com/profile_images/1472366803342925826/R9TYcoFx_bigger.jpg"
              />
            </Link>
          </div>
          <div className="contentPost">
            <div className="contentPost__user">
              <textarea type="text" placeholder="What's happening?" />
            </div>

            <OutsideClickHandler
              onOutsideClick={() => {
                setIsOpen(false);
              }}
            >
              <div className="privacy">
                <div className="select" onClick={toggling}>
                  {selectedOption ? selectedOption + " can reply" : "Everyone"}
                </div>
                {isOpen && (
                  <div className="dropContainerPrivate">
                    <div className="dropList">
                      <div className="title">
                        <h4>Who can reply?</h4>
                        <p>
                          Choose who can reply to this Tweet. Anyone mentioned
                          can always reply.
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
        <div className="iconPost">
          <div className="content">
            <div className="icon">
              <a href="">
                <i class="fas fa-image"></i>
              </a>
              <a href="">
                <i class="fas fa-map-marker-alt"></i>
              </a>
              <a href="">
                <i class="far fa-laugh"></i>
              </a>
            </div>
            <div className="btnPost">
              <Button variant="contained">Post</Button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default PostUser;
