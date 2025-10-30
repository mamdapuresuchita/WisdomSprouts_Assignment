import React from "react";
import useCustomAPI from "../hooks/useCustomAPI";

const ProductList = () => {
  const { products, loading, error } = useCustomAPI(
    "https://fakestoreapi.com/products"
  );

  if (loading)
    return (
      <>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </>
    );

  if (error)
    return (
      <>
        <p>Error while getting products.........</p>
      </>
    );

 return (
    <div className="container my-4">
      <h3 className="mb-4 text-center">Product List</h3>
      <div className="row">
        {products.map((prod, i) => (
          <div className="col-md-6 col-lg-4 mb-4" key={i}>
            <div className="card h-100 shadow-sm">
              <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center">
                  <img
                    src={prod.image}
                    className="img-fluid rounded-start"
                    alt={prod.title}
                    style={{ maxHeight: "150px", objectFit: "contain" }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{prod.title}</h5>
                    <p className="card-text small">{prod.description.slice(0, 80)}...</p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        ${prod.price}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
