import React from 'react';

const SignIn = () => {
  return (
    <div className='auto-card'>
      <div className='header'>
        <div className='header-title'>Login</div>
      </div>
      <div className='autocard-body'>
        <div className='autocard-input'>
          <label htmlFor=''>Name:</label>
          <input type='text' />
        </div>
        <div className='autocard-input'>
          <label htmlFor=''>Password:</label>
          <input type='password' />
        </div>
        <div className='password-link'>
          <a href='http://'>Forgot Password</a>
        </div>

        <div className='autocard-input'>
          <button className='autocard-btn'> login</button>
        </div>
      </div>
      <div className='signup-link'>
        <span>Dont have account ? </span>

        <a href='http://'>Signup Now</a>
      </div>
    </div>
  );
};

export default SignIn;
