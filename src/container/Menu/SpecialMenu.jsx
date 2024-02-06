import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div
    className='app__specialMenu flex__center section__padding'
    id='services'
  >
    <div className='app__specialMenu-title'>
      <SubHeading title='Offering SAME DAY & PICK-UP and DELIVERY' />
      <h1 className='headtext__cormorant'>Online Special Deal</h1>
    </div>

    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMenu-menu_heading'>Dry Cleaning</p>
        <div className='app__specialMenu_menu_items'>
          {data.dry_cleanings.map((item, index) => (
            <MenuItem
              key={item.title + index}
              title={item.title}
              price={item.price}
              tags={item.tags}
            />
          ))}
        </div>
      </div>

      <div className='app__specialMenu-menu_img'>
        <img
          src={images.google_map1}
          alt='menu img'
        />
        <img
          src={images.pro2}
          alt='menu img'
        />
        <img
          src={images.inside}
          alt='menu img'
        />
        <img
          src={images.pro4}
          alt='menu img'
        />
        <img
          src={images.pro3}
          alt='menu img'
        />
      </div>

      <div className='app__specialMenu-menu_cocktails flex__center'>
        <p className='app__specialMenu-menu_heading'>Repairs & Alterations</p>
        <div className='app__specialMenu_menu_items'>
          {data.repairs.map((item, index) => (
            <MenuItem
              key={item.title + index}
              title={item.title}
              price={item.price}
              tags={item.tags}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SpecialMenu;
