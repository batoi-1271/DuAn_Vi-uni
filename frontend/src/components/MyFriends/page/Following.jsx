import { Button } from "@mui/material";
import React, {useState} from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
 import "./following.scss";
 import Unfriend from "../../TogUnfriend/Unfriend";
 
const Following = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);
  return (
    <div className='following'>
      <div  className="friends-lish" >
        <div className="friends-lish-profile">
          <div className="friends-lish-avt">
            <img
              src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/161981732_1153471218449029_7254779511078894332_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=0debeb&_nc_ohc=GXDMSQa88ycAX-1u6A7&_nc_ht=scontent.fhan14-2.fna&oh=00_AT8lNYzflC4snsScfGBrUOLzbWhudwiJLeJTl5G_x94eeQ&oe=6271A3FD"
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

    </div>
  )
}

export default Following;
