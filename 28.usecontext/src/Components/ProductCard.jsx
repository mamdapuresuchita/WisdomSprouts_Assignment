import React from "react";
//import ThemeContext from "../hooks/ThemeContext";

const ProductCard = ({ prod }) => {
    //const {theme} =useContext(ThemeContext);

  return (
    <div className="col-12 col-md-6 col-lg-3 mb-4">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={prod.image}
              class="img-fluid rounded-start"
              alt={prod.title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{prod.title}</h5>
              <p className="card-text">{prod.description}</p>
              <p className="card-text">
                <small class="text-body-secondary">
                  View Details
                </small>
              </p>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
