import React from 'react';
import './style.scss';
import image1 from '../../image/image1.jpeg';

import { Link } from 'react-router-dom';
const Product = ({ item }) => {
  console.log(item);
  return (
    <Link to={`/singleproduct/${item._id}`} className='productCard'>
      {/* <div className='product_image'> */}
      <img className='product_img' src={image1} alt='image1' />
      {/* </div> */}
      <div className='product_content'>
        <div className='product_title'>{item.name}</div>
        <div className='product_Feedback'>
          <div className='product_rating'>222{item.avgratings} </div>
          <div className='product_review'>({item.numofreviews} reviews)</div>
        </div>
        <div className='product_price'>{item.price}</div>
      </div>
    </Link>
  );
};

export default Product;
