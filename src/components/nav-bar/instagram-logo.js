import React from 'react';

import InstagramIcon from 'images/instagram-logo2.png';

export default function InstagramLogo() {
  return (
    <a
      href="https://www.instagram.com/wordsbykailey/"
      className="instagramLogo"
      style={{ paddingBottom: '5px' }}
    >
      <img style={{ width: '15px', height: '15px' }} src={InstagramIcon} alt="logo" />
    </a>
  );
}
