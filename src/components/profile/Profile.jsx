import React, { useState } from "react";
import "./Profile.css";
import Navbar from "../navbar/Navbar";
import { useEffect } from "react";
import { auth, db } from "../../firebaseConfigs/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Link } from "react-router-dom";

const profile = () => {
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

  return (
    <div>
      <Navbar />
      <div className="userprofile-container">
        {loggeduser ? (
          <div className="user-details">
            <h2>User Account Details</h2>
            <div className="data-row">
              <span>Your Name</span>
              <span>{loggeduser[0].username}</span>
            </div>
            <div className="data-row">
              <span>Your Email</span>
              <span>{loggeduser[0].email}</span>
            </div>
            <div className="data-row">
              <span>Your mobile number</span>
              <span>{loggeduser[0].phonenumber}</span>
            </div>
            <div className="data-row">
              <span>Your Address</span>
              <span>{loggeduser[0].address}</span>
            </div>

            <div className="shop-detail">
              You have {loggeduser[0].cart} items in your cart
              <Link to="/cart">Chect it out?</Link>
            </div>

            <div className="shop-detail">
              Want to sell some new assets?
              <Link to="/sell">Add your creative piece here</Link>
            </div>
          </div>
        ) : (
          <div>Login to access user profile.</div>
        )}
      </div>
    </div>
  );
};

export default profile;
