import React from 'react'
import { Link, useLocation, useHistory } from "react-router-dom";

const Pagefrends = () => {

  const { pathname } = useLocation();
  const history = useHistory();

  function handleClick() {
    history.push("/profile");
  }
  return (
    <div className="pageFriends">
        <div className="header">
          <div>
          <button type="button" onClick={handleClick}>
                    Go profile
                  </button>
          </div>
            <h3>Dương Ngô Tùng</h3>
            <p>@DngNgTng1</p>
        </div>
    </div>
  )
}

export default Pagefrends
