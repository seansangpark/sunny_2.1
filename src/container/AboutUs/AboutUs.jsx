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
        <h1 className='headtext__cormorant'>About Us</h1>
        <p className='p__opensans'>
          Hey there, welcome to Sunny Cleaners in Charlotte! We are offering
          fast and reliable dry cleaning services door to door at your
          convenience. We have same day service as well as top notch pick-up and
          delivery service
        </p>
      </div>

      <div className='app__aboutus-content_clothes flex__center'>
        <img
          src={images.clothes}
          alt='about_clothes'
        />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our Motto</h1>
        <p className='p__opensans'>
          At Sunny Dry Cleaners & Alterations, we radiate positivity through
          unparalleled laundry and garment care. With a focus on excellence,
          environmental responsibility, and customer satisfaction, we brighten
          lives and wardrobes with renewed freshness.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
