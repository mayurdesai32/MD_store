import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import Product from '../../layout/product/Product';

import Error from '../../layout/error/Error';
import Loading from '../../layout/loading/Loading';

import { getallproducts } from '../../../reduxStore/product/productAction';
import Search from '../../layout/search/Search';
const Homepage = () => {
  const dispatch = useDispatch();
  const { loading, success, product, error } = useSelector((state) => {
    return state.allProduct;
  });
  useEffect(() => {
    dispatch(getallproducts());
    // eslint-disable-next-line
  }, []);

  return (
    <div className='Homepage'>
      {/* landing page */}
      <div className='landing_page'>
        <div className='landing_page_content'>
          <div className='main_title'>Welcome To MD STORE</div>
          <div className='sub_title'>Find Amazing Products</div>
          <div className='flexBox'>
            <button className='btn_landing'>Scroll</button>
          </div>
        </div>
      </div>
      {/* items list */}
      {/* <Search /> */}
      <div className='list_container'>
        <div className='main_header'>
          <div className='title'>Featured Products</div>
          <hr />
        </div>
        {loading ? (
          <Loading />
        ) : error ? (
          <Error title={error || 'product not found'} />
        ) : (
          <div className='main_body'>
            {product.map((ele, i) => (
              <Product item={ele} key={ele._id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Homepage;
