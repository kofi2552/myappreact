import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./Signup.css";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebaseConfigs/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const Signup = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const [errormsg, SetErrormsg] = useState("");
  //   const [successmsg, SetSuccessmsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const initialcartvalue = 0;
        console.log(user);

        addDoc(collection(db, "users"), {
          username: username,
          email: email,
          phonenumber: phonenumber,
          password: password,
          cart: initialcartvalue,
          address: address,
          uid: user.uid,
        })
          .then(() => {
            // SetSuccessmsg(
            //   "New User Added, you will now be automatically redirected ti the login page"
            // );
            setUserName("");
            setPhonenumber("");
            setEmail("");
            setPassword("");
            setAddress("");
            setTimeout(() => {
              //   SetSuccessmsg("");
              navigate("/signupsuccess");
            }, 100);
          })
          .catch((error) => {
            SetErrormsg(error.message);
          });
      })
      .catch((error) => {
        if (error.message == "Firebase: Error (auth/invalid-email).") {
          SetErrormsg("Please fill all the required fields!");
        }
        if (error.message == "Firebase: Error (auth/email-already-in-use.") {
          SetErrormsg("User already exists!");
        }
      });
  };

  return (
    <div>
      <Navbar />
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <p>Create Account</p>

          {errormsg && <div className="error-msg">{errormsg}</div>}
          <label>Full Name</label>
          <input
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="Enter your name"
          />
          <label>Mobile Number</label>
          <input
            onChange={(e) => setPhonenumber(e.target.value)}
            type="number"
            placeholder="Enter your mobile number"
          />
          <label>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Enter your email address"
          />
          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="Enter your unique password"
          />
          <label>Address</label>
          <textarea
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            placeholder="Tell us where you are located"
          />

          <button type="submit">Register</button>

          <div className="tologinpage">
            <span>Already have an account? </span>
            <Link className="linklogin" to="/login">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
