import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';

const Navbar = () => {
  const { cartItem } = useSelector((state) => {
    return state.cart;
  });

  return (
    <div className='Navbar'>
      <div className='nav_left'>
        <Link className='nav_link' to='/'>
          <i class='fas fa-store'></i>
          MD Store
        </Link>
      </div>
      <div className='nav_right'>
        <Link to='/all' className='nav_link'>
          <i className='fas fa-search'></i>
        </Link>
        <Link to='/login' className='nav_link'>
          <i class='fas fa-user-circle'></i>
        </Link>
        <Link to='/cart' className='nav_link'>
          {cartItem.length === 0 ? null : cartItem.length}
          <i class='fas fa-shopping-cart'></i>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
