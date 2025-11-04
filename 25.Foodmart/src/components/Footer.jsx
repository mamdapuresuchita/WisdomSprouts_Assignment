import React from "react";
import logo from "../assets/logo.png";
import './Footer.css'

const Footer = () => {
  return (
    <div className="d-flex justify-content-evenly align-items-start mt-5 p-2">
      <div className="leftFooter">
        <img src={logo} className="mb-3" width="120"></img>
        <div className="socialMedia d-flex gap-2 ">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-amazon"></i>
        </div>
        </div>

        <div className="FooterLinks">
          <ul>
            <li className="fw-bold">Ultras</li>
            <li>About us</li>
            <li>Conditions</li>
            <li>Our Journals</li>
            <li>Careers</li>
            <li>Affiliate Programme</li>
            <li>Ultras Press</li>
          </ul>
        </div>

        <div className="FooterLinks">
          <ul>
            <li className="fw-bold">FAQ</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
            <li>Returns & Refunds</li>
            <li>Cookie Guidelines</li>
            <li>Delivery Information</li>
            <li>Customer Service</li>
          </ul>
        </div>

        <div className="FooterLinks">
          <ul>
            <li className="fw-bold">Subscribe Us</li>
            <li>
              Subscribe to our newsletter to get updates about our grand offers.
            </li>
            <li>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  id="inputGroupFile04"
                  value="Email address"
                  
                />
                <button
                  class="btn btn-dark"
                  type="button"
                  id="inputGroupFileAddon04"
                >
                  Subscribe
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    
  );
};

export default Footer;
