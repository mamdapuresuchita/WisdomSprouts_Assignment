import React from "react";
import leftHero from "../assets/leftHero.png";
import topHero from "../assets/topHero.jpg";
import bakery from "../assets/bakery.jpg";
import phone from "../assets/phone.png"
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

      {/* Category Section */}
      <section>
        <h1>Category Section</h1>
        <div className="container d-flex">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
            </div>
          </div>

          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
            </div>
          </div>

          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
            </div>
          </div>

          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
            </div>
          </div>
        </div>
      </section>

    {/* Mobile App Promotion Section */}

    <div className="mobApp d-flex justify-content-center align-items-center mb-5 mt-5  p-5">
      
      <div className="shopFaster d-flex align-items-center p-5 rounded " style={{ backgroundColor: "#f5e6cc" , height :"400px", width :"100%" ,gap:"40px"}}>
        <img src={phone} style={{ height: "600px", objectFit: "fill" }}></img>
        <div className="text-dark">
        <h3 className="mb-4 fw-bold">Shop faster with foodmart</h3>
        <p className="lh-lg"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore mollitia, nesciunt corporis ea error consectetur non voluptatum eligendi! Recusandae harum eaque dolore enim, optio ut ullam laboriosam repellendus aperiam ex?</p>
        </div>
      </div>
    </div>

      {/* People are also looking for */}

      <div className="lookingFor m-4">
      <h3>People are also looking for</h3>
      <div className="tags d-flex gap-3 flex-wrap m-4">
      <button type="button" className="btn px-4 py-2 rounded-pill text-dark" style={{backgroundColor:" #f5e6cc"}}>iD Fresh</button>
      <button type="button" className="btn px-4 py-2 rounded-pill text-dark" style={{backgroundColor:" #f5e6cc"}}>Brawny Bear × Pakka</button>
      <button type="button" className="btn px-4 py-2 rounded-pill text-dark" style={{backgroundColor:" #f5e6cc"}}>Bake&Co (by Agrimax Foods)</button>
      <button type="button" className="btn px-4 py-2 rounded-pill text-dark" style={{backgroundColor:" #f5e6cc"}}>Lotte India – Pepero</button>
      <button type="button" className="btn px-4 py-2 rounded-pill text-dark" style={{backgroundColor:" #f5e6cc"}}>BL Agro – Nourish Pulses</button>
      <button type="button" className="btn px-4 py-2 rounded-pill text-dark" style={{backgroundColor:" #f5e6cc"}}>WellBe Foods</button>
      <button type="button" className="btn px-4 py-2 rounded-pill text-dark" style={{backgroundColor:" #f5e6cc"}}>Kurkure Jowar Puffs</button>
      <button type="button" className="btn px-4 py-2 rounded-pill text-dark" style={{backgroundColor:" #f5e6cc"}}>Zumi Foods</button>
      <button type="button" className="btn px-4 py-2 rounded-pill text-dark" style={{backgroundColor:" #f5e6cc"}}>EAT Anytime Date Laddoos</button>
      <button type="button" className="btn px-4 py-2 rounded-pill text-dark" style={{backgroundColor:" #f5e6cc"}}>Blue Tribe Foods Sweet Potato Fries</button>
      <button type="button" className="btn px-4 py-2 rounded-pill text-dark" style={{backgroundColor:" #f5e6cc"}}>Kurkure Schizwan Chutney Flavor</button>
      <button type="button" className="btn px-4 py-2 rounded-pill text-dark" style={{backgroundColor:" #f5e6cc"}}>JANS Sweet Potato Stixx</button>
      <button type="button" className="btn px-4 py-2 rounded-pill text-dark" style={{backgroundColor:" #f5e6cc"}}>“YIKES” Rolled Tortilla Chips</button>
    
      <button type="button" className="btn px-4 py-2 rounded-pill text-dark" style={{backgroundColor:" #f5e6cc"}}>Tinz Spicy Crackers</button>
      </div>
      </div>

      {/* Trusts & Benefits Section */}
      <div className="trustsSection d-flex justify-content-evenly m-5  p-4 gap-4">
        <div className="card mb-3 border-0">
          <div className="card-body">
            <h5 className="card-title">
              <i class="fa-solid fa-cart-shopping"></i> Free Delivery
            </h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>

        <div className="card mb-3 border-0">
          <div className="card-body">
            <h5 className="card-title">
              <i class="fa-solid fa-shield-halved"></i> 100% secure payment
            </h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>

        <div className="card mb-3 border-0">
          <div className="card-body">
            <h5 className="card-title">
              <i class="fa-solid fa-store"></i> Quality guarantee
            </h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>

        <div className="card mb-3 border-0">
          <div className="card-body">
            <h5 className="card-title">
              <i class="fa-solid fa-piggy-bank"></i>Guaranteed Savings
            </h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>

        <div className="card mb-3 border-0">
          <div className="card-body">
            <h5 className="card-title">
              <i class="fa-solid fa-gift"></i>Daily Offers
            </h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
