import React, { useState } from "react";

import "./artworks.css";

import download from "../../assets/images/download.png";

import { GalleryData } from "./GalleryData";

const Artworks = (props) => {
  //Sticky Top Search Bar
  // const [fix, setFix] = useState(false);
  // function setfixed() {
  //   if (window.scrollY >= 375) {
  //     setFix(true);
  //   } else {
  //     setFix(false);
  //   }
  // }
  // window.addEventListener("scroll", setfixed);

  //search filter new array
  // const searchData = GalleryData.filter((el) => {
  //   if (props.input === "") {
  //     return el;
  //   } else {
  //     return el.description
  //       .toString()
  //       .toLowerCase()
  //       .includes(props.input.toLowerCase());
  //   }
  // });

  return <div>ALL ARTWORKS HERE</div>;
};

export default Artworks;
