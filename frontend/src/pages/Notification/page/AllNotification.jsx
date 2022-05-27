import React, { useRef, useState } from "react";
import OutsideClickHandler from 'react-outside-click-handler';
import { Link } from "react-router-dom";
// import Stack from '@mui/material/Stack';
// import IconButton from '@mui/material/IconButton';
// import Fingerprint from '@mui/icons-material/Fingerprint';

import "./allnotification.scss";


const AllNotification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  return (
    <div className="notification_all">
      <div className="all-list">
        <div className="all-left">
          <div className="all-user">
            <img
              src="https://images.unsplash.com/photo-1648610205241-fd745a9a7541?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
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

        <OutsideClickHandler
          onOutsideClick={() => {
            setIsOpen(false);
          }}
        >
          <div className="search">
            <div className="all-more">
              <button onClick={toggling}>
                <i class="fas fa-ellipsis-h"></i>
              </button>
            </div>
            {isOpen && (
              <div className="dropContainer">
                <span>
                  <Link to="#">See less often</Link>
                </span>
              </div>
            )}
          </div>
        </OutsideClickHandler>
      </div>
    </div>
  );
};

export default AllNotification;
