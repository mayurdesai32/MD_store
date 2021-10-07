import React from 'react';

const Forgotpassword = () => {
  return (
    <div className='auto-card'>
      <div className='header'>
        <div className='header-title'>Forgot Password</div>
      </div>
      <div className='autocard-body'>
        <div className='autocard-input'>
          <label htmlFor=''>Email:</label>
          <input type='email' />
        </div>
        <div className='autocard-input'>
          <button className='autocard-btn'>Send Email </button>
        </div>
      </div>
      <div className='signup-link'>
        <span>Dont have account ? </span>

        <a href='http://'>Signup Now</a>
      </div>
    </div>
  );
};

export default Forgotpassword;
