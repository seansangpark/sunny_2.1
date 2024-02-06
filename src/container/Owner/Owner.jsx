import React from 'react';

import { SubHeading } from '../../components';
import images from '../../constants/images';
import './Owner.css';

const Owner = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img
        src={images.owner}
        alt='owner_image'
      />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="owner's word" />
      <h1 className='headtext__cormorant'>What we believe in</h1>

      <div className='app__owner-content'>
        <div className='app__owner-content_quote'>
          <img
            src={images.quote}
            alt='quote_image'
          />
          <p className='p__opensans'>
            <b>Life happens, stains don't have to stay.</b>
          </p>
        </div>
        <p className='p__opensans'>
          At Sunny Cleaners, we specialize in transforming clothing mishaps into
          forgotten memories with our advanced cleaning techniques. From
          alterations that fit like a dream to cleaning that restores freshness,
          Pro Cleaners is here to redefine your expectations of clothing care.
        </p>
      </div>

      <div className='app__owner-sign'>
        <p>Eun Park</p>
        <p className='p__opensans'>Owner & Founder</p>
        <img
          src={images.sign}
          alt='sign_image'
        />
      </div>
    </div>
  </div>
);

export default Owner;
