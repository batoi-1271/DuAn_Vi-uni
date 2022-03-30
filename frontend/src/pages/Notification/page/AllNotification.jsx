import React, { useRef, useState } from "react";
import OutsideClickHandler from 'react-outside-click-handler';
import { Link } from "react-router-dom";

import "./allnotification.scss";
import logo from "../../../assets/logo.png";
import "./components/funtion";
import funtion from "./components/funtion";


const AllNotification = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  return (
    <div className="notification_all">
      <div className="all-list">
        <div className="all-left">
          <div className="all_twitter">
            <img src={logo} alt="" />
          </div>
          <div className="all-user">
            <img
              src="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
              alt=""
            />
            <h2>
              GetSmarterAboutMoney liked a photo from Durham Regional Police
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
              asperiores, nesciunt autem, reiciendis incidunt accusantium
              eveniet et sequi quos odio fuga quae aperiam recusandae nobis
              libero odit sint commodi optio?
            </p>
            <span>footer</span>
          </div>
        </div>
        <div className="all-more">
          <i class="fas fa-ellipsis-h"></i>
        </div>
      </div>
      <div className="all-list">
        <div className="all-left">
          <div className="all_twitter">
            <img src={logo} alt="" />
          </div>
          <div className="all-user">
            <img
              src="https://images.unsplash.com/photo-1570589867666-621ad57383a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
              alt=""
            />
            <h2>In case you missed Bitcoin Magazine's Tweet</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
              asperiores, nesciunt autem, reiciendis incidunt accusantium
              eveniet et sequi quos odio fuga quae aperiam recusandae nobis
              libero odit sint commodi optio?
            </p>
            <span>footer</span>
          </div>
        </div>
        <div className="all-more">
          <i class="fas fa-ellipsis-h"></i>
        </div>
      </div>
      <div className="all-list">
        <div className="all-left">
          <div className="all_twitter">
            <img src={logo} alt="" />
          </div>
          <div className="all-user">
            <img
              src="https://images.unsplash.com/photo-1636668170940-f00a766b8303?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
              alt=""
            />
            <h2>In case you missed WonderHero's Tweet</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
              asperiores, nesciunt autem, reiciendis incidunt accusantium
              eveniet et sequi quos odio fuga quae aperiam recusandae nobis
              libero odit sint commodi option? 
            </p>
          </div>
        </div>
        <div className="all-more">
          <i class="fas fa-ellipsis-h"></i>
        </div>
      </div>
      <div className="all-list">
        <div className="all-left">
          <div className="all_twitter">
            <img src={logo} alt="" />
          </div>
          <div className="all-user">
            <img src="https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" />
            <h2>In case you missed WonderHero's Tweet</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
              asperiores, nesciunt autem, reiciendis incidunt accusantium
              eveniet et sequi quos odio fuga quae aperiam recusandae nobis
              libero odit sint commodi optio?
            </p>
            <span>footer</span>
          </div>
        </div>
        <div className="all-more">
          <i class="fas fa-ellipsis-h"></i>
        </div>
      </div>
    </div>
  );
};

export default AllNotification;
