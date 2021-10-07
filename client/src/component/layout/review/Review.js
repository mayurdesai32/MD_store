import React from 'react';
import './style.scss';
import user from '../../image/user.png';

const Review = ({ name, comment, rating }) => {
  return (
    <div className='review_card'>
      <div>
        <img className='reviewer_pic' src={user} alt='user' />
      </div>
      <div className='reviewer_name'>{name}</div>

      <div className='reviewer_rating'>
        <i className='fas fa-star' />
        <i className='fas fa-star' />
        <i className='fas fa-star' />
        <i className='fas fa-star-half-alt' />
        <i className='far fa-star' />
      </div>

      {comment && (
        <div className='reviewer_comment'>
          <span className='comment'>Comment:</span> {comment}
        </div>
      )}
    </div>
  );
};

export default Review;
