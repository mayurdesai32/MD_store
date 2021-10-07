import React from 'react';
import './style.scss';
import imageProduct from '../../image/image1.jpeg';
const Cardpage = () => {
  return (
    <div>
      <table className='table'>
        <tr className='table_header'>
          <th>product</th>
          <th>quantity</th>
          <th>subtotal</th>
          <th>remove</th>
        </tr>
        <tr className='table_item'>
          <td className='table_item_product'>
            <img
              src={imageProduct}
              className='imageProduct'
              alt='imageProduct'
            />
            <div className='table_item_title'>
              {' '}
              tv gdfgdfgdfgdfgdf gfdfgdfg dfdsled
            </div>
          </td>
          <td>
            <button className='product_add'>+</button> 3
            <button className='product_add'>-</button>
          </td>
          <td>₹ 4000</td>
          <td>
            <i class='fas fa-trash-alt'></i>
          </td>
        </tr>

        <tr className='table_item'>
          <td className='table_item_product'>
            <img
              src={imageProduct}
              className='imageProduct'
              alt='imageProduct'
            />
            <div className='table_item_title'> tv led</div>
          </td>
          <td>
            <button className='product_add'>+</button> 3
            <button className='product_add'>-</button>
          </td>
          <td>₹ 4000</td>
          <td>
            <i class='fas fa-trash-alt'></i>
          </td>
        </tr>
      </table>

      <div className='cart_total'>
        <div>
          <div className='checkout_detail'>
            <div className='checkout_title'>Gross Total </div>
            <div className='checkout_price'>₹ 4000</div>
          </div>
          <div className='checkout_detail'>
            <div className='checkout_title'>Gross Total </div>
            <div className='checkout_price'>₹ 4000</div>
          </div>
          <hr />
          <div className='Checkout1'>
            <button className='CheckOut_btn'>CheckOut</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardpage;
