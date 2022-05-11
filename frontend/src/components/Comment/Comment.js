import React, { useState, useRef } from "react";
import Tooltip from "@mui/material/Tooltip";

import "./comment.scss";
import Heart from "../Heart/Heart";
import DetailComment from "../DetailComment/DetailComment";

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
                <DetailComment/>
            </div>
        </div>
    );
}

export default Accordion;
