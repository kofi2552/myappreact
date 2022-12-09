import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errormsg, SetErrormsg] = useState("");
  const [successmsg, SetSuccessmsg] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        SetSuccessmsg("Login successful...");
        setEmail("");
        setPassword("");
        setTimeout(() => {
          //   SetSuccessmsg("");
          navigate("/home");
        }, 0);
      })
      .catch((error) => {
        console.log(error.message);
        if (error.message == "Firebase: Error (auth/invalid-email).") {
          SetErrormsg("Please fill all the required fields!");
        }
        if (error.message == "Firebase: Error (auth/user-not-found).") {
          SetErrormsg("Email not found, try another email account!");
        }
        if (error.message == "Firebase: Error (auth/wrong-password).") {
          SetErrormsg("Password is incorrect!");
        }
      });
  };

  return (
    <div className="body">
      <Navbar />
      <div className="login-container">
        <form className="login-form">
          <p>Sign in</p>

          {successmsg && <div className="success-msg">{successmsg}</div>}
          {errormsg && <div className="error-msg">{errormsg}</div>}

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

          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>

          <div className="tologinpage">
            <span>Don't have an account? </span>
            <Link className="linksignup" to="/signup">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
