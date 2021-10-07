import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  return (
    <div className='main-container'>
      <div className=' navbar'>
        <div className='nav-left'>
          <NavLink className='nav-logo' to='/'>
            <i class='fas fa-store'></i> MD Store
          </NavLink>
        </div>
        <div className='nav-right'>
          <ul>
            <li>
              <NavLink className='nav-link' to='/'>
                {/* <i className='fas fa-search'></i> */}
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className='nav-link' to='/all'>
                {/* <i className='fas fa-search'></i> */}
                Products
              </NavLink>
            </li>

            <li>
              <NavLink className='nav-link' to='/all'>
                {/* <i className='fas fa-search'></i> */}
                About
              </NavLink>
            </li>

            <li>
              <NavLink className='nav-link' to='/login'>
                {/* <i class='fas fa-user-circle'></i> */}
                Account
              </NavLink>
            </li>
            <li>
              <NavLink className='nav-link' to='/cart'>
                <i class='fas fa-shopping-cart'> 3</i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
