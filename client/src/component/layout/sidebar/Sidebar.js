import React from 'react';
import Search from '../search/Search';
import './style.scss';
const Sidebar = () => {
  return (
    <>
      <div className='filter'>
        <div className='filter_method'>
          <h3 className='filter_title'>Search</h3>
          {/* <Search /> */}
          <div>
            <input className='filter_input ' type='text' />
            <i className='fas fa-search'></i>
          </div>
        </div>
        <div className='filter_method'>
          <h3 className='filter_title'>Category</h3>
          <p className='filter_item'>
            <span className='filter_item_title'> clothes</span> (3)
          </p>
          <p className='filter_item'>
            <span className='filter_item_title'> clothes</span> (3)
          </p>
          <p className='filter_item'>
            <span className='filter_item_title'> clothes</span> (3)
          </p>
          <p className='filter_item'>
            <span className='filter_item_title'> clothes</span> (3)
          </p>
          <p className='filter_item'>
            <span className='filter_item_title'> clothes</span> (3)
          </p>
        </div>
        <div className='filter_method'>
          <h3 className='filter_title'>Price</h3>
          <div>
            <input
              type='range'
              className='price_range'
              id='vol'
              name='vol'
              min='0'
              max='50'
            />
          </div>
        </div>
        <div className='filter_method'>
          <h3 className='filter_title'>rating</h3>
          <select className='filter_opt' id='catlog'>
            <option value='5'> 5 Star</option>
            <option value='4'> 4 Star</option>
            <option value='3'> 3 Star</option>
            <option value='2'> 2 Star</option>
            <option value='1'> 1 Star</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
