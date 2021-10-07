import React from 'react';
import banner from '../image/banner/banner1.jpg';
const Landing = () => {
  return (
    <div className='main-container'>
      <div className='Landing'>
        <div className='row'>
          <div className='col-2'>
            <h1>hgfhfg gfdg sale 30%</h1>
            <p>hfhgfhgfhgfhgfhgfhgfhgfghgf hgfhgfh ghdfdfg</p>
            <button className='btn'> Expore now</button>
          </div>
          <div className='col-2'>
            <img src={banner} className='banner' alt='banner' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
