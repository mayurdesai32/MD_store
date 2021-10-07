import React from 'react';
import Header from './component/layout/Header';
import Homepage from './component/pages/Homepage';
import Footer from './component/layout/Footer';
import AllProduct from './component/pages/AllProduct';
import SingleProduct from './component/pages/SingleProduct';
import Cart from './component/pages/Cart';
import Account from './component/pages/Account';
import Profile from './component/pages/Profile';
import ChangePassword from './component/pages/ChangePassword';
import MyOrder from './component/pages/MyOrder';
import Dashboard from './component/pages/Dashboard';
const Apps = () => {
  return (
    <>
      <Header />
      {/* <Homepage /> */}
      {/* <AllProduct /> */}
      {/* <SingleProduct /> */}
      {/* <Cart /> */}
      {/* <Account /> */}
      {/* <Profile /> */}
      {/* <ChangePassword /> */}
      {/* <MyOrder /> */}
      <Dashboard />
      <Footer />
    </>
  );
};

export default Apps;
