import React from "react";
import "./Home.css";

import Navbar from "../navbar/Navbar";
import { Artworks, Footer, Header } from "../../containers";

const Home = () => {
  //Search filter for text input section
  // const [inputText, setInputText] = useState("");

  // const onSearch = (e) => {
  //   var lowerCase = e.target.value.toLowerCase();
  //   setInputText(lowerCase);
  //   e.preventDefault();
  // };

  // const onSearch = () => {
  //   console.log(1);
  // };

  return (
    <div className="App">
      <div className="body">
        <Navbar />
        <Header />
        <Artworks />
        <Footer />
      </div>
      <a className="go2topbtn" href="#home">
        <i class="fas fa-arrow-up"></i>
      </a>
    </div>
  );
};

export default Home;
