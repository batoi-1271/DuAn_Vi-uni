import React from 'react'
import { Link } from "react-router-dom";
import './morepost.scss';

const MorePost = () => {
    return (
        <div className="dropContainer">
            <div className="unfollow dropContainer_content">
                <i class="fal fa-user-times"></i>
                <Link to="#">Unfollow <span>@username</span></Link>
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