import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Contact, Projects } from "./components";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Home from "./components/home/Home";
import Team from "./components/team/Team";
import Cart from "./components/cart/Cart";
import Profile from "./components/profile/Profile";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import E404page from "./components/E404page";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route path="*" element={<E404page />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
