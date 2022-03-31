import React from 'react';

import "./mention.scss";
import "./allnotification.scss";
import logo from "../../../assets/logo.png";

const Mention = () => {
  return (
    <div className="notification_all">
    <div className="all-list">
      <div className="all-left">
        <div className="all_twitter">
          <img src={logo} alt="" />
        </div>
        <div className="all-user">
          <img
            src="https://images.unsplash.com/photo-1648610205241-fd745a9a7541?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
          <h2>
            In case you missed <a href="">haotran</a> haha
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            asperiores, nesciunt autem, reiciendis incidunt accusantium
            eveniet et sequi quos odio fuga quae aperiam recusandae nobis
            libero odit sint commodi optio?
            <div className="all-more">
              <button><i class="fas fa-ellipsis-h"></i></button>
            </div>
          </p>
          <span>footer</span>
        </div>
      </div>
      <div className="all-more">
        <i class="fas fa-ellipsis-h"></i>
      </div>
    </div>
    <div className="all-list">
      <div className="all-left">
        <div className="all_twitter">
          <img src={logo} alt="" />
        </div>
        <div className="all-user">
          <img
            src="https://images.unsplash.com/photo-1648629629660-efb2e6ee2459?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1913&q=80"
            alt=""
          />
          <h2>
            In case you missed <a href="">haotran</a> haha
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            asperiores, nesciunt autem, reiciendis incidunt accusantium
            eveniet et sequi quos odio fuga quae aperiam recusandae nobis
            libero odit sint commodi optio?
          </p>
          <span>footer</span>
        </div>
      </div>
      <div className="all-more">
        <i class="fas fa-ellipsis-h"></i>
      </div>
    </div>
    <div className="all-list">
      <div className="all-left">
        <div className="all_twitter">
          <img src={logo} alt="" />
        </div>
        <div className="all-user">
          <img
            src="https://images.unsplash.com/photo-1640622307911-ee5870412ab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <h2>
            In case you missed <a href="">haotran</a> haha
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            asperiores, nesciunt autem, reiciendis incidunt accusantium
            eveniet et sequi quos odio fuga quae aperiam recusandae nobis
            libero odit sint commodi optio?
          </p>
          <span>footer</span>
        </div>
      </div>
      <div className="all-more">
        <i class="fas fa-ellipsis-h"></i>
      </div>
    </div>
    <div className="all-list">
      <div className="all-left">
        <div className="all_twitter">
          <img src={logo} alt="" />
        </div>
        <div className="all-user">
          <img
            src="https://scontent-hkt1-2.xx.fbcdn.net/v/t39.30808-6/276067823_3120353008252530_440324924059207916_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=a4a2d7&_nc_ohc=xj6RlmTT3S0AX_BqC7H&_nc_ht=scontent-hkt1-2.xx&oh=00_AT93LvhzDm0o5JaDsxpLoxg2UZCs_qqqpPx2PiAWoisCMA&oe=623A866A"
            alt=""
          />
          <h2>
            In case you missed <a href="">haotran</a> haha
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            asperiores, nesciunt autem, reiciendis incidunt accusantium
            eveniet et sequi quos odio fuga quae aperiam recusandae nobis
            libero odit sint commodi optio?
          </p>
          <span>footer</span>
        </div>
      </div>
      <div className="all-more">
        <i class="fas fa-ellipsis-h"></i>
      </div>
    </div>
  </div>
  )
}

export default Mention;
