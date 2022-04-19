import React, { useRef, useState,useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import OutsideClickHandler from 'react-outside-click-handler';
import axios from "axios";
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
const LeftPane = (props) => {


  // ===================
  const [alluser, setalluser] = useState([]);
  useEffect(() => {

    async function getdata() {
      const res = await axios.get('http://viuni.tk/home');
      return res
    }
    getdata().then(res => {
      console.log(res);
      setalluser(res.data);
      setSuggestions(res.data);
    })
      .catch(err => {
        console.log(err)
      })
  }, [])



function handleClick () {
  var close = document.getElementsByClassName("add-btn");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this;
      if (div.innerHTML === "Add") {
        div.innerHTML = "Cancel";
      }
      else {
        div.innerHTML = "Add";
      }
    }
  }
}

  //====================
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
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);

  };

  const onChangeHandler = (text) => {
    let matches = []
    matches = alluser.filter(user => {
      const regex = new RegExp(`${text}`, "gi");
      return user.username.match(regex);
    })
    setSuggestions(matches);
    setSelectedOption(text);
  }

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
                  onChange={e => onChangeHandler(e.target.value)}
                  // onChange={(e) => setSelectedOption(e.target.value)}
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

                    { suggestions && suggestions.map((option,i) => (
                      <div
                        className="items"
                        onClick={onOptionClicked(option.username)}
                        key={i}
                      >
                        {option.username}
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
            {
                alluser.map((alluser) => {
                  return (
                    <li className="infoUser moreu" key={alluser.id}  >
                      <img className="avatar" src={alluser.avatar_image.link_image} />
                      <div className="info">
                        <div className="name"> {alluser.last_name} {alluser.first_name}</div>
                        <div className="username">@{alluser.username}</div>
                      </div>
                      <div className="addFr">
                        <Button variant="contained" className="add-btn" onClick={handleClick} id="ADD">
                          Add
                        </Button>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
            <div className="seemore">
                <Link to="#" id="seemore">See more</Link>
            </div>
          </div>

          <div className="paneLeft_Box follow">
            <h3>Following</h3>
            <ul className="paneLeftInfo">
            {
                alluser.map((alluser) => {
                  return (
                    // follow  
                    <li className="infoUser flw" key={alluser.id} >
                      <img className="avatar" src={alluser.avatar_image.link_image} />
                      <div className="info">
                        <div className="name">{alluser.last_name} {alluser.first_name} </div>
                        <div className="username">@{alluser.username}</div>
                      </div>
                      <div className="addFr">
                        <Button variant="contained" className="add-btn" onClick={handleClick} id="ADD">
                          Add
                        </Button>
                      </div>
                    </li>
                  )
                })
              }
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
