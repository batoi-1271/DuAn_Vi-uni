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
                <i onClick={() => close()} class="fa-solid fa-xmark"></i>
              </div>
              <i class="fas fa-search"></i>
              <input type="text" placeholder="Search people" />
            </header>
            <main className="modal_content">{children}</main>
            <footer className="modal_footer">
              <button className="modal-close" onClick={() => close()}>
                Cancel
              </button>
              <button className="submit">Submit</button>
            </footer>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Charmess;
