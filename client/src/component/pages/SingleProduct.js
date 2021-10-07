import React from 'react';
import banner from '../image/banner/banner1.jpg';
import Reviews from '../layout/Reviews';
import Title from '../layout/Title';
import Card from '../layout/Card';
const SingleProduct = () => {
  return (
    <div className='singleproduct'>
      <div className='main-container'>
        <div className='row'>
          <div className='col-2'>
            <img src={banner} className='product-pic' alt='img' />
            <div className='product-images'>
              <div className='row'>
                <div className='productimg'>
                  <img src={banner} alt='img' />
                </div>
                <div className='productimg'>
                  <img src={banner} alt='img' />
                </div>
                <div className='productimg'>
                  <img src={banner} alt='img' />
                </div>
                <div className='productimg'>
                  <img src={banner} alt='img' />
                </div>
              </div>
            </div>
          </div>
          <div className='col-2'>
            <div className='singleproduct-detail'>
              <div className='singleproduct-title'>
                Bose QuietComfort 35 II Wireless Bluetooth Headphones
              </div>
              <div className='sub-title'>
                Product # 6018db209039dc5665c18fa2
              </div>
              <hr className='line' />
              <div className='rating'>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star-half-alt'></i>
                <i class='far fa-star'></i>
                <span> (112 Reviews)</span>
              </div>
              <hr className='line' />
              {/* <p>Home/gdfs</p> */}
              <h3>price $400</h3>
              <div className='singleproduct-cart'>
                <button className='cart-add'>
                  <i class='fas fa-plus'></i>
                </button>
                <input className='cart-add' type='number' val={3} />
                <button className='cart-add'>
                  <i class='fas fa-minus'></i>
                </button>
                <button className='btn'> Add to Cart</button>
              </div>
              <hr className='line' />
              Status: In Stock
              <hr className='line' />
              <div className='desc-title'>Description:</div>
              <div className='desc-detail'>
                What happens when you clear away the noisy distractions of the
                world? Concentration goes to the next level. You get deeper into
                your music, your work, or whatever you want to focus on. That’s
                the power of Bose QuietComfort 35 wireless headphones II. Put
                them on and get closer to what you’re most passionate about. And
                that’s just the beginning. QuietComfort 35 wireless headphones
                II are now enabled with Bose AR
              </div>
              <hr className='line' />
              Sold by: Amazon
              <hr className='line' />
            </div>
          </div>
        </div>
        <div className='review'>
          <div className='title'>Reviews:</div>
          {/* <Title title={'other review'} /> */}
          <hr className='line' />
          <Reviews />
        </div>
      </div>
      <div className='related-product'>
        <Title title={'related-product'} />
        <div className='main-container'>
          <div className='row'>
            <div className='col-4'>
              <Card />
            </div>
            <div className='col-4'>
              <Card />
            </div>
            <div className='col-4'>
              <Card />
            </div>
            <div className='col-4'>
              <Card />
            </div>
            <div className='col-4'>
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
