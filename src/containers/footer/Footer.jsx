import React from 'react';
import './footer.css';

const Footer = () => {
    return (
      <div className="footer section__padding">
      <div className="padding">
            <div className="clear-fix">
                <div className="left">
                    <ul className="nave">
                        <li className="nav-item"><a className="nav-link" href="#home">Support</a></li>
                        <li className="nav-item"><a className="nav-link" href="#home">Company</a></li>
                        <li className="nav-item"><a className="nav-link" href="#home">Sell Works</a></li>
                        <li className="nav-item"><a className="nav-link" href="#home">Learn</a></li>
                    </ul>
                </div>
                <div className="right">
                    <ul className="nave">
                        <li className="nav-item"><span className="nav-link">&copy; 2022 Vixcous. All rights reserved.</span></li>
                        <li className="nav-item"><a className="nav-link" href="#home">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#home">Contact</a></li>
                        <li className="nav-item"><a className="nav-link" href="#home">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="#home">Privacy</a></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Footer;