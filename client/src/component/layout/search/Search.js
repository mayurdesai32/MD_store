import React, { useState } from 'react';
import './style.scss';
const Search = () => {
  const [keyword, setKeyword] = useState('');
  const onchangeHandler = (e) => {
    setKeyword(e.target.value);
  };
  const searchHandler = () => {
    console.log(keyword);
  };
  const advanceHandler = () => {
    console.log(keyword);
  };
  return (
    <div className='container'>
      <div className='Search'>
        <input
          className='Search_input'
          type='text'
          value={keyword}
          onChange={onchangeHandler}
        />
        <button className='Search_btn' onClick={searchHandler}>
          Search
        </button>
      </div>
      <div className='Search'>
        {/* <label for='catlog'>Category:</label> */}

        {/* <select id='catlog'>
          <option value='volvo'>Laptop</option>
          <option value='saab'>Mobile</option>
          <option value='watch'>Watch</option>
          <option value='tv' selected>
            TV
          </option>
        </select> */}
        {/* <label for='vol'>Price Range (between 0 and 50):</label> */}
        {/* <input type='range' id='vol' name='vol' min='0' max='50' /> */}
        <button className='Search_btn' onClick={advanceHandler}>
          Advanced Search
        </button>
      </div>
    </div>
  );
};

export default Search;
