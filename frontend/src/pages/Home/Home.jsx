import React, { useState, useEffect } from "react";

import FadeLoader from "react-spinners/FadeLoader";
import { css } from "@emotion/react";

import DetailPost from '../../components/DetailPost/DetailPost'
import PostUser from "./PostUser";

import "./home.scss";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const [loading, setLoading] = useState(false);
  const override = css`
    position: absolute;
    top: 60%;
    left: 52%;
    transform: translate(-60%, -52%);
  `;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);

  return (
    <section>
      <header className="home">
        <h2>Home</h2>
      </header>
      <PostUser />
      {loading ? (
        <FadeLoader
          color={"#36BBD7"}
          speedMultiplier={2}
          css={override}
          loading={loading}
          size={30}
        />
      ) : (
        <div className="home__post">
          <DetailPost/>
        </div>
      )}
    </section>
  );
};

export default Home;
