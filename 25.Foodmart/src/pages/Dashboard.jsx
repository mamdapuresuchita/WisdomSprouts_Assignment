import React from "react";
import leftHero from "../assets/leftHero.png";
import topHero from "../assets/topHero.jpg";
import bakery from "../assets/bakery.jpg";

const Dashboard = () => {
  return (
    <>
      <div className="heroSection d-flex justify-content-around border-3 p-5">
        <div
          className="leftHero border-3 border-warning "
          style={{ width: "50%", height: "auto" }}
        >
          <img
            src={leftHero}
            className="rounded-4"
            style={{ width: "300px", height: "auto" }}
          ></img>
        </div>
        <div className="rightHero" style={{ width: "50%", height: "auto" }}>
          <div className="topHero mb-4">
            <img
              src={topHero}
              className="rounded-4"
              style={{ width: "450px", height: "auto" }}
            ></img>
          </div>
          <div className="bottomHero">
            <img
              src={bakery}
              className="rounded-4"
              style={{ width: "450px", height: "auto" }}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
