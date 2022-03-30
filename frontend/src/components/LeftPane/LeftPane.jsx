import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./leftPane.scss";
import Button from "@mui/material/Button";
import OutsideClickHandler from 'react-outside-click-handler';

import logo from "../../assets/logo.png";

const users = [
  {
    id: 1,
    name: "Nguyen Ba",
    username: "Toiba2001",
    imageUrl: (
      <img
        alt="Dương Ngô Tùng"
        src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/150101361_1111174082681553_5093732990613340508_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=0debeb&_nc_ohc=xHRrVSO7r0MAX8dCslx&_nc_oc=AQkmf6pGhaK9LJoUNB7T2bSKbvLhYHiMSyn1h-gxsaGUFU8ULZa8lnxvPCSmyo7i6Wo&_nc_ht=scontent-hkg4-1.xx&oh=00_AT-mHd0RWW3BqAq9oFvccT5a0_3b0dIfAjSCOulovhxXAg&oe=62581550"
      />
    ),
  },
  {
    id: 2,
    name: "Nguyen Ba Toi",
    username: "Toiba2001",
    imageUrl: (
      <img
        alt="Dương Ngô Tùng"
        src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/150101361_1111174082681553_5093732990613340508_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=0debeb&_nc_ohc=xHRrVSO7r0MAX8dCslx&_nc_oc=AQkmf6pGhaK9LJoUNB7T2bSKbvLhYHiMSyn1h-gxsaGUFU8ULZa8lnxvPCSmyo7i6Wo&_nc_ht=scontent-hkg4-1.xx&oh=00_AT-mHd0RWW3BqAq9oFvccT5a0_3b0dIfAjSCOulovhxXAg&oe=62581550"
      />
    ),
  },
  {
    id: 3,
    name: "Nguyen Ba Toi",
    username: "Toiba2001",
    imageUrl: (
      <img
        alt="Dương Ngô Tùng"
        src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/150101361_1111174082681553_5093732990613340508_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=0debeb&_nc_ohc=xHRrVSO7r0MAX8dCslx&_nc_oc=AQkmf6pGhaK9LJoUNB7T2bSKbvLhYHiMSyn1h-gxsaGUFU8ULZa8lnxvPCSmyo7i6Wo&_nc_ht=scontent-hkg4-1.xx&oh=00_AT-mHd0RWW3BqAq9oFvccT5a0_3b0dIfAjSCOulovhxXAg&oe=62581550"
      />
    ),
  },
  {
    id: 3,
    name: "Nguyen Ba Toi",
    username: "Toiba2001",
    imageUrl: (
      <img
        alt="Dương Ngô Tùng"
        src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/150101361_1111174082681553_5093732990613340508_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=0debeb&_nc_ohc=xHRrVSO7r0MAX8dCslx&_nc_oc=AQkmf6pGhaK9LJoUNB7T2bSKbvLhYHiMSyn1h-gxsaGUFU8ULZa8lnxvPCSmyo7i6Wo&_nc_ht=scontent-hkg4-1.xx&oh=00_AT-mHd0RWW3BqAq9oFvccT5a0_3b0dIfAjSCOulovhxXAg&oe=62581550"
      />
    ),
  },
  {
    id: 3,
    name: "Nguyen Ba Toi",
    username: "Toiba2001",
    imageUrl: (
      <img
        alt="Dương Ngô Tùng"
        src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/150101361_1111174082681553_5093732990613340508_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=0debeb&_nc_ohc=xHRrVSO7r0MAX8dCslx&_nc_oc=AQkmf6pGhaK9LJoUNB7T2bSKbvLhYHiMSyn1h-gxsaGUFU8ULZa8lnxvPCSmyo7i6Wo&_nc_ht=scontent-hkg4-1.xx&oh=00_AT-mHd0RWW3BqAq9oFvccT5a0_3b0dIfAjSCOulovhxXAg&oe=62581550"
      />
    ),
  },
  {
    id: 3,
    name: "Nguyen Ba Toi",
    username: "Toiba2001",
    imageUrl: (
      <img
        alt="Dương Ngô Tùng"
        src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/150101361_1111174082681553_5093732990613340508_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=0debeb&_nc_ohc=xHRrVSO7r0MAX8dCslx&_nc_oc=AQkmf6pGhaK9LJoUNB7T2bSKbvLhYHiMSyn1h-gxsaGUFU8ULZa8lnxvPCSmyo7i6Wo&_nc_ht=scontent-hkg4-1.xx&oh=00_AT-mHd0RWW3BqAq9oFvccT5a0_3b0dIfAjSCOulovhxXAg&oe=62581550"
      />
    ),
  },
];
const LeftPane = () => {
  const { pathname } = useLocation();

  const headerRef = useRef(null);

  const [isAdded, setAdded] = useState(false);
  const addFriend = () => {
    setAdded(true);
  };

  const cancelFriend = () => {
    setAdded(false);
  };
  const historySearch = ["Gia Truong", "Sy Hoang", "Hoang Duc", "Thanh An"];

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
      {pathname !== "/message" && (
        <div ref={headerRef} className="paneLeft" id="paneLeft">
          <div className="paneLeft__wrap container">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>



            <OutsideClickHandler onOutsideClick={() => {setIsOpen(false)}}>
              <div className="search">

                <span class="icon">
                  <i class="fa fa-search"></i>
                </span>
                <input
                name="search"
                  type="text"
                  onClick={toggling}
                  placeholder="Search Vi-uni"
                  value={selectedOption}
                  autoComplete="off"
                  onChange={(e) => setSelectedOption(e.target.value)}
                />
                
                {isOpen && (
                  <div className="dropContainer">
                    <div className="dropList">
                    <div className="title">
                      <h4>Recent searches</h4>
                      <span>
                        <a href="">Edit</a>
                      </span>
                    </div>

                    {historySearch.map((option) => (
                      <div
                        className="items"
                        onClick={onOptionClicked(option)}
                        key={Math.random()}
                      >
                        {option}
                        <button type="button" className="delete" aria-label="delete">
                          <span><i class="fa-solid fa-xmark"></i></span>
                        </button>
                      </div>
                    ))}
                    </div>
                  </div>
                )}
              </div>
        </OutsideClickHandler>
          </div>
          <div className="box_paneLeft">
            <h3>You might like</h3>
            <ul className="paneLeft__info">
              {users.map((e, i) => (
                <li key={i} className="infoUser">
                  <div className="avatar">{e.imageUrl}</div>
                  <div className="info">
                    <div className="name">{e.name}</div>
                    <div className="username">@{e.username}</div>
                  </div>
                  <div className="addFr">
                    {isAdded ? (
                      <Button
                        variant="contained"
                        onClick={cancelFriend}
                        className="add-btn-disabled"
                      >
                        Cancel
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        className="add-btn"
                        id={e.id}
                        onClick={addFriend}
                      >
                        ADD
                      </Button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <span>
              <a href="">See more</a>
            </span>
          </div>

          <div className="box_paneLeft follow">
            <h3>Who to follow</h3>
            <ul className="paneLeft__info">
              {users.map((e, i) => (
                <li key={i} className="infoUser">
                  <div className="avatar">{e.imageUrl}</div>
                  <div className="info">
                    <div className="name">{e.name}</div>
                    <div className="username">@{e.username}</div>
                  </div>
                  <div className="addFr">
                    <Button variant="contained" onClick={addFriend}>
                      Add
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
            <span>
              <a href="">See more</a>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default LeftPane;
