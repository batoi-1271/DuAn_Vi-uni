import React, { useState, useRef } from "react";
import Tooltip from "@mui/material/Tooltip";

import "./comment.scss";
import Heart from "../Heart/Heart";

function Accordion(props) {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
    }

    return (
        <div className="accordion__section">
            <div className="group-Interactive">
                <div className="comment interactive">
                    <Tooltip id="comment" title="Comment" arrow>
                        <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                            {/* <p className="accordion__title">{props.title}</p> */}
                            <i class="fal fa-comment"></i>
                        </button>
                    </Tooltip>
                    <p>1k</p>

                </div>
                <div className="like interactive">
                    <Tooltip id="heart" title="Like" arrow>
                        <Heart/>
                    </Tooltip>
                    <p>2k</p>

                </div>
                <div className="share interactive">
                    <Tooltip id="Share" title="Share" arrow>
                        <button>
                            <i class="fal fa-share-all"></i>
                        </button>
                    </Tooltip>
                    <p>10k</p>
                </div>
            </div>
            <div
                ref={content}
                style={{ maxHeight: `${setHeight}` }}
                className="accordion__content">
                <form className="form">
                    <div className="form_avatar">
                        <div className="img">
                            <img src="https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/278366916_1385487798583512_8287024958249099446_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=XZyCERJz-dYAX9qGWO5&_nc_ht=scontent.fhan2-2.fna&oh=00_AT8GRXAdPc0bF1h5tf9EwTdL8xggWc38gAKw04QUfVzNDA&oe=6268F326"
                                alt="" />
                        </div>
                    </div>
                    <div className="form_contentCmt">
                        <textarea type='text' className="userCmt" placeholder="Write a public comment..." />
                    </div>
                    <div className="form_sendCmt">
                        <input type='submit' className="sendCmt" value='Send' />
                    </div>
                </form>
                <div className="contentCmt">
                    <div className="contentCmt_avatar">
                        <img src="https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/43754125_965806366950023_7453303198267211776_n.jpg?stp=dst-jpg_p640x640&_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=0vDBZ0qwqjkAX-pp3Pm&_nc_ht=scontent-sin6-3.xx&oh=00_AT_4d8Gp0xjgrVWpMnc7Xqy-lqsQYiprOpUa7s797dsMpA&oe=62920DBF"
                            alt="" />
                    </div>
                    <div className="contentCmt_Username">
                        <div className="info">
                            <div className="nameCmt">
                                <p>Khanh Linh Pham</p>
                            </div>
                            <div className="usernameCmt">
                                <p>&nbsp;@_im_Linh_ </p>
                            </div>
                            <div className="timeCreat">
                                <p>&nbsp;*&nbsp;Feb 17</p>
                            </div>
                        </div>

                        <div className="replyWho">
                            <p>Replying to <span>@userName</span></p>
                        </div>

                        <div className="cotentUserCmt">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                        <div className="group-InteractiveCmt">
                            <div className="comment interactive">
                                <Tooltip id="comment" title="Comment" arrow>
                                    <button>
                                        <i class="fal fa-comment"></i>
                                    </button>
                                </Tooltip>
                                <p>1k</p>

                            </div>
                            <div className="like interactive">
                                <Tooltip id="heart" title="Like" arrow>
                                   <Heart/>
                                </Tooltip>
                                <p>2k</p>

                            </div>
                            <div className="share interactive">
                                <Tooltip id="Share" title="Share" arrow>
                                    <button>
                                        <i class="fal fa-share-all"></i>
                                    </button>
                                </Tooltip>
                                <p>10k</p>
                            </div>
                        </div>
                    </div>
                    <div className="contentCmt_moreCmt">
                        <i class="fal fa-ellipsis-h-alt"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accordion;
