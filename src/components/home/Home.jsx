import React, { useState } from "react";
import "./Home.css";
// import { Link } from "react-router-dom";
import Header from "../../containers/header/Header";
// import Navbar from "../navbar/Navbar";
// import Artworks from "../../components/artworks/Artworks";
import { useEffect } from "react";
import { auth, db } from "../../firebaseConfigs/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import AllProducts from "../artworks/products/AllProducts";

const Home = () => {
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
  console.log(loggeduser);

  //  Display logged in user's email
  // <p>{loggeduser ? loggeduser[0].email : "No user logged in"}</p>;

  return (
    <div className="App">
      <div id="home">
        <Header />
        <div className="section__padding section__margin mt-10">
          <AllProducts type={"Assets"} />
        </div>

        <div>
          <a className="go2topbtn" href="#home">
            <i className="fas fa-arrow-up"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
