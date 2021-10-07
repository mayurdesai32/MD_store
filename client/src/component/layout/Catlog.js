import React from 'react';

const Catlog = ({ item }) => {
  return (
    <div
      className='catlog-1'
      style={{ backgroundImage: `url(${item.imgUrl})` }}
    >
      <div className='subcat'>
        <h3>{item.title}</h3>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default Catlog;
