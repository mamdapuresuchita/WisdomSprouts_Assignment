import React from "react";
import leftHero from "../assets/leftHero.png";
import topHero from "../assets/topHero.jpg";
import bakery from "../assets/bakery.jpg";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="heroSection d-flex justify-content-around border-3 p-5">
        <div className="leftHero border-3 border-warning ">
          <div>
            <h1>100% Natural</h1>
            <h2>Fresh Smothie & Summer Juice</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
              quos molestiae nihil doloremque magni fugit temporibus, aliquam
              minima distinctio beatae nesciunt officiis. Numquam, architecto
              assumenda. Deleniti recusandae earum harum nobis?
            </p>
            <button className="btn btn-warning">Shop Now</button>
          </div>
          <img src={leftHero} className="rounded-4"></img>
        </div>


        <div className="rightHero" style={{ width: "50%", height: "auto" }}>
          <div className="topHero mb-4">
            <div>
              <h1>20% Off</h1>
              <p>_______________SALE</p>
              <h2>Fruits & Vegetables</h2>
              <h5>Shop Collection</h5>
            </div>
            <img src={topHero} className="rounded-4"></img>
          </div>
          <div className="bottomHero">
                        <div>
              <h1>15% Off</h1>
              <p>_______________SALE</p>
              <h2>Baked Products</h2>
              <h5>Shop Collection</h5>
            </div>
            <img src={bakery} className="rounded-4"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
