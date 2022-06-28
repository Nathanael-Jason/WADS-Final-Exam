import "./Home.css";
import React, { useState } from "react";


const Home = (handleClick) => {
  return (
    <div className="home-pic">
      <br />
      <br />
      <img
        src="https://asset.kompas.com/crops/B4azCNVvpOxFCwtClowXmCqWGB0=/43x0:1280x825/750x500/data/photo/2021/09/13/613ede55094fb.jpg"
        width="700px"
        height="350px"
      />
      <div className="empty-space">
        <br />
        <br />

        <div className="shop-intro">
          Mr.x's Coffee shop is a great place to hang out and chill.
          <br />
          We provide a variety of coffee with great quality and services.
            <br />
            <br />
          <div className="shop-info">
          <h5>
            Location: Kuningan city mall ground floor, Jl. Prof. DR. Satrio No.11, RT.14/RW.4, 
            <br />
            Kuningan, Karet Kuningan, Setiabudi, South Jakarta City, Jakarta 12940
          </h5>
          <h5>
            Working hours: 8AM - 10PM
          </h5>
          <h5>
            Visit our social media at:
            <br />
            Instagram: @MrXCoffeeJKT
            <br />
            Twitter: @MrXCoffeeJKT
          </h5>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

            </div>
          </div>
        </div>
      </div>
  );
};

export default Home;
