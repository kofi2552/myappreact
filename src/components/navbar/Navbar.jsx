import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/images/logo.png";
import cartlogo from "../../assets/images/cartlogo.png";
import avatar from "../../assets/images/avatar.png";
import { useEffect } from "react";
import { auth, db } from "../../firebaseConfigs/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  function GetCurrentUser() {
    const [user, setUser] = useState("");
    // const usersCollectionRef = collection(db, "users");

    useEffect(() => {
      auth.onAuthStateChanged((userlogged) => {
        if (userlogged) {
          const getUsers = async () => {
            const q = query(
              collection(db, "users"),
              where("uid", "==", userlogged.uid)
            );
            const data = await getDocs(q);
            setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          };
          getUsers();
        } else {
          setUser(null);
        }
      });
    });
    return user;
  }

  const loggeduser = GetCurrentUser();

  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate("/login");
    });
  };

  return (
    <div className="_navbar" id="home">
      <div className="navbar-links">
        <div className="navbar-links-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        {!loggeduser && (
          <div className="not-user-navbar">
            <div className="navbar-links-container">
              <div className="menu-links">
                <Link to="/">
                  <button className="nav-link">Home</button>
                </Link>
                <Link to="/projects">
                  <button className="nav-link">Projects</button>
                </Link>
                <Link to="/team">
                  <button className="nav-link">Hire</button>
                </Link>
                <Link to="/sell">
                  <button className="nav-link">Sell</button>
                </Link>
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
                  <div className="cart-box">
                    <Link to="/cart">
                      <img src={cartlogo} alt="no-img" className="cartlogo" />
                    </Link>
                    <div className="cartnumberbox">
                      <span className="cart-number">0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {loggeduser && (
          <div className="user-navbar">
            <div className="navbar-links-container">
              <div className="menu-links">
                <Link to="/">
                  <button className="nav-link">Home</button>
                </Link>
                <Link to="/projects">
                  <button className="nav-link">Projects</button>
                </Link>
                <Link to="/team">
                  <button className="nav-link">Hire</button>
                </Link>
                <Link to="/sell">
                  <button className="nav-link">Sell</button>
                </Link>

                <Link to="/Profile">
                  <img src={avatar} className="profile-icon" alt="no-img" />
                </Link>

                <p className="username">
                  Hi{" "}
                  <span>{loggeduser ? loggeduser[0].username : "......"}</span>
                </p>
              </div>
            </div>

            <div className="navbar-sign2">
              <div className="logdin-user2">
                <div className="cart-box2">
                  <Link to="/cart">
                    <img src={cartlogo} alt="no-img" className="cartlogo" />
                  </Link>
                  <div className="cartnumberbox">
                    <span className="cart-number">{loggeduser[0].cart}</span>
                  </div>
                </div>
                <div className="logoutuser">
                  <button className="logout-btn" onClick={handleLogout}>
                    logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
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
            <div>
              <div className="navbar-menu-container scale-up-center">
                <div className="navbar-menu-container-links">
                  <Link to="/Profile">
                    <img src={avatar} className="profile-icon2" alt="no-img" />
                  </Link>
                  <Link to="/">
                    <button className="nav-link">Home</button>
                  </Link>
                  <Link to="/projects">
                    <button className="nav-link">Projects</button>
                  </Link>
                  <Link to="/team">
                    <button className="nav-link">Hire</button>
                  </Link>
                  <Link to="/sell">
                    <button className="nav-link">Sell</button>
                  </Link>
                  <div className="navbar-menu-container-links-sign">
                    <Link to="/login">
                      <p>Sign in</p>
                    </Link>

                    <Link to="/Signup">
                      <button type="button">Sign up</button>
                    </Link>
                    <div className="logdin-user">
                      <div className="cart-box">
                        <Link to="/cart">
                          <img
                            src={cartlogo}
                            alt="no-img"
                            className="cartlogo2"
                          />
                        </Link>
                        <div className="cartnumberbox">
                          <span className="cart-number">0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
