import React from "react";
import { Link } from "react-router-dom";

const Sellsuccess = () => {
  return (
    <div>
      <div className="succeeded">
        <h2>Product uploaded.....</h2>
        <p>
          You added a new Product successfully! head over to see all products{" "}
          <Link to="/home">All Assets</Link>
        </p>
        <h5>
          Add more product?
          <p>
            <Link to="/sell">Click here</Link>
          </p>
        </h5>
      </div>
    </div>
  );
};

export default Sellsuccess;
