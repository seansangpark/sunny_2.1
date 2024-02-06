import React, { useRef } from 'react';

const PhoneNumberLink = ({ phoneNumber }) => {
  const phoneNumberRef = useRef();

  return (
    <a
      ref={phoneNumberRef}
      href={`tel:${phoneNumber}`}
    >
      {phoneNumber}
    </a>
  );
};

export default PhoneNumberLink;
