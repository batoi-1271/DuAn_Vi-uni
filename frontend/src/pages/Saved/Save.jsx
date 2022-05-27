import React, { Component, useState, useEffect } from "react";
import "../Saved/save.scss";
import FadeLoader from "react-spinners/FadeLoader";
import DetailPost from '../../components/DetailPost/DetailPost';
import { css } from "@emotion/react";

const Save = () => {
  const [loading, setLoading] = useState(false);
  const override = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);

  return (
    <div className="cards">
      <div className="card-header">
        <div className="card-text">
          <h3>Saved</h3>
          <p>@DngNgTng1</p>
        </div>
        <div className="post-dot">
          <i class="fas fa-ellipsis-h"></i>
        </div>
      </div>
      {loading ? (
        <FadeLoader
          color={"#36BBD7"}
          speedMultiplier={2}
          css={override}
          loading={loading}
          size={30}
        />
      ) : (
        <div className="save-list">
          <DetailPost/>
        </div>
      )}
      ;
    </div>
  );
};

export default Save;
