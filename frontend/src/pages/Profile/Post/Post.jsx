import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import './post.scss'

const Post = () => {
  return (
    <div className="card-post">
      <div className="content-post">
        <div className="post-avatar">
          <img
            src="https://pbs.twimg.com/profile_images/1472366803342925826/R9TYcoFx_bigger.jpg"
            alt=""
          />
        </div>
        <div className="post-info">
          <div className="post-info-header">
            <div className="post-name">
              <h4>Dương Ngô Tùng 1</h4>
              <p>@DngNgTng1</p>
              <p>22h</p>
            </div>
            <div className="post-dot">
              <i class="fas fa-ellipsis-h"></i>
            </div>
          </div>
          <div className="post-content">
            <div className="post-content-title">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="post-content-img">
              <img
                src="https://images.unsplash.com/photo-1640622299541-8c8ab8a098f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="post-interactive">
            <div className="post-interactive-icon">
              <Tooltip id="comment" title="Comment" arrow>
                <button>
                  <i class="far fa-comment-dots"></i>
                </button>
              </Tooltip>
              <p>1</p>
            </div>
            <div className="post-interactive-icon">
              <Tooltip id="heart" title="Like" arrow>
                <button>
                  <i class="fal fa-heart"></i>
                </button>
              </Tooltip>
              <p>1</p>
            </div>
            <div className="post-interactive-icon">
              <Tooltip title="Share" arrow>
                <button>
                  <i class="far fa-share-square"></i>
                </button>
              </Tooltip>
              <p>1</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-post">
        <div className="post-avatar">
          <img
            src="https://pbs.twimg.com/profile_images/1472366803342925826/R9TYcoFx_bigger.jpg"
            alt=""
          />
        </div>
        <div className="post-info">
          <div className="post-info-header">
            <div className="post-name">
              <h4>Dương Ngô Tùng</h4>
              <p>@DngNgTng1</p>
              <p>22h</p>
            </div>
            <div className="post-dot">
              <i class="fas fa-ellipsis-h"></i>
            </div>
          </div>
          <div className="post-content">
            <div className="post-content-title">
              <p></p>
            </div>
            <div className="post-content-img">
              <img
                src="https://images.unsplash.com/photo-1648468092356-5587d9acc33f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="post-interactive">
            <div className="post-interactive-icon">
              <Tooltip id="comment" title="Comment" arrow>
                <button>
                  <i class="far fa-comment-dots"></i>
                </button>
              </Tooltip>
              <p>1</p>
            </div>
            <div className="post-interactive-icon">
              <Tooltip id="heart" title="Like" arrow>
                <button>
                  <i class="fal fa-heart"></i>
                </button>
              </Tooltip>
              <p>1</p>
            </div>
            <div className="post-interactive-icon">
              <Tooltip title="Share" arrow>
                <button>
                  <i class="far fa-share-square"></i>
                </button>
              </Tooltip>
              <p>1</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-post">
        <div className="post-avatar">
          <img
            src="https://pbs.twimg.com/profile_images/1472366803342925826/R9TYcoFx_bigger.jpg"
            alt=""
          />
        </div>
        <div className="post-info">
          <div className="post-info-header">
            <div className="post-name">
              <h4>Dương Ngô Tùng</h4>
              <p>@DngNgTng1</p>
              <p>22h</p>
            </div>
            <div className="post-dot">
              <i class="fas fa-ellipsis-h"></i>
            </div>
          </div>
          <div className="post-content">
            <div className="post-content-title">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="post-content-img">
              <img
                src="https://images.unsplash.com/photo-1648470525031-8ad4a33ec5b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="post-interactive">
            <div className="post-interactive-icon">
              <Tooltip id="comment" title="Comment" arrow>
                <button>
                  <i class="far fa-comment-dots"></i>
                </button>
              </Tooltip>
              <p>1</p>
            </div>
            <div className="post-interactive-icon">
              <Tooltip id="heart" title="Like" arrow>
                <button>
                  <i class="fal fa-heart"></i>
                </button>
              </Tooltip>
              <p>1</p>
            </div>
            <div className="post-interactive-icon">
              <Tooltip title="Share" arrow>
                <button>
                  <i class="far fa-share-square"></i>
                </button>
              </Tooltip>
              <p>1</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-post">
        <div className="post-avatar">
          <img
            src="https://pbs.twimg.com/profile_images/1472366803342925826/R9TYcoFx_bigger.jpg"
            alt=""
          />
        </div>
        <div className="post-info">
          <div className="post-info-header">
            <div className="post-name">
              <h4>Dương Ngô Tùng</h4>
              <p>@DngNgTng1</p>
              <p>22h</p>
            </div>
            <div className="post-dot">
              <i class="fas fa-ellipsis-h"></i>
            </div>
          </div>
          <div className="post-content">
            <div className="post-content-title">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="post-content-img">
              <img src="" alt="" />
            </div>
          </div>
          <div className="post-interactive">
            <div className="post-interactive-icon">
              <Tooltip id="comment" title="Comment" arrow>
                <button>
                  <i class="far fa-comment-dots"></i>
                </button>
              </Tooltip>
              <p>1</p>
            </div>
            <div className="post-interactive-icon">
              <Tooltip id="heart" title="Like" arrow>
                <button>
                  <i class="fal fa-heart"></i>
                </button>
              </Tooltip>
              <p>1</p>
            </div>
            <div className="post-interactive-icon">
              <Tooltip title="Share" arrow>
                <button>
                  <i class="far fa-share-square"></i>
                </button>
              </Tooltip>
              <p>1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;