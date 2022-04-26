import { Link } from "@mui/material";
import React from "react";
import "./createGroup.scss";

const CreateGroup = ({ show, close }) => {
  return (
    <>
      {show ? (
        <div className="modalcontainer" onClick={() => close()}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
              <div className="modal_header-title">
                <h2 className="modal_header-tit">New Group</h2>
                <i onClick={() => close()} class="far fa-times"></i>
              </div>
              <i class="fas fa-search"></i>
              <input type="text" placeholder="Search people" />
            </header>
            <main className="modal_content">
              <div className="modal-group">
                <div className="modal-group-follow">
                  <i class="fas fa-user"></i>
                  <p>Following</p>
                </div>
                <div className="modal-group-content">
                  <div className="group-content-img">
                    <img
                      src="https://images.unsplash.com/photo-1648780809289-7ce35a83b828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                      alt=""
                    />
                    <div className="riend-content-text">
                      <h3>Hao Tran</h3>
                      <p>@tranhao21</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-group">
                <div className="modal-group-follow">
                  <i class="fas fa-user"></i>
                  <p>You Follow Each Other</p>
                </div>
                <div className="modal-group-content">
                  <div className="group-content-img">
                    <img
                      src="https://images.unsplash.com/photo-1648780809289-7ce35a83b828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                      alt=""
                    />
                    <div className="group-content-text">
                      <h3>Hao Tran</h3>
                      <p>@tranhao21</p>
                    </div>
                  </div>
                </div>
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

export default CreateGroup;
