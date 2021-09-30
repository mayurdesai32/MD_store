import React from 'react';
import './style.scss';
import image1 from '../../image/image1.jpeg';
// import { BsStarFill } from 'react-icons/all';
const Product = () => {
  return (
    <div className='productCard'>
      {/* <div className='product_image'> */}
      <img className='product_img' src={image1} alt='image1' />
      {/* </div> */}
      <div className='product_content'>
        <div className='product_title'>Lorem ipsum dolor gdg sit amet.</div>
        <div className='product_Feedback'>
          <div className='product_rating'>222</div>
          <div className='product_review'>(1 reviews)</div>
        </div>
        <div className='product_price'>Rs 400</div>
      </div>
    </div>
  );
};

export default Product;
