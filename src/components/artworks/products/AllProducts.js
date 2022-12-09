import React, { useEffect, useState } from "react";
import "./AllProducts.css";
// import Home from "../home/Home";
// import Navbar from "../navbar/Navbar";
import Productscard from "./Productscard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfigs/firebaseConfig";

const AllProducts = (props) => {
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

  <div>
    <div className="allproducts-page">
      <div className="allproducts-container">
        <div className="products-container">
          {products.map((product) => {
            return (
              <div>
                <Productscard key={product.id} product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>;
};

export default AllProducts;
