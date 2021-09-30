import React from 'react';
import './style.scss';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_left'>
        <div className='left_title'>DOWNLOAD OUR APP</div>
        <div className='left_item'>
          Download App for Android and IOS mobile phone
        </div>
        <div>image</div>
        <div>image</div>
      </div>
      <div className='footer_middle'>
        <div className='main_title'>MD STORE.</div>
        <div className='sub_title'>High Quality is our first priority</div>
        <div className='copyright'>Copyright 2021 mayurdesai</div>
      </div>
      <div className='footer_right'>
        <div className='title'>Follow Us</div>
        <div className='item'>Instagram</div>
        <div className='item'>Youtube</div>
        <div className='item'>Facebook</div>
      </div>
    </div>
  );
};

export default Footer;
