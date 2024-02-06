import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img
          src={images.sunny_logo}
          alt='app logo'
        />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'>
          <a href='#home'>Home</a>
        </li>
        <li className='p__opensans'>
          <a href='#about'>About</a>
        </li>
        <li className='p__opensans'>
          <a href='#services'>Services</a>
        </li>
        <li className='p__opensans'>
          <a href='#reviews'>Reviews</a>
        </li>
        <li className='p__opensans'>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
      {/* <div className='app__navbar-login'>
        <a
          href='#login'
          className='p__opensans'
        >
          Log In / Register
        </a>
        <div />
        <a
          href='/'
          className='p__opensans'
        >
          Schedule a Drop Off
        </a>
      </div> */}
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu
          color='#2f6550'
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineClose
              fontSize={27}
              className='overlay__close'
              onClick={() => setToggleMenu(false)}
            />
            <ul
              className='app__navbar-smallscreen_links'
              onClick={() => setToggleMenu(false)}
            >
              <li className='p__opensans'>
                <a href='#home'>Home</a>
              </li>
              <li className='p__opensans'>
                <a href='#about'>About</a>
              </li>
              <li className='p__opensans'>
                <a href='#services'>Services</a>
              </li>
              <li className='p__opensans'>
                <a href='#reviews'>Reviews</a>
              </li>
              <li className='p__opensans'>
                <a href='#contact'>Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
