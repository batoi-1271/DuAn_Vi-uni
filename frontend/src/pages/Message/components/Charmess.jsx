import React from "react";
import "./charmess.scss";

const Charmess = ({ show, close, title, children }) => {
  return (
    <>
      {show ? (
        <div className="modalcontainer" onClick={() => close()}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
              <div className="modal_header-title">
                <h2 className="modal_header-tit">{title}</h2>
                <i onClick={() => close()} class="far fa-times"></i>
              </div>
              <i class="fas fa-search"></i>
              <input type="text" placeholder="Search people" />
            </header>
            <main className="modal_content">
              <div className="modal-groups">
                <div className="modal-group">
                  <div className="modal-group-search">
                    <i class="fas fa-users"></i>
                  </div>
                  <div className="modal-group-text">
                    <p>Creat a group</p>
                  </div>
                </div>
              </div>
              <div className="modal-friend">
                <img src="https://images.unsplash.com/photo-1648780809289-7ce35a83b828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
              </div>
            </main>

            <footer className="modal_footer">
              <div className="footer-button">
                <button className="modal-close" onClick={() => close()}>
                  Cancel
                </button>
                <button className="submit">Submit</button>
              </div>
            </footer>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Charmess;
