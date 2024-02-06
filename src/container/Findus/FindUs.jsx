import React from 'react';

import { SubHeading, PhoneNumberLink, Button } from '../../components';
import { images } from '../../constants';

const FindUs = () => {
  const phoneNumber = '+1-704-551-6222';

  const handleAddressClick = (e) => {
    // Prevent the default behavior of the button click
    e.preventDefault();

    // URL for Sunny Dry cleaners & Alterations on Google Maps
    const mapURL = 'https://maps.app.goo.gl/A9jKMurczoSZnrYS7';

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
      className='app__bg app__wrapper section__padding'
      id='contact'
    >
      <div className='app__wrapper_info'>
        <SubHeading title='Contact' />
        <h1
          className='headtext__cormorant'
          style={{ marginBottom: '3rem' }}
        >
          Find Us
        </h1>
        <div className='app__wrapper-content'>
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
          <p
            className='p__cormorant'
            style={{ color: '#DCCA87', margin: '2rem 0' }}
          >
            Opening Hours
          </p>
          <p className='p__opensans'>Mon - Fri: 6:30 aM - 6:00 pM</p>
          <p className='p__opensans'>Saturday: 9:00 aM - 3:00 pM</p>
          <p className='p__opensans'>Sunday: Closed</p>
        </div>
        <Button />
      </div>

      <div className='app__wrapper_img'>
        <img
          src={images.sunny1}
          alt='finus_img'
        />
      </div>
    </div>
  );
};

export default FindUs;
