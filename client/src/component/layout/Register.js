import React from 'react';

const Register = () => {
  return (
    <div className='auto-card'>
      <div className='header'>
        <div className='header-title'>Register</div>
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

        <div className='autocard-input'>
          <label htmlFor=''>Comfirm-Password:</label>
          <input type='password' />
        </div>
        <div className='autocard-input'>
          <button className='autocard-btn'>Register</button>
        </div>
      </div>
      <div className='signup-link'>
        <span>Already have an account ? </span>

        <a href='http://'>SignIn</a>
      </div>
    </div>
  );
};

export default Register;
