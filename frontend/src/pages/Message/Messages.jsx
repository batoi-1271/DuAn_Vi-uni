import React, { useState } from "react";
import "./message.scss";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import OutsideClickHandler from "react-outside-click-handler";
import Tooltip from "@mui/material/Tooltip";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Link } from "react-router-dom";

import CreateMess from "./components/CreateMess";
import CreateGroup from "./components/CreateGroup";

const Messages = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [modalGroup, setModalGroup] = useState(false);
  const toggleGroup = () => setModalGroup(!modalGroup);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
          src="https://images.unsplash.com/photo-1650922919699-228aeca40e67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
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
          src="https://images.unsplash.com/photo-1650977559386-ff17720c49fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
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
          src="https://images.unsplash.com/photo-1650575536930-866166c71c26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80s"
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
          src="https://images.unsplash.com/photo-1650968977059-292ab4f496e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
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
          src="https://images.unsplash.com/photo-1650909085203-9205d767fd3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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
          src="https://images.unsplash.com/photo-1650972859777-7ff62609f8fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
      ),
    },
  ];

  return (
    <>
      <div className="message">
        <div className="message-hearder">
          <div className="message-header-char">
            <div className="message_head">
              <h3>Messages</h3>

              <React.Fragment>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Tooltip title="New message">
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                      aria-controls={open ? "account-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                    >
                      <Avatar sx={{ width: 32, height: 32 }}>Vi</Avatar>
                    </IconButton>
                  </Tooltip>
                </Box>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={() => toggle()}>
                    <MailOutlineIcon sx={{ mr: 2 }} /> Message
                  </MenuItem>
                  <MenuItem onClick={() => toggleGroup()}>
                    <PeopleAltIcon sx={{ mr: 2 }} /> Message group
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon>
                      <ConnectWithoutContactIcon fontSize="small" />
                    </ListItemIcon>
                    To Connect people
                  </MenuItem>
                </Menu>
              </React.Fragment>

              {/* <div className="message_header-icon">
                  <i
                  onClick={() => toggle()}
                   class="far fa-bars"></i>


              </div> */}
            </div>
            <div className="message_search">
              <i class="fa fa-search" aria-hidden="true"></i>
              <input type="text" placeholder="Search for people and groups" />
            </div>
          </div>
          <div className="message-friend">
            <ul className="message-friend__message">
              {users.map((e, i) => (
                <li key={i} className="infoUser">
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
          <div className="message-new-headering">
            <div className="message-new-header">
              <div className="message-new-header-top">
                <img
                  src="https://images.unsplash.com/photo-1459486552538-e489387b26bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
                  alt=""
                />
                <div className="message-new-header-name">
                  <a href="">Hao Tran</a>
                  <p>@DngNgTng1</p>
                </div>
              </div>
              <div className="message-new-icon">
                {/* <i class="fas fa-cog"></i> */}
              </div>
            </div>

            {/* ---------------------------  MAIN ----------------------------- */}
            <div className="message-chat">
              <div className="message-chat_me">
                <div className="message-chat_me-icon">
                  <i class="fal fa-heart"></i>
                  <i class="fas fa-ellipsis-h"></i>
                </div>
                <div className="message-chat_form">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Iste vitae dicta animi eaque? Ullam praesentium beatae velit
                    obcaecati dolore, inventore ex aperiam voluptatum quae nihil
                    provident. Sequi est aut ab.
                  </p>
                </div>
              </div>
              <div className="message-chat_user">
                <div className="message-chat_form-user">
                  <img
                    src="https://images.unsplash.com/photo-1650657550895-9355e8662367?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxODZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde laudantium dolor repudiandae, cum pariatur ut. Tempore
                    laboriosam nobis repudiandae, excepturi natus minus,
                    corporis, officiis quod voluptas placeat dolore ducimus.
                    Facere.
                  </p>
                </div>
                <div className="message-chat_icon">
                  <OutsideClickHandler
                    onOutsideClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    <div className="more">
                      <div className="all-more">
                        <button onClick={toggling}>
                          <i class="fas fa-ellipsis-h"></i>
                        </button>
                      </div>
                      {isOpen && (
                        <div className="more_content">
                          <span className="more_content-span1">
                            <i class="fal fa-trash-alt"></i>
                            <Link className="more_content-text " to="#">
                              Delete for you
                            </Link>
                          </span>
                          <span className="more_content-span">
                            <i class="fal fa-flag"></i>
                            <Link className="more_content-text" to="#">
                              Report Message
                            </Link>
                          </span>
                          <span className="more_content-span">
                            <i class="fal fa-clone"></i>
                            <Link className="more_content-text" to="#">
                              Copy Message
                            </Link>
                          </span>
                        </div>
                      )}
                    </div>
                  </OutsideClickHandler>

                  <Tooltip title="Heart" arrow>
                    <button>
                      <i class="fal fa-heart"></i>
                    </button>
                  </Tooltip>
                </div>
              </div>

              <div className="message-chat_me">
                <div className="message-chat_me-icon">
                  <i class="fal fa-heart"></i>
                  <i class="fas fa-ellipsis-h"></i>
                </div>
                <div className="message-chat_form">
                  <p>Lorem</p>
                </div>
              </div>
            </div>
          </div>
          <div className="message-new-footer">
            <div className="message-new-footer-char">
              {/* icon EDIT IMG  */}
              <label for="file-upload" class="file-upload">
                <i class="fas fa-camera"></i>
              </label>
              <input id="file-upload" type="file" />
              <div className="message-new-footer-input">
                <input
                  className="message-input"
                  type="text"
                  placeholder="Start a new message"
                />
                <i class="far fa-smile"></i>
              </div>
              <i class="fal fa-paper-plane"></i>
            </div>
          </div>
          <CreateMess show={modal} close={toggle}></CreateMess>

          <CreateGroup show={modalGroup} close={toggleGroup}></CreateGroup>
        </div>
      </div>
    </>
  );
};

export default Messages;
