import React from 'react';
import { images } from '../../constants';
import { PhoneNumberLink } from '../../components';
import './Footer.css';

const Footer = () => {
  const phoneNumber = '+1-704-551-6222';

  const handleAddressClick = (e) => {
    // Prevent the default behavior of the button click
    e.preventDefault();

    // URL for Sunny Dry cleaners & Alterations on Google Maps
    const mapURL = 'https://maps.app.goo.gl/b6fyzNiCgYAFEp1G7';

    // Check if the user is on an iPhone
    const isiPhone = /iPhone|iPod/.test(navigator.userAgent);

    // Check if the user is on an Android device
    const isAndroid = /Android/.test(navigator.userAgent);

    // Open the URL based on the client machine and browser
    if (isiPhone && navigator.standalone) {
      // If iPhone user with Google Maps app
      window.location.href = `maps://maps.google.com/maps?daddr=${mapURL}`;
    } else if (
      isAndroid &&
      window.navigator.userAgent.toLowerCase().indexOf('chrome') > -1
    ) {
      // If Android user with Google Maps app and using Chrome browser
      window.location.href = `https://maps.google.com/maps?daddr=${mapURL}`;
    } else {
      // For other devices or browsers, use the anchor tag to open in a new tab
      window.open(mapURL, '_blank');
    }
  };

  return (
    <div
      className='app__bg app__footer section__padding'
      id='login'
    >
      <div className='app__footer-links'>
        <div className='app__footer-links_contact'>
          <h1 className='app__footer-headtext'>Contact Us</h1>
          <p
            className='p__opensans'
            style={{ cursor: 'pointer' }}
            onClick={handleAddressClick}
          >
            7631 Sharon Lakes Rd Ste. O, Charlotte, NC 28210
          </p>
          <br />
          <p className='p__opensans'>
            <PhoneNumberLink phoneNumber={phoneNumber} />
          </p>
        </div>

        <div className='app__footer-links_logo'>
          <img
            src={images.sunny_logo}
            alt='footer_logo'
          />
          <p className='p__opensans'>
            Now Offering: Same Day Service & Pick-Up and Delivery
          </p>
        </div>

        <div className='app__footer-links_work'>
          <h1 className='app__footer-headtext'>Working Hours</h1>
          <p className='p__opensans'>Monday-Friday:</p>
          <p className='p__opensans'>6:30 aM - 6:00 pM</p>
          <p className='p__opensans'>Saturday:</p>
          <p className='p__opensans'>9:00 aM- 3:00 pM</p>
        </div>
      </div>

      <div className='footer__copyright'>
        <p className='p__opensans'>
          Copyright © 2023 Spark Design. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
