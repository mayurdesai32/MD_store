import React from 'react';
import './style.scss';
import user from '../../image/user.png';
const Review = () => {
  return (
    <div className='review_card'>
      <div>
        <img className='reviewer_pic' src={user} alt='user' />
      </div>
      <div>name</div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        deleniti ad explicabo.
      </div>
    </div>
  );
};

export default Review;
