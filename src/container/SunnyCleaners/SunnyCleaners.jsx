import React from 'react';

import { SubHeading, PhoneNumberLink } from '../../components';
import { images } from '../../constants';

const SunnyCleaners = () => {
  const phoneNumber = '+1-704-941-1977';

  const handleAddressClick = (e) => {
    // Prevent the default behavior of the button click
    e.preventDefault();

    // URL for Sunny Dry cleaners & Alterations on Google Maps
    const mapURL = 'https://maps.app.goo.gl/5EzdHRAfmnQESPSS9';

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
      className='app__wrapper section__padding'
      id='contact'
    >
      <div className='app__wrapper_img'>
        <img
          src={images.welcome}
          alt='pro_cleaners'
        />
      </div>

      <div className='app__wrapper_info'>
        <SubHeading title='Come visit our sister store in Pineville' />
        <h1
          className='headtext__cormorant'
          style={{ marginBottom: '3rem' }}
        >
          Pro Dry Cleaners
        </h1>
        <div className='app__wrapper-content'>
          <p
            className='p__opensans'
            style={{ cursor: 'pointer' }}
            onClick={handleAddressClick}
          >
            12744 Lancaster Hwy C, Pineville, NC 28134
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
          <p className='p__opensans'>Mon - Fri: 8:00 aM - 6:30 pM</p>
          <p className='p__opensans'>Saturday: 9:00 aM - 3:00 pM</p>
          <p className='p__opensans'>Sunday: Closed</p>
        </div>
        <button
          href='/'
          type='button'
          onClick={handleAddressClick}
          className='custom__button'
          style={{ marginTop: '2rem' }}
        >
          Visit Us
        </button>
      </div>
    </div>
  );
};

export default SunnyCleaners;
