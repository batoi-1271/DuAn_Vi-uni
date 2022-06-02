import React, { useState, useRef ,useEffect} from "react";
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
   const idpost = props.dataFromParent;
    const post = props.post;
    const [like,setLike] = useState(post[1].like_count);
    const HanldLike = async () => {
      
            

            const result = await fetch(`http://viuni.tk/like/${idpost}`, {
                method: "POST",
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
                    // "Content-type": "application/json; charset=UTF-8",
                },
                // body: JSON.stringify(page),

            })

           
          .then(response => {
            if(response.ok){
                return response.json()
            }
            throw Error(response.status)
        })
        .then((result) => {
         console.log(result)
          if(result.message == "Đã like"){
            //   setLike(post[1].like_count+1)
        
              setLike((c) => c + 1);
              console.log("like")
          }else{
            setLike((c) => c - 1);
            console.log("Hủy")
          }
          
        })
        
    }
    // useEffect( () =>{
      
    //     HanldLike()

    //  }, [0]);
    
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
                    <p>{post[1].cmt_count}</p>

                </div>
                <div className="like interactive">
                    <Tooltip id="heart" title="Like"  arrow>
                    <button onClick={HanldLike}>
            <input type="checkbox" id="checkbox" />
            <label for="checkbox">
                <svg id="heart-svg" viewBox="467 392 58 57" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group" fill="none" fill-rule="evenodd" transform="translate(467 392)">
                        <path d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z" id="heart" fill="transparent" stroke="black" stroke-width="2" stroke-linecap="butt" />
                        <circle id="main-circ" fill="#E2264D" opacity="0" cx="29.5" cy="29.5" r="1.5" />

                        <g id="grp7" opacity="0" transform="translate(7 6)">
                            <circle id="oval1" fill="#9CD8C3" cx="2" cy="6" r="2" />
                            <circle id="oval2" fill="#8CE8C3" cx="5" cy="2" r="2" />
                        </g>

                        <g id="grp6" opacity="0" transform="translate(0 28)">
                            <circle id="oval1" fill="#CC8EF5" cx="2" cy="7" r="2" />
                            <circle id="oval2" fill="#91D2FA" cx="3" cy="2" r="2" />
                        </g>

                        <g id="grp3" opacity="0" transform="translate(52 28)">
                            <circle id="oval2" fill="#9CD8C3" cx="2" cy="7" r="2" />
                            <circle id="oval1" fill="#8CE8C3" cx="4" cy="2" r="2" />
                        </g>

                        <g id="grp2" opacity="0" transform="translate(44 6)">
                            <circle id="oval2" fill="#CC8EF5" cx="5" cy="6" r="2" />
                            <circle id="oval1" fill="#CC8EF5" cx="2" cy="2" r="2" />
                        </g>

                        <g id="grp5" opacity="0" transform="translate(14 50)">
                            <circle id="oval1" fill="#91D2FA" cx="6" cy="5" r="2" />
                            <circle id="oval2" fill="#91D2FA" cx="2" cy="2" r="2" />
                        </g>

                        <g id="grp4" opacity="0" transform="translate(35 50)">
                            <circle id="oval1" fill="#F48EA7" cx="6" cy="5" r="2" />
                            <circle id="oval2" fill="#F48EA7" cx="2" cy="2" r="2" />
                        </g>

                        <g id="grp1" opacity="0" transform="translate(24)">
                            <circle id="oval1" fill="#9FC7FA" cx="2.5" cy="3" r="2" />
                            <circle id="oval2" fill="#9FC7FA" cx="7.5" cy="2" r="2" />
                        </g>
                    </g>
                </svg>
            </label>
        </button>
                    </Tooltip>
                    <p  >{like}</p>

                </div>
                <div className="share interactive">
                    <Tooltip id="Share" title="Share" arrow>
                        <button>
                            <i class="fal fa-share-all"></i>
                        </button>
                    </Tooltip>
                    <p>{post[1].share_count}</p>
                </div>
            </div>
            <div
                ref={content}
                // style={{ maxHeight: `${setHeight}` }}
                className="accordion__content">
                <DetailComment  dataFromParent={idpost} />
            </div>
        </div>
    );
}

export default Accordion;
