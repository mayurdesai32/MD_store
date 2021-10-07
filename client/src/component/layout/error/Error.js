import React from 'react';
import './style.scss';
const Error = ({ title }) => {
  return (
    <div className='error'>
      <h1 className='error_title'>{title}</h1>

      <button className='button'>
        <i className='fas fa-arrow-left'></i> Go back to homepage
      </button>
    </div>
  );
};

export default Error;
