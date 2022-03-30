import React, { useState } from "react";
import "./message.scss";
import "./components/Charmess";
import Charmess from "./components/Charmess";

const Messages = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const users = [
    {
      id: 1,
      name: "Nguyen Ba",
      username: "Toiba2001",
      time: "Mar 20",
      content: "Last mesage....",
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
      time: "Mar 20",
      content: "Last mesage....",
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
      time: "Mar 20",
      content: "Last mesage....",
      imageUrl: (
        <img
          alt="Dương Ngô Tùng"
          src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/150101361_1111174082681553_5093732990613340508_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=0debeb&_nc_ohc=xHRrVSO7r0MAX8dCslx&_nc_oc=AQkmf6pGhaK9LJoUNB7T2bSKbvLhYHiMSyn1h-gxsaGUFU8ULZa8lnxvPCSmyo7i6Wo&_nc_ht=scontent-hkg4-1.xx&oh=00_AT-mHd0RWW3BqAq9oFvccT5a0_3b0dIfAjSCOulovhxXAg&oe=62581550"
        />
      ),
    },
    {
      id: 4,
      name: "Nguyen Ba Toi",
      username: "Toiba2001",
      time: "Mar 20",
      content: "Last mesage....",
      imageUrl: (
        <img
          alt="Dương Ngô Tùng"
          src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/150101361_1111174082681553_5093732990613340508_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=0debeb&_nc_ohc=xHRrVSO7r0MAX8dCslx&_nc_oc=AQkmf6pGhaK9LJoUNB7T2bSKbvLhYHiMSyn1h-gxsaGUFU8ULZa8lnxvPCSmyo7i6Wo&_nc_ht=scontent-hkg4-1.xx&oh=00_AT-mHd0RWW3BqAq9oFvccT5a0_3b0dIfAjSCOulovhxXAg&oe=62581550"
        />
      ),
    },
    {
      id: 5,
      name: "Nguyen Ba Toi",
      username: "Toiba2001",
      time: "Mar 20",
      content: "Last mesage....",
      imageUrl: (
        <img
          alt="Dương Ngô Tùng"
          src="https://pbs.twimg.com/profile_images/1472366803342925826/R9TYcoFx_bigger.jpg"
        />
      ),
    },
    {
      id: 6,
      name: "Nguyen Ba Toi",
      username: "Toiba2001",
      time: "Mar 20",
      content: "Last mesage....",
      imageUrl: (
        <img
          alt="Dương Ngô Tùng"
          src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/150101361_1111174082681553_5093732990613340508_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=0debeb&_nc_ohc=xHRrVSO7r0MAX8dCslx&_nc_oc=AQkmf6pGhaK9LJoUNB7T2bSKbvLhYHiMSyn1h-gxsaGUFU8ULZa8lnxvPCSmyo7i6Wo&_nc_ht=scontent-hkg4-1.xx&oh=00_AT-mHd0RWW3BqAq9oFvccT5a0_3b0dIfAjSCOulovhxXAg&oe=62581550"
        />
      ),
    },
  ];

  return (
    <>
      <div className="message">
        <div className="message-hearder">
          <div className="message_head">
            <h3>Messages</h3>
            <div className="message_header-icon">
              <i onClick={() => toggle()} class="fab fa-facebook-messenger"></i>
              {/* <i class="fas fa-cog"></i> */}
            </div>
          </div>
          <div className="message_search">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input type="text" placeholder="Search for people and groups" />
          </div>
          <div className="message-friend">
            <ul className="message-friend__message">
              {users.map((e, i) => (

                <li key={i} className="infoUser" >
                  <div className="infoUser-left">
                    <div className="infoUser__avatar">{e.imageUrl}</div>
                    <div className="infoUser__content">
                      <div className="userName">
                        <div className="name">{e.name}</div>
                        <div className="nameUser">@{e.username}</div>
                        <div className="time">{e.time}</div>
                      </div>
                      <div className="contentMessage">{e.content}</div>
                    </div>
                  </div>
                  <div className="infoUser-right">
                    <i class="fa-solid fa-ellipsis" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="message-new" id="message-new">
          <div className="message-new-header">
            <div className="message-new-header-top">
              <img
                src="https://images.unsplash.com/photo-1459486552538-e489387b26bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
                alt=""
              />
              <div className="message-new-header-name">
                <a href="">Hào Trần</a>
                <p>@DngNgTng1</p>
              </div>
            </div>
          </div>
          <div className="message-new-footer">
            <div className="message-new-footer-char">
              <i class="far fa-image-polaroid"></i>
              <div className="message-new-footer-input">
              <input className="message-input" type="text" placeholder="Start a new message"/>
              <i class="far fa-smile"></i>
              </div>
              <i class="fal fa-paper-plane"></i>
            </div>
          </div>
          <Charmess show={modal} close={toggle} title="New Message">
            Content
          </Charmess>
        </div>
      </div>
    </>
  );
};

export default Messages;
