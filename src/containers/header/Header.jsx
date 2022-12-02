import React from "react";
// import { useState } from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header section__padding">
      <div className="container-flui">
        <div className="row">
          <div className="col-lg-12" id="head">
            <div className="header-content">
              <div className="banner-content">
                <h3 className="subheading text-white">
                  Get quality downloads, yet pay less Pay less for quality
                  downloads!
                </h3>
                <a className="--normal-button" href="#Artworks">
                  Check Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
