import React from 'react';

import images from '../../constants/images';
import './AboutUs.css';

const AboutUs = () => (
  <div
    className='app__aboutus app__bg flex__center section__padding'
    id='about'
  >
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>Wash and Fold</h1>
        <p className='p__opensans'>
          Hey there, welcome to Sunny Cleaners in Charlotte! We are now offering
          Wash and Fold service. Come visit us now and get your laundry done
          easy with most affordable price in all Charlotte!
        </p>
      </div>

      <div className='app__aboutus-content_clothes flex__center'>
        <img
          src={images.clothes}
          alt='about_clothes'
        />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>FREE Pick Up and Delivery</h1>
        <p className='p__opensans'>
          We are now offering fast and reliable dry cleaning services door to
          door at your convenience. We have same day service as well as top
          notch pick-up and delivery service. Call us now!
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
