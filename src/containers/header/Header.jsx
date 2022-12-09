import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./header.css";
import Categories from "../../components/categories/Categories";

const Header = () => {
  return (
    <div>
      <Navbar />
      <div className="header section__padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12" id="head">
              <div className="header-content">
                <div className="banner-content">
                  <h3 className="subheading text-white">
                    Get quality downloads, Pay less for quality downloads!
                  </h3>
                  <a className="--normal-button" href="#Artworks">
                    Check Pricing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="category-tab">
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default Header;
