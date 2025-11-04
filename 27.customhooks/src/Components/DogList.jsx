import React from "react";
import useCustomAPI from "../hooks/useCustomAPI";

const DogList = () => {
  const { products, loading, error } = useCustomAPI(
    "https://api.thedogapi.com/v1/breeds"
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
      <h1 className="text-center mb-5">Dog List</h1>
      <div className="table-responsive">
        <table className="table table-striped table-bordered align-middle text-wrap ">
          <thead className="table-dark text-center">
            <tr>
              <th>Name</th>
              <th>Breed</th>

              <th>Life Span</th>
              <th>Temperament</th>
            </tr>
          </thead>

          <tbody>
            {products.map((d, i) => (
              <tr key={i}>
                <td>{d.bred_for}</td>
                <td>{d.breed_group}</td>
                <td>{d.life_span}</td>
                <td>{d.temperament}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DogList;
