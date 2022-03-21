import React, { Component, useState } from "react";
import Button from "@mui/material/Button";
import "./home.scss";
import PostUser from "./PostUser";

const Home = () => {
  return (
    <section>
      <header className="home">
        <h2>Home</h2>
      </header>
      <PostUser />
      <div className="homelists"></div>
    </section>
  );
};

export default Home;
