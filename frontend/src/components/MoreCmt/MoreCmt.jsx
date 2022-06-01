import React from 'react';
import { Link } from "react-router-dom";
import './moreCmt.scss';

const MoreCmt = () => {
    return (
        <div className="dropMoreCmt">
            <div className="edit dropMoreCmt_contentCmt">
                {/* <i class="fal fa-file-edit"></i> */}
                <Link to="#">Edit</Link>
            </div>
            <div className="delete dropMoreCmt_contentCmt">
                {/* <i class="fal fa-trash"></i> */}
                <Link to="#">Delete</Link>
            </div>
            <div className="report dropMoreCmt_contentCmt">
                {/* <i class="fal fa-flag"></i> */}
                <Link to="#">Report comment</Link>
            </div>
            <div className="save dropMoreCmt_contentCmt">
                {/* <i class="fal fa-bookmark"></i> */}
                <Link to="#">Hide comment</Link>
            </div>
        </div>
    )
}

export default MoreCmt