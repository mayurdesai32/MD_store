import React from 'react';
import './style.scss';
import image1 from '../../image/image1.jpeg';
import Review from '../../layout/review/Review';
const SingleProduct = () => {
  return (
    <>
      <div className='singleProduct'>
        <div className='product_item'>
          <img className='productImage' src={image1} alt='product image' />
        </div>
        <div className='product_item'>
          <div className='product_title'>
            Trigger Unisex Shoes Puma Black | Everything Black
          </div>
          <div className='product_id'>product id ghgfhgfhfghfhgfhfg</div>
          <hr />
          <div className='product_rating'>
            <span>
              <i class='fas fa-star' />
              <i class='fas fa-star' />
              <i class='fas fa-star' />
              <i class='fas fa-star-half-alt' />
              <i class='far fa-star' />
            </span>
            <span>(review 1)</span>
          </div>
          <hr />
          <div className='product_price'>$3000</div>
          <div className='product_button'>
            <button className='product_add'>-</button>2
            <button className='product_add'>+</button>
            <button className='add_to_cart'>add to cart</button>
          </div>
          <hr />
          <div className='product_status'>
            Status :
            <span style={{ color: 'green', fontWeight: 500 }}> In Stock</span>
          </div>
          <hr />
          <div className='product_desc'>
            <div style={{ fontSize: '18px', fontWeight: 500 }}>
              Description:{' '}
            </div>

            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi,
              sunt.
            </div>
          </div>
          <button className='add_to_cart'>submit Review</button>
        </div>
      </div>
      <div className='reviewpage'>
        <div className='title'>Review</div>
        <hr />
        <div className='review'>
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
