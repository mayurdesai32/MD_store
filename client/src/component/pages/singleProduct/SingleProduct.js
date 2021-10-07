import React, { useEffect, useState } from 'react';
import './style.scss';
import image1 from '../../image/image1.jpeg';
import Review from '../../layout/review/Review';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../../reduxStore/product/productAction';
import { addToCart } from '../../../reduxStore/cart/cartAction';
import Error from '../../layout/error/Error';
import Loading from '../../layout/loading/Loading';
const SingleProduct = ({ match }) => {
  const [quantity, setQuantity] = useState(1);
  const id = match.params.id;
  const dispatch = useDispatch();
  const {
    loading = true,
    success,
    product,
    error,
  } = useSelector((state) => {
    return state.singleProduct;
  });

  const { cartItem } = useSelector((state) => {
    return state.cart;
  });

  const addcart = () => {
    dispatch(addToCart(product[0], quantity));
  };

  const itemInCart = cartItem.find((element) => element._id === product[0]._id);

  const removeProduct = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const addProduct = () => {
    console.log(itemInCart);
    if (itemInCart && quantity <= product[0].stock - itemInCart.quantity) {
      setQuantity(quantity + 1);
    } else if (quantity <= product[0].stock) {
      setQuantity(quantity + 1);
    }
  };

  useEffect(() => {
    dispatch(getProductById(id));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error title={'product not found'} />
      ) : (
        <>
          <div className='singleProduct'>
            <div className='product_item'>
              <img className='productImage' src={image1} alt='product image' />
            </div>
            <div className='product_item'>
              <div className='product_title'>{product[0].name}</div>
              <div className='product_id'>product id {product[0]._id}</div>
              <hr />
              <div className='product_rating'>
                <span>
                  <i className='fas fa-star' />
                  <i className='fas fa-star' />
                  <i className='fas fa-star' />
                  <i className='fas fa-star-half-alt' />
                  <i className='far fa-star' />
                </span>
                <span>(review 1{product[0].numofreviews})</span>
              </div>
              <hr />
              <div className='product_price'>${product[0].price}</div>
              <div className='product_button'>
                <button className='product_add' onClick={removeProduct}>
                  -
                </button>
                {quantity}
                <button className='product_add' onClick={addProduct}>
                  +
                </button>
                <button className='add_to_cart' onClick={addcart}>
                  add to cart
                </button>
              </div>
              <hr />
              <div className='product_status'>
                Status :
                <span style={{ color: 'green', fontWeight: 500 }}>
                  {product[0].stock ? <>In Stock</> : <>out of Stock</>}
                </span>
              </div>
              <hr />
              <div className='product_desc'>
                <div style={{ fontSize: '18px', fontWeight: 500 }}>
                  Description:
                </div>

                <div>{product[0].desc}</div>
              </div>
              <button className='add_to_cart'>submit Review</button>
            </div>
          </div>
          <div className='reviewpage'>
            <div className='title'>Review</div>
            <hr />
            <div className='review'>
              {product[0].reviews.length ? (
                product[0].reviews.map((ele) => {
                  console.log(ele);
                  return (
                    <Review
                      key={ele._id}
                      name={ele.name}
                      comment={ele.comment}
                      rating={ele.rating}
                    />
                  );
                })
              ) : (
                <div className='no_review'>no reviews to shows</div>
              )}

              {/* <Review />
              <Review />
              <Review />
               <Review /> */}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SingleProduct;
