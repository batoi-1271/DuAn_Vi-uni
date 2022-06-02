import React, { useRef, useState,useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import OutsideClickHandler from 'react-outside-click-handler';
import axios from "axios";
import "./leftPane.scss";
import Button from "@mui/material/Button";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";

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
const LeftPane = () => {
  // ===================
  const [alluser, setalluser] = useState([]);
  const [isAdded, setAdded] = useState([]);
  const [isFollow, setFollow] = useState([]);
  useEffect(() => {
    async function getdata() {
      // const res = await axios.get('http://viuni.tk/home');
      const res =  axios('http://viuni.tk/home',
      {
        method: 'GET',
        headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem("accessToken"),
                  "Content-Type":"application/json"
              }
      }
      )
      return res
    }
      async function getuser() {
      // const res = await axios.get('http://viuni.tk/home');
      const res =  axios('http://viuni.tk/home',
      {
        method: 'GET',
        headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem("accessToken"),
                  "Content-Type":"application/json"
              }
      }
      )
      return res
    }
      getuser().then(res => {
      console.log(res);
      setalluser(res.data);
    })
      .catch(err => {
        console.log(err)
      })

    getdata().then(res => {
      console.log(res);
      setSuggestions(res.data);
    })
      .catch(err => {
        console.log(err)
      })
  }, [])


  //====================
  const { pathname } = useLocation();

  const headerRef = useRef(null);
  const addFriend = (id) => {
   
    setAdded(prev => {
      const isChecked = isAdded.includes(id)
      if (isChecked) {
         console.log("del f rq",id)
        const delresquest = (id) => {
           axios({
           method: 'POST',
           url:`http://viuni.tk/friendrequest/remove/${id}`,
           headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("accessToken"),
                    "Content-Type":"application/json"
              }}
           ).then(res => console.log('deleting data',res)).catch(err => console.log(err))
         }
         delresquest(id)
        return isAdded.filter(item => item !== id)

      } else {
         console.log("send rq",id)
         const postresquest = (id) => {
           axios({
             method: 'POST',
             url:`http://viuni.tk/friendrequest/add/${id}`,
             headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("accessToken"),
                    "Content-Type":"application/json"
              },
           }).then(res => console.log('posting data',res)).catch(err => console.log(err))
         }
         postresquest(id)
         return [...prev, id]
      }
    })
  };
    const Follow = (id) => {
    setFollow(prev => {
      const isChecked = isFollow.includes(id)
      if (isChecked) {
       console.log("del fl",id)
        const delresquest = (id) => {
           axios({
           method: 'POST',
           url:`http://viuni.tk/follow/remove/${id}`,
           headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("accessToken"),
                    "Content-Type":"application/json"
              }}
           ).then(res => console.log('deleting data',res)).catch(err => console.log(err))
         }
         delresquest(id)
        return isFollow.filter(item => item !== id)
      } else {
         console.log("add fl",id)
         const postresquest = (id) => {
           axios({
             method: 'POST',
             url:`http://viuni.tk/follow/add/${id}`,
             headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("accessToken"),
                    "Content-Type":"application/json"
              },
           }).then(res => console.log('posting data',res)).catch(err => console.log(err))
         }
         postresquest(id)
         return [...prev, id]
      }
    })
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
                alluser.map((alluser,e) => {
                  return (
                    <li className="infoUser moreu" key={alluser.id} >
                      <img className="avatar" src={alluser.avatar_image.link_image ? alluser.avatar_image.link_image : avatar} alt="" />
                      <div className="info">
                        <div className="name"> {alluser.last_name} {alluser.first_name}</div>
                        <div className="username">@{alluser.username}</div>
                      </div>
                      <div className="addFr">
                    {isAdded.includes(alluser.id) ? (
                      <Button 
                        key={alluser.id} 
                        variant="contained"
                        onClick={() => addFriend(alluser.id)}
                        className="add-btn-disabled"
                      >
                        Cancel
                      </Button>
                    ) : (
                      <Button
                        key={alluser.id} 
                        variant="contained"
                        className="add-btn"
                        onClick={() => addFriend(alluser.id)}
                      >
                        ADD
                      </Button>
                    )}
                  </div>
                    </li>
                  )
                })
              }
            </ul>
            <div className="seemore">
                <Link to="/friends" id="seemore">See more</Link>
            </div>
          </div>

          <div className="paneLeft_Box follow">
            <h3>Following</h3>
            <ul className="paneLeftInfo">
            {
                alluser.map((alluser,e) => {
                  return (
                    // follow  
                    <li className="infoUser flw" key={alluser.id} >
                      <img className="avatar" src={alluser.avatar_image.link_image ? alluser.avatar_image.link_image : avatar} alt="" />
                      <div className="info">
                        <div className="name">{alluser.last_name} {alluser.first_name} </div>
                        <div className="username">@{alluser.username}</div>
                      </div>
                      <div className="addFr">
                    {isFollow.includes(alluser.id) ? (
                      <Button 
                        key={alluser.id} 
                        variant="contained"
                        onClick={() => Follow(alluser.id)}
                        className="add-btn-disabled"
                      >
                        cancel
                      </Button>
                    ) : (
                      <Button
                        key={alluser.id} 
                        variant="contained"
                        className="add-btn"
                        onClick={() => Follow(alluser.id)}
                      >
                        add
                      </Button>
                    )}
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
