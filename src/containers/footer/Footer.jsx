import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer section__padding">
      <div className="padding">
        <div className="clear-fix">
          <div className="left">
            <ul className="nave">
              <li className="nav-item">
                <Link to="/">
                  <a className="nav-link" href="##">
                    Support
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/">
                  <a className="nav-link" href="##">
                    Company
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sell">
                  <a className="nav-link" href="##">
                    Sell Works
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/learn">
                  <a className="nav-link" href="##">
                    Learn
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="right">
            <ul className="nave">
              <li className="nav-item">
                <span className="nav-link">
                  &copy; 2022 Vixcous. All rights reserved.
                </span>
              </li>
              <li className="nav-item">
                <Link to="/about">
                  <a className="nav-link" href="##">
                    About
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact">
                  <a className="nav-link" href="##">
                    Contact
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services">
                  <a className="nav-link" href="##">
                    Services
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/privacy">
                  <a className="nav-link" href="##">
                    Privacy
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
