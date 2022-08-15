import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Navbar } from './components';
import {Artworks, Footer, Header } from './containers';


const App = () => {

  //Sticky Top Search Bar
const [fix, setFix] = useState(false);
function setfixed(){
  if (window.scrollY >=375){
    setFix(true)
    } 
    else {
      setFix(false)
    }
  }
  window.addEventListener("scroll", setfixed);



  //Search filter
  const [inputText, setInputText] = useState("");

  const inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    e.preventDefault();
  };
    


  return (
    <div className="App">
      <div className="body">
        <Navbar />
        <Header />
          <div className={fix ? 'col-lg-12 search-bar fixed' : 'search-bar col-lg-12'}>
          <div className="search-section">
              <div className="offset-lg-3 col-lg-6">
                  <div className="searchbar">
                      <div className="search_wrap">
                          <div className="search_box">
                              <input type="text" className="input" placeholder="Search artworks" onChange={(e) => setInputText(e.target.value)}/>
                              
                              <button type="button" className="search-button" onClick={inputHandler}>
                              
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search">
                                      <circle cx="11" cy="11" r="8"></circle>
                                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                  </svg>
                                
                              </button>
                          </div>
                      </div>
                  </div>
            </div>
        </div>
      </div>
  
    </div>

      <Artworks input={inputText}/>
      
      <Footer />
      <a className="go2topbtn" href="#home"><i class="fas fa-arrow-up"></i></a>
    </div>
  );
}

export default App;
