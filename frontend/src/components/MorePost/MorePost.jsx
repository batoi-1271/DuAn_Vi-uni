import React, { useRef, useState } from 'react';

import { Link } from "react-router-dom";
import './morepost.scss';

const MorePost = (props) => {
    const [modal, setModal] = useState(false);
    const Toggle = () => setModal(!modal);
    
    const fullName = props.dataFromParent;
    const idPost = props.idPost;
    // const idPost = 53;

    const DelPost = async () => {

    const deletePost =  {
        method: 'POST', 
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
        },
     
       }
     
      await fetch(`http://viuni.tk/post/delete/${idPost}`, deletePost) 
       .then(response => response.json())
       .then(data => console.log(data)) 
       .catch(err => console.log(err)) 
    
}
    return (
        <div className="dropContainer">
            <div className="unfollow dropContainer_content">
                <i class="fal fa-user-times"></i>
                <Link to="#">Unfollow <span>@{fullName != null ? fullName : null}</span></Link>
            </div>
            <div className="unfollow dropContainer_content">
                <i class="fal fa-file-edit"></i>
                <Link to="#" >Edit post</Link>
            </div>
            <div className="unfollow dropContainer_content">
                <i class="fal fa-trash"></i>
                <Link to="#" onClick={DelPost}>Delete</Link>
             
            </div>
            <div className="report dropContainer_content">
                <i class="fal fa-flag"></i>
                <Link to="#">Report post</Link>
            </div>
            <div className="save dropContainer_content">
                <i class="fal fa-bookmark"></i>
                <Link to="#">Save post</Link>
            </div>
        </div>
    )
}

export default MorePost