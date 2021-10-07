import React from 'react';
import banner1 from '../image/banner/banner1.jpg';
const Card = () => {
  return (
    <div className='card'>
      <img src={banner1} alt='product' srcset='' />
      <div className='card-bottom'>
        <p className='card-title'>hello fgdfg fgdfgdf</p>
        <div className='card-rating'>
          <i class='fas fa-star'></i>
          <i class='fas fa-star'></i>
          <i class='fas fa-star'></i>
          <i class='fas fa-star-half-alt'></i>
          <i class='far fa-star'></i>
        </div>
        <p className='card-price'>$500</p>
      </div>
    </div>
  );
};

export default Card;
