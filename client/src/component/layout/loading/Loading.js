import React from 'react';
import './style.scss';
import loader from '../../image/loader.gif';
const Loading = () => {
  return (
    <div className='loading'>
      <img className='loading_image' src={loader} alt='loading' />
    </div>
  );
};

export default Loading;
