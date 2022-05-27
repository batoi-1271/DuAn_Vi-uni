import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import OutsideClickHandler from 'react-outside-click-handler';

import "./leftPane.scss";

import Button from "@mui/material/Button";
import logo from "../../assets/logo.png";

const users = [
  {
    id: 1,
    name: "Nguyen Ba",
    username: "Toiba2001",
    imageUrl: (
      <img
        alt="Dương Ngô Tùng"
        src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/278366916_1385487798583512_8287024958249099446_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=H5ZHyrrTLEAAX9daaZ9&_nc_ht=scontent.fhan14-2.fna&oh=00_AT-kI68r6kGE3gKkDWbpYNTZo9tN8T4Om64cvwdPIwwrLg&oe=62630466"
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
        src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/278366916_1385487798583512_8287024958249099446_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=H5ZHyrrTLEAAX9daaZ9&_nc_ht=scontent.fhan14-2.fna&oh=00_AT-kI68r6kGE3gKkDWbpYNTZo9tN8T4Om64cvwdPIwwrLg&oe=62630466"
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
        src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/278366916_1385487798583512_8287024958249099446_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=H5ZHyrrTLEAAX9daaZ9&_nc_ht=scontent.fhan14-2.fna&oh=00_AT-kI68r6kGE3gKkDWbpYNTZo9tN8T4Om64cvwdPIwwrLg&oe=62630466"
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
        src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/278366916_1385487798583512_8287024958249099446_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=H5ZHyrrTLEAAX9daaZ9&_nc_ht=scontent.fhan14-2.fna&oh=00_AT-kI68r6kGE3gKkDWbpYNTZo9tN8T4Om64cvwdPIwwrLg&oe=62630466"
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
        src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/278366916_1385487798583512_8287024958249099446_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=H5ZHyrrTLEAAX9daaZ9&_nc_ht=scontent.fhan14-2.fna&oh=00_AT-kI68r6kGE3gKkDWbpYNTZo9tN8T4Om64cvwdPIwwrLg&oe=62630466"
      />
    ),
  }
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
                <span className="icon">
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
                          <span><i class="fab fa-xing"></i></span>
                        </button>
                      </div>
                    ))}
                    </div>
                  </div>
                )}
              </div>

        </OutsideClickHandler>
          </div>

          <div className="paneLeft_Box">
            <h3>You might like</h3>
            <ul className="paneLeftInfo">
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
            <div className="seemore">
                <Link to="#" id="seemore">See more</Link>
            </div>
          </div>

          <div className="paneLeft_Box follow">
            <h3>Following</h3>
            <ul className="paneLeftInfo">
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
            <div className="seemore">
                <Link to="/friends/following" id="seemore">See more</Link>
            </div>
            {/* <span>
              <Link to="/friends/following" className="seemore">See more</Link>
            </span> */}
          </div>
        </div>
      )}
    </>
  );
};

export default LeftPane;
