import React from 'react';
import './style.scss';
import Product from '../../layout/product/Product';
const Homepage = () => {
  return (
    <div className='Homepage'>
      {/* landing page */}
      <div className='landing_page'>
        <div className='landing_page_content'>
          <div className='main_title'>Welcome To MD STORE</div>
          <div className='sub_title'>Find Amazing Products</div>
          <div className='flexBox'>
            <button className='btn_landing'>Scroll</button>
          </div>
        </div>
      </div>
      {/* items list */}
      <div className='list_container'>
        <div className='main_header'>
          <div className='title'>Featured Products</div>
          <hr />
        </div>
        <div className='main_body'>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
