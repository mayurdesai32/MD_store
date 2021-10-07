import React from 'react';

const ChangePassword = () => {
  return (
    <div className='account ChangePassword'>
      <div className='auto-card'>
        <div className='header'>
          <div className='header-title'>Reset Password</div>
        </div>
        <div className='autocard-body'>
          <div className='autocard-input'>
            <label htmlFor=''>Old-Password:</label>
            <input type='password' />
          </div>
          <div className='autocard-input'>
            <label htmlFor=''>Password:</label>
            <input type='password' />
          </div>
          <div className='autocard-input'>
            <label htmlFor=''>Confirm-Password:</label>
            <input type='password' />
          </div>

          <div className='autocard-input'>
            <button className='autocard-btn'> Reset Password</button>
          </div>
        </div>
        <div className='signup-link'></div>
      </div>
    </div>
  );
};

export default ChangePassword;
