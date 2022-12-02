import React, { useState } from "react";
import "./Home.css";
import Navbar from "../navbar/Navbar";
import { Artworks, Footer, Header } from "../../containers";
import { useEffect } from "react";
import { auth, db } from "../../firebaseConfigs/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const Home = () => {
  function GetCurrentUser() {
    const [user, setUser] = useState("");
    const usersCollectionRef = collection(db, "users");
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

  return (
    <div className="App">
      <div className="body">
        <Navbar />
        <Header />
        <Artworks />
        <Footer />
        <a className="go2topbtn" href="#home">
          <i class="fas fa-arrow-up"></i>
        </a>
      </div>
    </div>
  );
};

export default Home;
