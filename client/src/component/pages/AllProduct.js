import React from 'react';
import Card from '../layout/Card';
import Title from '../layout/Title';
import Sidebar from '../layout/Sidebar';
const AllProduct = () => {
  return (
    <div className='AllProduct'>
      <Sidebar />
      <div className='main-container'>
        <Title title={'all product'} />

        {/* <div className='row-title'>
          <div className='main-title'>All Products</div>
          <select name='' id=''>
            <option value=''>sort By Name</option>
            <option value=''>Sort By price</option>
            <option value=''>Sort By New</option>
          </select>
        </div> */}
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
          <div className='col-4'>
            <Card />
          </div>
        </div>
      </div>
      <div className='pagination'>
        <div className='main-container'>
          <span>prev</span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>next</span>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
