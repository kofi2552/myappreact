import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { useEffect } from "react";
import { storage, auth, db } from "../../firebaseConfigs/firebaseConfig";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import "./Sell.css";
// import Sellsuccess from "./Sellsuccess";

const Sell = () => {
  const [producttitle, setProductTitle] = useState("");
  const [producttype, setProductType] = useState("");
  const [productdesc, setProductDesc] = useState("");
  const [filetype, setFileType] = useState("");
  const [customersupport, setCustomerSupport] = useState("");
  const [price, setPrice] = useState("");
  const [unlockcode, setUnlockCode] = useState("");
  const [productlink, setProductLink] = useState("");
  const [productimage, setProductImage] = useState("");

  const [imageError, setimageError] = useState("");
  const [successMsg, setsuccessMsg] = useState("");
  const [uploadError, setUploadError] = useState("");

  //Identify Cuurent User
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

  //File upload validation
  const types = ["image/jpg", "image/jpeg", "image/png", "image/PNG"];

  const handleProductImg = (e) => {
    e.preventDefault();
    let selectedFile = e.target.files[0];

    if (selectedFile) {
      if (selectedFile && types.includes(selectedFile.type)) {
        setProductImage(selectedFile);
        setimageError("");
      } else {
        setProductImage(null);
        setimageError("Please select a valid image file (jpg/png)");
      }
    } else {
    }
  };

  const navigate = useNavigate();

  //Adding product Data to Database
  const handleAddData = (e) => {
    e.preventDefault();
    const storageRef = ref(
      storage,
      `product-images${producttype.toUpperCase()}/${Date.now()}`
    );

    uploadBytes(storageRef, productimage).then(() => {
      getDownloadURL(storageRef).then((url) => {
        addDoc(collection(db, `products-${producttype.toUpperCase()}`), {
          producttitle,
          producttype,
          productdesc,
          filetype,
          customersupport,
          price,
          unlockcode,
          productlink,
          productimage: url,
        })
          .then(() => {
            setsuccessMsg("New product added successfully!");
            setTimeout(() => {
              setsuccessMsg("");
              navigate("/sellsuccess");
            }, 100);
          })
          .catch((error) => {
            setUploadError(error.message);
          });
      });
    });
  };

  return (
    <div>
      <Navbar />
      {loggeduser && loggeduser[0].email == "kofi@gmail.com" ? (
        <div>
          <form className="sell-form" onSubmit={handleAddData}>
            <p>Add Data</p>
            {successMsg && <div className="success-msg">{successMsg}</div>}
            {uploadError && <div className="error-msg">{uploadError}</div>}
            <div className="data-row">
              <label>Product Title</label>
              <input
                type="text"
                onChange={(e) => {
                  setProductTitle(e.target.value);
                }}
                placeholder="Title of the product"
              />
            </div>
            <div className="data-row">
              <label>Product Description</label>
              <textarea
                type="text"
                onChange={(e) => {
                  setProductDesc(e.target.value);
                }}
                placeholder="Describe your product or asset"
              />
            </div>
            <div className="data-row">
              <label>File type</label>
              <textarea
                type="text"
                onChange={(e) => {
                  setFileType(e.target.value);
                }}
                placeholder="Type of downloadable file format"
              />
            </div>
            <div className="data-row">
              <label>Product Type</label>
              <input
                type="text"
                onChange={(e) => {
                  setProductType(e.target.value);
                }}
                placeholder="specify"
              />
            </div>
            <div className="data-row">
              <label>Customer Support Details</label>
              <textarea
                type="text"
                onChange={(e) => {
                  setCustomerSupport(e.target.value);
                }}
                placeholder="How can a buyer reach you?"
              />
            </div>
            <div className="data-row">
              <label>Product Price</label>
              <input
                type="text"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                placeholder="Enter the price or range"
              />
            </div>
            <div className="data-row">
              <label>Upload Product Image</label>
              <input onChange={handleProductImg} type="file" />
              {imageError && (
                <div>
                  <div className="error-msg">{imageError}</div>
                </div>
              )}
            </div>

            <div className="data-row">
              <label>Product Download Link</label>
              <input
                type="text"
                onChange={(e) => {
                  setProductLink(e.target.value);
                }}
                placeholder="Copy & Paste link for download"
              />
            </div>

            <div className="data-row">
              <label>Set Product Unlock Code</label>
              <input
                type="password"
                onChange={(e) => {
                  setUnlockCode(e.target.value);
                }}
                placeholder="Set a password to unlock this product"
              />
            </div>

            <button type="submit">Add</button>
          </form>
        </div>
      ) : (
        <div className="sell-body">
          <div className="sell-container">
            <h2>Already have an Account?</h2>
            <Link to="/login">Login</Link> now or{" "}
            <Link to="/login">Signup</Link> with us and start selling your
            creative works
          </div>
        </div>
      )}
    </div>
  );
};

export default Sell;
