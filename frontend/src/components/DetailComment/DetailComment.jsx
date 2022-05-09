import React from 'react';
import Heart from '../Heart/Heart';
import Tooltip from "@mui/material/Tooltip";

import './detailcomment.scss';
const DetailComment = () => {
    return (
        <>
            <form className="form">
                <div className="form_avatar">
                    <div className="img">
                        <img src="https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/278366916_1385487798583512_8287024958249099446_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=XZyCERJz-dYAX9qGWO5&_nc_ht=scontent.fhan2-2.fna&oh=00_AT8GRXAdPc0bF1h5tf9EwTdL8xggWc38gAKw04QUfVzNDA&oe=6268F326"
                            alt="" />
                    </div>
                </div>
                <div className="form_contentCmt">
                    <textarea type='text' className="userCmt" placeholder="Post your reply" />
                </div>
                <div className="form_sendCmt">
                    <input type='submit' className="sendCmt" value='Send' />
                </div>
            </form>

            <div className="contentCmt">
                <div className="contentCmt_avatar">
                    <img src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/279809034_1958745014322815_5480584650915483756_n.jpg?_nc_cat=104&ccb=1-6&_nc_sid=8bfeb9&_nc_ohc=4WDqEENINBoAX-dzDYP&_nc_ht=scontent.fhan14-1.fna&oh=00_AT_nNB35h14-tysRCzjvY2KKX0AvdpOLwojwQuZ90mppJw&oe=627E83E9"
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
                        <p>Jennie and Rosé’s signatures were spotted in a piercing studio! </p>
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
            <div className="contentCmt">
                <div className="contentCmt_avatar">
                    <img src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/279809034_1958745014322815_5480584650915483756_n.jpg?_nc_cat=104&ccb=1-6&_nc_sid=8bfeb9&_nc_ohc=4WDqEENINBoAX-dzDYP&_nc_ht=scontent.fhan14-1.fna&oh=00_AT_nNB35h14-tysRCzjvY2KKX0AvdpOLwojwQuZ90mppJw&oe=627E83E9"
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
                        <p>Jennie and Rosé’s signatures were spotted in a piercing studio! </p>
                        <div className="img">
                            <img src="https://images.unsplash.com/photo-1651955687848-7cdd2d330f34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                        </div>
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
        </>
    )
}

export default DetailComment