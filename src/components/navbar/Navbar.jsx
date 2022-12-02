import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/images/logo.png";
import cartlogo from "../../assets/images/cartlogo.png";
import avatar from "../../assets/images/avatar.png";
// const Menu = () => (
//   <>
//   <p><a href='#home'>Home</a></p>
//   <p><a href='#home'>Projects</a></p>
//   <p><a href='#home'>Team Work</a></p>
//   <p><a href='#home'>Contact</a></p>
//   </>
// )

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="_navbar" id="home">
      <div className="navbar-links">
        <div className="navbar-links-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-links-container">
          <div className="menu-links">
            <Link to="/">
              <a className="nav-link" href="##">
                Home
              </a>
            </Link>
            <Link to="/projects">
              <a className="nav-link" href="##">
                Projects
              </a>
            </Link>
            <Link to="/team">
              <a className="nav-link" href="##">
                Team
              </a>
            </Link>
            <Link to="/contact">
              <a className="nav-link" href="##">
                Contact
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar-sign">
        <div className="accounts-access">
          <div>
            <Link to="/login">
              <button>Sign in</button>
            </Link>
          </div>
          <div>
            <Link to="/Signup">
              <button className="bttn" type="button">
                Sign up
              </button>
            </Link>
          </div>
        </div>
        <div className="logdin-user">
          <div className="cart-btn">
            <Link to="/cart">
              <div className="cart-box">
                <img src={cartlogo} alt="no-img" className="cartlogo" />
                <span className="cart-number">0</span>
              </div>
            </Link>
          </div>
          <div className="pro-image">
            <Link to="/Profile">
              <div className="avatar-box">
                <img src={avatar} className="profile-icon" alt="no-img" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={30}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={30}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu-container scale-up-center">
            <div className="navbar-menu-container-links">
              <Link to="/">
                <a className="nav-link" href="##">
                  Home
                </a>
              </Link>
              <Link to="/projects">
                <a className="nav-link" href="##">
                  Projects
                </a>
              </Link>
              <Link to="/team">
                <a className="nav-link" href="##">
                  Team
                </a>
              </Link>
              <Link to="/contact">
                <a className="nav-link" href="##">
                  Contact
                </a>
              </Link>
              <div className="navbar-menu-container-links-sign">
                <Link to="/login">
                  <p>Sign in</p>
                </Link>

                <Link to="/Signup">
                  <button type="button">Sign up</button>
                </Link>
                <div className="logdin-user">
                  <Link to="/cart">
                    <div className="cart-btn">
                      <img
                        src={cartlogo}
                        alt="no-img"
                        className="cartlogo"
                        width="5%"
                      />
                      <span className="cart-number">0</span>
                    </div>
                  </Link>
                  <Link to="/Profile">
                    <img
                      src={avatar}
                      className="profile-icon"
                      alt="no-img"
                      width="5%"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
