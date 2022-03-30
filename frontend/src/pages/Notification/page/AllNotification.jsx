import React, { useRef, useState } from "react";
import OutsideClickHandler from 'react-outside-click-handler';
import { Link } from "react-router-dom";

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
              src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/150101361_1111174082681553_5093732990613340508_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=0debeb&_nc_ohc=xHRrVSO7r0MAX8dCslx&_nc_oc=AQkmf6pGhaK9LJoUNB7T2bSKbvLhYHiMSyn1h-gxsaGUFU8ULZa8lnxvPCSmyo7i6Wo&_nc_ht=scontent-hkg4-1.xx&oh=00_AT-mHd0RWW3BqAq9oFvccT5a0_3b0dIfAjSCOulovhxXAg&oe=62581550"
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
        
        <OutsideClickHandler onOutsideClick={() => { setIsOpen(false) }}>
          <div className="search">
            <div className="all-more">
              <button onClick={toggling}><i class="fas fa-ellipsis-h"></i></button>
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
