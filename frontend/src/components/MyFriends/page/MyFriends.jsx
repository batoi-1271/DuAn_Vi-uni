import { Button } from "@mui/material";
import React, {useState} from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

import Unfriend from "../../TogUnfriend/Unfriend";


import "./myfriends.scss";

const MyFriends = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);
  
  return (
    <div className="myFriends" >
      <div  className="friends-lish" >
        <div className="friends-lish-profile">
          <div className="friends-lish-avt">
            <img
              src="https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/275566312_1383381218791360_2262557741591100520_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=8iEuJH1NBFkAX_Lcl1z&_nc_ht=scontent.fhan5-10.fna&oh=00_AT_tAYf7UJ1H9HI_r8inmldj4c7cjYNelap2piDCaoWblw&oe=6249F82F"
              alt=""
            />
          </div>
          <div className="friends-lish-name">
            <h3>Thùy Linh</h3>
            <p>@NgThyLinh</p>
          </div>
        </div>
        <div className="friends-lish-fow">
          <Button onClick={() => Toggle()}><span>Friend</span></Button>
          <i class="fas fa-ellipsis-h"></i>
        </div>
      </div>

      <div className="friends-lish">
        
        <div className="friends-lish-profile">
          <div className="friends-lish-avt">
            <img
              src="https://scontent.fhan5-5.fna.fbcdn.net/v/t39.30808-6/272437034_1359791891150293_2386689676459694658_n.jpg?stp=dst-jpg_p843x403&_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=IH9PHHDnIZsAX8KfW8m&_nc_ht=scontent.fhan5-5.fna&oh=00_AT-RTACN1L5sdkSTiJ3_-tgwjTIE_VgavyGy_6P8cv_eTw&oe=624A43D4"
              alt=""
            />
          </div>
          <div className="friends-lish-name">
            <h3>TranVanHao</h3>
            <p>@TranThiHao</p>
          </div>
          
        </div>
        <div className="friends-lish-fow">
          <Button onClick={() => Toggle()}><span>Friend</span></Button>
          <i class="fas fa-ellipsis-h"></i>
        </div>

      </div>
      <div className="friends-lish">
        <div className="friends-lish-profile">
          <div className="friends-lish-avt">
            <img
              src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg"
              alt=""
            />
          </div>
          <div className="friends-lish-name">
            <h3>TranVanHao</h3>
            <p>@TranThiHao</p>
          </div>
        </div>
        <div className="friends-lish-fow">
          <Button onClick={() => Toggle()}><span>Friend</span></Button>

          <Unfriend show={modal} close={Toggle}/>
          <i class="fas fa-ellipsis-h"></i>
        </div>
      </div>
    </div>
  );
};

export default MyFriends;
