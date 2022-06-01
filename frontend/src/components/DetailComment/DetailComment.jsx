import React, { useState, useEffect, useReducer } from 'react';
import Heart from '../Heart/Heart';
import Tooltip from "@mui/material/Tooltip";

import './detailcomment.scss';
const DetailComment = (props) => {
    const accessToken = localStorage.getItem('accessToken');
    const [page, setPage] = useState({
        "index": 0,
        "size": 5
    });
    const [user, setUser] = useState();
    const [content, setContent] = useState();
    const [pageCount, setPageCount] = useState(0)
    const idPost = props.dataFromParent;
    const [comment, SetComment] = useState();
    const fetchs = (urls, headers) => {
        fetch(urls, headers)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log('error', error)

            });
    }
    const id = 15
    useEffect(() => {

        const result = fetch(`http://viuni.tk/user/me`, {
            headers: {
                'Authorization': 'Bearer' + localStorage.getItem('accessToken'),
            }

        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw Error(response.status)
            })
            .then((result) => {
                setUser(result)
                console.log(result)


            })
        if (idPost != null) {
            const fectchData = async () => {


                const result = await fetch(`http://viuni.tk/comment/all/${idPost}`, {
                    method: "POST",
                    headers: {
                        'Authorization': 'Bearer ' + accessToken,
                        "Content-type": "application/json; charset=UTF-8",
                    },
                    body: JSON.stringify(page),

                })

                const jsonResult = await result.json()
                // console.log('data: ', jsonResult);
                SetComment(jsonResult)


            }
            fectchData()
        }

    }, [pageCount]);

    const RequestComment = async () => {
        const contentCmt = { content }

        const result = await fetch(`http://viuni.tk/comment/${idPost}`, {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("accessToken"),
                "Content-Type": "application/json"

            },

            body: JSON.stringify(contentCmt)
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw Error(response.status)
            })
            .then((result) => {

                console.log(result)
                SetComment(prev => {


                    const newContent = [...prev.content, result].sort((a, b) => new Date(b.created_date) - new Date(a.created_date));
                    if (prev.content.length >= 5) {
                        const nextcontent = [];
                        for (let index = 0; index <= 4; index++) {

                            nextcontent.push(newContent[index])

                        }
                        console.log(newContent)
                        return { ...prev, content: nextcontent }
                        // return {...prev};
                    } else {

                        return { ...prev, content: newContent }
                    }
                })

            })


    }



    return (
        <>
            <form className="form">
                <div className="form_avatar">
                    <div className="img">
                        <img src={user != null && user.avatar_image != null ? user.avatar_image.link_image : null}
                            alt="" />
                    </div>
                </div>
                <div className="form_contentCmt">
                    <textarea type='text' className="userCmt" placeholder="Post your reply" name="content" onChange={(e) => setContent(e.target.value)} />
                </div>
                <div className="form_sendCmt">
                    <input type='button' className="sendCmt" value='Send' onClick={RequestComment} />
                </div>
            </form>

            {comment != null ?
                Object.entries(comment.content).map((arr, i) =>
                    <div className="contentCmt">
                        <div className="contentCmt_avatar">
                            <img src={arr[1].author.avatar_image != null ? arr[1].author.avatar_image.link_image : null}
                                alt="" />
                        </div>
                        <div className="contentCmt_Username">
                            <div className="info">
                                <div className="nameCmt">
                                    <p>{arr[1].author.last_name} {arr[1].author.first_name}</p>
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
                                <p>{arr[1].content} </p>
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
                                        <Heart />
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

                ) : null}

            <button className="btn-MoreCmt">View more comment</button>

        </>
    )
}

export default DetailComment