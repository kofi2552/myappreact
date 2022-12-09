import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Navbar from "./components/navbar/Navbar";
// import Footer from "./containers/footer/Footer";
import { Contact, Projects } from "./components";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Signupsuccess from "./components/signup/Signupsuccess";
import Home from "./components/home/Home";
import Team from "./components/team/Team";
import Cart from "./components/cart/Cart";
import Profile from "./components/profile/Profile";
import About from "./components/about/About";
import Learn from "./components/learn/Learn";
import Privacy from "./components/privacy/Privacy";
import Sell from "./components/sell/Sell";
import Sellsuccess from "./components/sell/Sellsuccess";
import Services from "./components/services/Services";
import Products from "./components/artworks/Products";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import E404page from "./components/errorpg/E404page";

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

        <Route exact path="/signupsuccess" element={<Signupsuccess />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/profile" element={<Profile />} />

        <Route exact path="/about" element={<About />} />
        <Route exact path="/learn" element={<Learn />} />
        <Route exact path="/privacy" element={<Privacy />} />
        <Route exact path="/sell" element={<Sell />} />
        <Route exact path="/sellsuccess" element={<Sellsuccess />} />
        <Route exact path="/services" element={<Services />} />

        <Route
          exact
          path="/product-type/assets"
          element={<Products type={"Assets"} />}
        />
        <Route
          exact
          path="/product-type/video"
          element={<Products type={"Video"} />}
        />
        <Route
          exact
          path="/product-type/graphics"
          element={<Products type={"Graphics"} />}
        />
        <Route
          exact
          path="/product-type/ui"
          element={<Products type={"Ui"} />}
        />
        <Route
          exact
          path="/product-type/craft"
          element={<Products type={"Craft"} />}
        />
        <Route
          exact
          path="/product-type/african"
          element={<Products type={"African"} />}
        />

        <Route path="*" element={<E404page />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
