import React, {useState} from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/images/logo.png';


// const Menu = () => (
//   <>
//   <p><a href='#home'>Home</a></p>
//   <p><a href='#home'>Projects</a></p>
//   <p><a href='#home'>Team Work</a></p>
//   <p><a href='#home'>Contact</a></p>
//   </>
// )

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

    return (
      <div className="_navbar" id='home'>
        <div className="navbar-links">
          <div className='navbar-links-logo'>
            <img src={logo} alt="logo"/>
          </div>
          <div className="navbar-links-container">
          <p><a href='#home'>Home</a></p>
          <p><a href='#home'>Projects</a></p>
          <p><a href='#home'>Team</a></p>
          <p><a href='#home'>Contact</a></p>
          </div>
          </div>
          <div className='navbar-sign'>
          <p>Sign in</p>
          <button type='button'>Sign up</button>
          </div>
          <div className="navbar-menu">
          {toggleMenu
          ? <RiCloseLine color='#fff' size={30} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color='#fff' size={30} onClick={() => setToggleMenu(true)}/>
          }
          {toggleMenu && (
            <div className='navbar-menu-container scale-up-center'>
            <div className='navbar-menu-container-links'>
            <p><a href='#home'>Home</a></p>
            <p><a href='#home'>Projects</a></p>
            <p><a href='#home'>Team</a></p>
            <p><a href='#home'>Contact</a></p>
            <div className='navbar-menu-container-links-sign'>
              <p>Sign in</p>
                <button type='button'>Sign up</button>
                  </div>
                </div>
            </div>
          )}
          </div>
        </div>
      
    );
  }
  
  export default Navbar;