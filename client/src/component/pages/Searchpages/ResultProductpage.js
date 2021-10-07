import './styles.scss';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../../layout/product/Product';

import Error from '../../layout/error/Error';
import Loading from '../../layout/loading/Loading';

import { getallproducts } from '../../../reduxStore/product/productAction';
import Search from '../../layout/search/Search';
import Sidebar from '../../layout/sidebar/Sidebar';
const ResultProductpage = () => {
  const dispatch = useDispatch();
  const { loading, success, product, error } = useSelector((state) => {
    return state.allProduct;
  });

  useEffect(() => {
    dispatch(getallproducts());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {/* <Search /> */}
      <div className='result'>
        <Sidebar />
        {/* end */}
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
    </>
  );
};

export default ResultProductpage;
