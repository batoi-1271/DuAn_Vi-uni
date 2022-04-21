import React, { useState } from "react";
import "./message.scss";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import Tooltip from '@mui/material/Tooltip';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import CreateMess from "./components/CreateMess";
import CreateGroup from "./components/CreateGroup";


const Messages = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);


  const[modal1, setModal1] = useState(false);
  const toggle1 = () => setModal1(!modal1)

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
          src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/278366916_1385487798583512_8287024958249099446_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=H5ZHyrrTLEAAX9daaZ9&_nc_ht=scontent.fhan14-2.fna&oh=00_AT-kI68r6kGE3gKkDWbpYNTZo9tN8T4Om64cvwdPIwwrLg&oe=62630466 "
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
          src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/278366916_1385487798583512_8287024958249099446_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=H5ZHyrrTLEAAX9daaZ9&_nc_ht=scontent.fhan14-2.fna&oh=00_AT-kI68r6kGE3gKkDWbpYNTZo9tN8T4Om64cvwdPIwwrLg&oe=62630466 "
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
          src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/278366916_1385487798583512_8287024958249099446_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=H5ZHyrrTLEAAX9daaZ9&_nc_ht=scontent.fhan14-2.fna&oh=00_AT-kI68r6kGE3gKkDWbpYNTZo9tN8T4Om64cvwdPIwwrLg&oe=62630466 "
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
          src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/278366916_1385487798583512_8287024958249099446_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=H5ZHyrrTLEAAX9daaZ9&_nc_ht=scontent.fhan14-2.fna&oh=00_AT-kI68r6kGE3gKkDWbpYNTZo9tN8T4Om64cvwdPIwwrLg&oe=62630466 "
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
          src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/278366916_1385487798583512_8287024958249099446_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=H5ZHyrrTLEAAX9daaZ9&_nc_ht=scontent.fhan14-2.fna&oh=00_AT-kI68r6kGE3gKkDWbpYNTZo9tN8T4Om64cvwdPIwwrLg&oe=62630466 "
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
          src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/278366916_1385487798583512_8287024958249099446_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=H5ZHyrrTLEAAX9daaZ9&_nc_ht=scontent.fhan14-2.fna&oh=00_AT-kI68r6kGE3gKkDWbpYNTZo9tN8T4Om64cvwdPIwwrLg&oe=62630466 "
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
          src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/278366916_1385487798583512_8287024958249099446_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=H5ZHyrrTLEAAX9daaZ9&_nc_ht=scontent.fhan14-2.fna&oh=00_AT-kI68r6kGE3gKkDWbpYNTZo9tN8T4Om64cvwdPIwwrLg&oe=62630466 "
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
          src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/278366916_1385487798583512_8287024958249099446_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=H5ZHyrrTLEAAX9daaZ9&_nc_ht=scontent.fhan14-2.fna&oh=00_AT-kI68r6kGE3gKkDWbpYNTZo9tN8T4Om64cvwdPIwwrLg&oe=62630466 "
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
          src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/278366916_1385487798583512_8287024958249099446_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=H5ZHyrrTLEAAX9daaZ9&_nc_ht=scontent.fhan14-2.fna&oh=00_AT-kI68r6kGE3gKkDWbpYNTZo9tN8T4Om64cvwdPIwwrLg&oe=62630466 "
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
          src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/278366916_1385487798583512_8287024958249099446_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=H5ZHyrrTLEAAX9daaZ9&_nc_ht=scontent.fhan14-2.fna&oh=00_AT-kI68r6kGE3gKkDWbpYNTZo9tN8T4Om64cvwdPIwwrLg&oe=62630466 "
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
                  <MenuItem onClick={() => toggle1()}>
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
          </div>
          <div className="message-new-footer">
            <div className="message-new-footer-char">
              <i class="far fa-image-polaroid"></i>
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
          
          <CreateGroup show={modal1} close={toggle1}></CreateGroup>
        </div>
      </div>
    </>
  );
};

export default Messages;
