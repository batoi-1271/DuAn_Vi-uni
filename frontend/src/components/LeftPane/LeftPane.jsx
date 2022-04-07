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

// you might like
  function onloadprofile () {
    let profile = Array.from(document.getElementsByClassName("moreu"));
    var i;
    for (i = 3; i <= profile.length; i++) {
      profile[i].style.display = "none";
    }
  }
  function moreprofile () {
  let profile = Array.from(document.getElementsByClassName("moreu"));
    console.log(profile);
    var i;
    var but = document.getElementById("moretext"); 
    if (but.innerHTML === "SEE MORE") {
       but.innerHTML = "See less";
       for(i = 3;i<= profile.length;i++) {
        profile[i].style.display = "flex";
      }
    }
    else {
        but.innerHTML = "SEE MORE";
        for( i = 3;i<= profile.length;i++) {
          profile[i].style.display = "none";
        }
    }
}
  // /// for who to follow
function loadfollow () {  
  let profile = Array.from(document.getElementsByClassName("flw"));
  var i ;
  for(i = 3;i<= profile.length;i++) {
    profile[i].style.display = "none";
}
}
function morefollow () {
  let profile = Array.from(document.getElementsByClassName("flw"));
    console.log(profile);
    var i;
    var but = document.getElementById("morefollow"); 
    if (but.innerHTML === "SEE MORE") {
       but.innerHTML = "See less";
       for(i = 3;i<= profile.length;i++) {
        profile[i].style.display = "flex";
      }
    }
    else {
        but.innerHTML = "SEE MORE";
        for( i = 3;i<= profile.length;i++) {
          profile[i].style.display = "none";
        }
    }
}


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
                    <li className="infoUser moreu" key={alluser.id} onLoad={onloadprofile} >
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
              <Button  id="moretext" onClick= {moreprofile}>See more</Button>
            </ul>
            
          </div>

          <div className="paneLeft_Box follow">
            <h3>Following</h3>
            <ul className="paneLeftInfo">
            {
                alluser.map((alluser) => {
                  return (
                    // follow  
                    <li className="infoUser flw" key={alluser.id} onLoad={loadfollow}>
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
              <Button  id="morefollow" onClick={morefollow} >See more</Button>
            </ul>
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
