import React from 'react';
import Title from '../layout/Title';
const MyOrder = () => {
  return (
    <div className='myorder'>
      <Title title={'MyOrder'} />
      <div className='main-container'>
        <div className='row color'>
          <div className='orderid'>orderid</div>
          <div className='status'>status</div>
          <div className='itemqty'>itemqty</div>
          <div className='amt'>amt</div>
          <div className='action'>action</div>
        </div>
        {/* start */}
        <br />
        <div className='row'>
          <div className='orderid'>orderidfsgfgdfgdfgdfgdfggd</div>
          <div className='status'>processing</div>
          <div className='itemqty'>itemqty</div>
          <div className='amt'>amt</div>
          <div className='action'>
            <i class='fas fa-edit'></i>
          </div>
        </div>
        <br />
        <hr />
        <br />
        {/* end */}
        {/* start */}
        <div className='row'>
          <div className='orderid'>orderidfsgfgdfgdfgdfgdfggd</div>
          <div className='status'>processing</div>
          <div className='itemqty'>2</div>
          <div className='amt'>$655</div>
          <div className='action'>
            <i class='fas fa-edit'></i>
          </div>
        </div>
        <br />
        <hr />
        <br />
        {/* end */}
      </div>
    </div>
  );
};

export default MyOrder;
