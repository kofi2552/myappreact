import React from "react";
import { Link } from "react-router-dom";
import "./Productscard.css";
const Productscard = (product) => {
  let mrp = parseInt(product.product.price);

  const saleprice = mrp - 25;

  let discountrate = mrp - saleprice;
  let discountdiv = discountrate / mrp;
  let disrate = Math.round(discountdiv * 100);

  return (
    <div>
      <div className="product-card">
        <div className="product-content">
          <Link to="">
            <div className="product-item">
              <div className="product-image">
                <img
                  className="img-fluid"
                  src={product.product.productimage}
                  alt=""
                />
              </div>
              <div className="product-details">
                <h2 className="description">{product.product.producttitle}</h2>
                <div className="price-container">
                  <span className="salesprice">${product.product.price}</span>
                  <p className="discountrate text-small">-{disrate}%</p>
                </div>
                <p className="download">Cart</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Productscard;
