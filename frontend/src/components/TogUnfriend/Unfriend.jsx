import React from 'react'
import "./unfriend.scss";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Unfriend = ({ show, close }) => {
    return (
        <>
            {show ?
                <div className="modalUnf" onClick={() => close()}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <main className="modal_content">
                            <div className="title">
                                <h4>Are you want unfollow <span>@NameUser</span></h4>
                            </div>
                            <div className="content">
                                <Button id="unfollow" variant="outlined"><Link to="#">UnFriend</Link></Button>
                                <Button id="cancel" variant="contained" onClick={() => close()}><Link to="#">Cancel</Link></Button>
                            </div>
                        </main>
                    </div>
                </div>

                : null}
        </>
    )
}

export default Unfriend;