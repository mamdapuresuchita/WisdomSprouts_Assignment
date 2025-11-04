import React from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="shadow-lg p-3 bg-body-warning rounded">
        {/* Left Section */}

        <div className="leftNav">
          <Link to="/">
            <img
              src={logo}
              alt="FoodMart Logo"
              className="logo"
              style={{ width: "105px", height: "70px" }}
            ></img>
          </Link>
        </div>

        {/* Center Section */}

        <div className="centerNav">
          <div className="input-group">
            <input
              type="text"
              className="form-control border border-warning border-3"
            />
            <button
              className="btn btn-warning dropdown-toggle border border-warning fw-bolder text-dark"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              All Categories
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="#">
                  Vegetables
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Fruits
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Bakery Products
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Packaged Foods
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="rightNav">
          <a>
            <i class="fa-solid fa-phone"></i>
          </a>
          <button type="button" className="btn btn-warning">
            Login
          </button>
          <a>
            <i class="fa-solid fa-heart"></i>
          </a>
          <a>
            <i class="fa-solid fa-cart-shopping"></i>
          </a>
        </div>
      </nav>

      {/* Filter Section */}

      <div className="filterSection border border-2 border-warning-subtle">
        <div className="leftSideFilter">
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-warning dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Shop By Departments
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="rightSideFilter">
          <div className="scrollBar my-4">
            <button className="btn btn-outline-warning mx-2">
              Fruits & Vegetables
            </button>
            <button className="btn btn-outline-warning mx-2">Dairy</button>
            <button className="btn btn-outline-warning mx-2">
              Village Staples
            </button>
            <button className="btn btn-outline-warning mx-2">Dry Fruits</button>
            <button className="btn btn-outline-warning mx-2">
              Masala Blends
            </button>
            <button className="btn btn-outline-warning mx-2">
              Spreads & Honey
            </button>
            <button className="btn btn-outline-warning mx-2">
              Ready to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
