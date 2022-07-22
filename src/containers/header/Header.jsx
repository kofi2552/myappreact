import React from 'react';
import './header.css';

const Header = () => {
    return (
      <div className="header section__padding">
        <div class="container-flui">
          <div class="row">
              <div class="col-lg-12" id='head'>
                  <div className='header-content'>
                      <div className="banner-content">
                          <h3 className="subheading text-white">
                            Get quality downloads, yet pay less
                            Pay less for quality downloads!
                          </h3>
                          <a className='--normal-button' href="#Artworks">Check Pricing</a>
                      </div>
                  </div>
              </div>
              <div class="col-lg-12" id='search'>
              <div class="search-section">
                    <div class="offset-lg-3 col-lg-6">
                        <div class="searchbar">
                            <div class="search_wrap">
                                <div class="search_box">
                                    <input type="text" class="input" placeholder="Search all artworks"/>
                                    <div class="search-button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                  </div>
                  
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
  
  export default Header;