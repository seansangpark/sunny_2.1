import React from 'react';

import { SubHeading, Button } from '../../components';
import images from '../../constants/images';
import './Header.css';

const Header = () => (
  <div
    className='app__header app__wrapper section__padding'
    id='home'
  >
    <div className='app__wrapper_info'>
      <SubHeading title='SUNNY DRY CLEANERS & ALTERATIONS' />
      <h1 className='app__header-h1'>
        Introducing A Ray of Sunshine in Laundry Care
      </h1>
      <p
        className='p__opensans'
        style={{ margin: '2rem 0' }}
      >
        NOW OFFERING!! Same Day Service & Pick-up and Delivery
      </p>
      <Button />
    </div>

    <div className='app__wrapper_img'>
      <img
        src={images.sunny2}
        alt='header_img'
      />
    </div>
  </div>
);

export default Header;
