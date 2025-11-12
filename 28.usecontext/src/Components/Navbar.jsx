import React, { useContext } from "react";
import ThemeContext from "../hooks/ThemeContext";
import { CartContext } from "../hooks/CartContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { cartLength } = useContext(CartContext);

  return (
    <div>
      <nav
        className="navbar  border border-2"
        style={{
          background: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
          padding: "20px",
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

          <div className="rightNav d-flex gap-3">
            <button
              className="btn btn-danger ms-4"
              onClick={(e) => {
                e.preventDefault();
                toggleTheme();
              }}
            >
              Change Theme
            </button>

            {/* Cart Icon */}

            <Link to="/Cart">
              <i className="fa-solid fa-cart-shopping"></i>

              {cartLength > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: "0.7rem" }}
                >
                  {cartLength}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
