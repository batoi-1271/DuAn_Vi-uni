import { Button } from '@mui/material';
import React, { useRef, useState } from 'react';

import { Link } from "react-router-dom";
import Editpost from "../EditPost/Editpost";
import "./morepost.scss";

const MorePost = (props) => {

    const fullName = props.dataFromParent;
    // const idPost = props.idPost;
    const idPost = 53;
    const DelPost = async () => {

    // const deletePost = {
    //     method: 'PUT', 
    //     headers: {
        
    //     },
     
    //    }
     
    //   await fetch(`http://viuni.tk/post/${idPost}`, deletePost) 
    //    .then(response => response.json())
    //    .then(data => console.log(data)) 
    //    .catch(err => console.log(err)) 

}
    return (
        <div className="dropContainer">
            <div className="unfollow dropContainer_content">
                <i class="fal fa-user-times"></i>
                <Link to="#">Unfollow <span>@{fullName != null ? fullName : null}</span></Link>
            </div>
            <div className="edit dropContainer_content">
        <i class="fal fa-file-edit"></i>
        {/* <Link to="#">Edit post</Link> */}
        <button variant="contained" onClick={() => Toggle()}>
            Edit post
        </button>
        <Editpost show={modal} close={Toggle} title="">
          <h3>Hello</h3>
        </Editpost>
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


export default MorePost;
