import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

const Signupsucces = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/login");
  }, 6000);
  return (
    <div>
      <Navbar />
      <div className="succeeded">
        <h2>Creating your Account.....</h2>
        <p>
          User Added successfully! you will be automatically redirected to the
          login page.."
        </p>
      </div>
    </div>
  );
};

export default Signupsucces;
