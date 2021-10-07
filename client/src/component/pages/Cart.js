import React from 'react';
import Title from '../layout/Title';
import banner from '../image/banner/banner1.jpg';
const Cart = () => {
  return (
    <div>
      <div className='main-container'>
        <Title title={'Your Cart'} />
        {/*        
        <div className='cart-flex'>
          <div className='cart-items product-name'>product-name</div>
          <div className='cart-items product-qty'>product-qty</div>
          <div className='cart-items product-price'>product-price</div>
          <div className='cart-items product-remove'>product-remove</div>
        </div> */}
        <hr />
        <hr />
        <div className='cart-flex'>
          <div className='cart-items product-name'>
            <div className='cart-info'>
              <div className='cart-img'>
                <img src={banner} alt='cart' />
              </div>

              <div className='cart-detail'>
                <p>Red printed shirt</p>
              </div>
            </div>
          </div>
          <div className='cart-items product-qty'>
            <div className='singleproduct-cart'>
              <button className='cart-add'>
                <i class='fas fa-plus'></i>
              </button>
              <input className='cart-add' type='number' val={3} />
              <button className='cart-add'>
                <i class='fas fa-minus'></i>
              </button>
            </div>
          </div>
          <div className='cart-items product-price'>$400</div>
          <div className='cart-items product-remove'>
            <i class='fas fa-trash-alt'></i>
          </div>
        </div>
        <hr />
        {/* cart -2 */}
        {/* Order Summary */}
        <div className='Order-summary'>
          <div className='title'>Order Summary</div>
          <hr />
          <div className='order-item'>
            <div>Subtotal:</div>
            <div>5 (Units)</div>
          </div>
          <div className='order-item'>
            <div>est total:</div>
            <div>5 (Units)</div>
          </div>
          <hr />
          <div className='btn'>Check Out</div>
        </div>
        {/*end Order Summary */}
      </div>
    </div>
  );
};

export default Cart;
