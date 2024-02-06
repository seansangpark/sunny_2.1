import React from 'react';

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className='p__cormorant'>{title}</p>
    <div
      class='white-line'
      style={{ border: 'none', borderTop: '1px solid black', margin: '10px 0' }}
    ></div>
  </div>
);

export default SubHeading;
