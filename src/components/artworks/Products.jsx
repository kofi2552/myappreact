import React, { useEffect, useState } from "react";
import "./Products.css";
import Header from "../../containers/header/Header";
// import Navbar from "../navbar/Navbar";
import Productcontainer from "./Productcontainer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfigs/firebaseConfig";

const Products = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = () => {
      const productsArray = [];
      const path = `products-${props.type.toUpperCase()}`;

      getDocs(collection(db, path))
        .then((QuerySnapshot) => {
          QuerySnapshot.forEach((doc) => {
            productsArray.push({ ...doc.data(), id: doc.id });
            // console.log(doc.id, "=>", doc.data());
          });
          setProducts(productsArray);
        })
        .catch("Error Error");
    };
    getProducts();
  });

  return (
    <div>
      <Header />
      <div className="allproducts-page">
        <div className="filter-results">
          <h2 className="heading text-center">
            Top products for <span className="bold">{props.type}</span>
            <p className="detail text-center mt-2">
              Try the 'Search' for more precise results.
            </p>
          </h2>
        </div>
        <div className="allproducts-container mt-5">
          <div className="products-container">
            {products.map((product) => {
              return (
                <div>
                  <Productcontainer key={product.id} product={product} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
