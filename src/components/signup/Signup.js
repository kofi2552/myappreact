import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const Signup = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [address, setAddress] = useState("");

  //   const navigate = useNavigate();

  // const [errormsg, SetErrormsg] = useState("");
  // const [successmsg, SetSuccessmsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Navbar />
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <p>Create Account</p>
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
          <div>
            <span>Already have an account?</span>
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
