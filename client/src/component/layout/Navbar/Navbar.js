import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='nav_left'>
        <div>MD Store</div>
      </div>
      <div className='nav_right'>
        <div className='nav_link'>se</div>
        <div className='nav_link'>user</div>
        <div className='nav_link'>cart</div>
      </div>
    </div>
  );
};

export default Navbar;
