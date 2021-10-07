import React from 'react';
import Title from '../layout/Title';
const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Title title={'Dashboard'} />
      <div className='main-container'>
        <div className='total-price'>
          <h3>Total Price</h3>
          <p>$600</p>
        </div>

        <div className='row-dashbord'>
          <div className='product dashbord-item'>
            <p>product</p>
            <p>8</p>
          </div>
          <div className='order dashbord-item'>
            <p>order</p>
            <p>8</p>
          </div>
          <div className='user dashbord-item'>
            <p>user</p>
            <p>48</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
