import React from 'react'
import './share.scss'
import Tooltip from '@mui/material/Tooltip';


const Likes = () => {
  return (
    <div className="card-post">
      <div className="content-post">
        <div className="post-avatar">
          <img
            src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/150101361_1111174082681553_5093732990613340508_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=0debeb&_nc_ohc=xHRrVSO7r0MAX8dCslx&_nc_oc=AQkmf6pGhaK9LJoUNB7T2bSKbvLhYHiMSyn1h-gxsaGUFU8ULZa8lnxvPCSmyo7i6Wo&_nc_ht=scontent-hkg4-1.xx&oh=00_AT-mHd0RWW3BqAq9oFvccT5a0_3b0dIfAjSCOulovhxXAg&oe=62581550"
            alt=""
          />
        </div>
        <div className="post-info">
          <div className="post-info-header">
            <div className="post-name">
              <h4>Nguyển Bá Tới</h4>
              <p>@Toiba2001</p>
              <p>2day</p>
            </div>
            <div className="post-dot">
              <i class="fa-solid fa-ellipsis"></i>
            </div>
          </div>
          <div className="post-content">
            <div className="post-content-title">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="post-content-img">
              <img
                src="https://images.unsplash.com/photo-1648516089291-c911cf437c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80"
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
            src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/150101361_1111174082681553_5093732990613340508_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=0debeb&_nc_ohc=xHRrVSO7r0MAX8dCslx&_nc_oc=AQkmf6pGhaK9LJoUNB7T2bSKbvLhYHiMSyn1h-gxsaGUFU8ULZa8lnxvPCSmyo7i6Wo&_nc_ht=scontent-hkg4-1.xx&oh=00_AT-mHd0RWW3BqAq9oFvccT5a0_3b0dIfAjSCOulovhxXAg&oe=62581550"
            alt=""
          />
        </div>
        <div className="post-info">
          <div className="post-info-header">
            <div className="post-name">
              <h4>Nguyển Bá Tới</h4>
              <p>@Toiba2001</p>
              <p>2day</p>
            </div>
            <div className="post-dot">
              <i class="fa-solid fa-ellipsis"></i>
            </div>
          </div>
          <div className="post-content">
            <div className="post-content-title">
              <p></p>
            </div>
            <div className="post-content-img">
              <img
                src="https://images.unsplash.com/photo-1648486562793-5fabe3daa31b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
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
            src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/150101361_1111174082681553_5093732990613340508_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=0debeb&_nc_ohc=xHRrVSO7r0MAX8dCslx&_nc_oc=AQkmf6pGhaK9LJoUNB7T2bSKbvLhYHiMSyn1h-gxsaGUFU8ULZa8lnxvPCSmyo7i6Wo&_nc_ht=scontent-hkg4-1.xx&oh=00_AT-mHd0RWW3BqAq9oFvccT5a0_3b0dIfAjSCOulovhxXAg&oe=62581550"
            alt=""
          />
        </div>
        <div className="post-info">
          <div className="post-info-header">
            <div className="post-name">
              <h4>Nguyển Bá Tới</h4>
              <p>@Toiba2001</p>
              <p>2day</p>
            </div>
            <div className="post-dot">
              <i class="fa-solid fa-ellipsis"></i>
            </div>
          </div>
          <div className="post-content">
            <div className="post-content-title">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="post-content-img">
              <img
                src="https://images.unsplash.com/photo-1648491028314-795c8bfff1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1878&q=80"
                alt=""
              />
            </div>
          </div>


          {/* Sử dụng icon và tooltip title   dòng 155 - 180 */}
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
            src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/150101361_1111174082681553_5093732990613340508_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=0debeb&_nc_ohc=xHRrVSO7r0MAX8dCslx&_nc_oc=AQkmf6pGhaK9LJoUNB7T2bSKbvLhYHiMSyn1h-gxsaGUFU8ULZa8lnxvPCSmyo7i6Wo&_nc_ht=scontent-hkg4-1.xx&oh=00_AT-mHd0RWW3BqAq9oFvccT5a0_3b0dIfAjSCOulovhxXAg&oe=62581550"
            alt=""
          />
        </div>
        <div className="post-info">
          <div className="post-info-header">
            <div className="post-name">
              <h4>Nguyển Bá Tới</h4>
              <p>@Toiba2001</p>
              <p>2day</p>
            </div>
            <div className="post-dot">
              <i class="fa-solid fa-ellipsis"></i>
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

export default Likes