import React from 'react';
import img from '../image/banner/banner1.jpg';
const Profile = () => {
  return (
    <div className='profile'>
      <div className='main-container'>
        <div className='row'>
          <div className='col-2'>
            <div className='profile-pic'>
              <h3>My Profile</h3>
              <img src={img} alt='profile' />
              <div>
                <button className='btn'>Edit Profile</button>
              </div>
            </div>
          </div>
          <div className='col-2'>
            <div className='profile-detail'>
              <div className='detail'>
                <div className='detail-title'>Name:</div>
                <div className='detail-ans'>Mayur Desai</div>
              </div>
              <div className='detail'>
                <div className='detail-title'>Phone No:</div>
                <div className='detail-ans'>7745811201</div>
              </div>
              <div className='detail'>
                <div className='detail-title'>Email:</div>
                <div className='detail-ans'>msdesai32@gmail.com</div>
              </div>
              <div className='detail'>
                <div className='detail-title'>Joined on</div>
                <div className='detail-ans'>23/05/2021</div>
              </div>
              <div>
                <button>My Order</button>
              </div>
              <div>
                <button>Change Password</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
