import {
  CLEAR_ERRORS,
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAIL,
  PRODUCTBYID_REQUEST,
  PRODUCTBYID_SUCCESS,
  PRODUCTBYID_FAIL,
} from './productConstant';
import axios from 'axios';

export const getallproducts = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCTS_REQUEST });
    const response = await axios.get('/product/all');
    console.log(response.data.Product);
    dispatch({ type: ALL_PRODUCTS_SUCCESS, payload: response.data.Product });
  } catch (error) {
    const err = error.response.data.message || error.message;
    // console.log(error);
    dispatch({ type: ALL_PRODUCTS_FAIL, payload: err });
  }
};

export const getProductById = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTBYID_REQUEST });
    const response = await axios.get(`/product/single/${id}`);
    dispatch({ type: PRODUCTBYID_SUCCESS, payload: response.data.Product });
  } catch (error) {
    const err = error.response.data.message;
    // console.log(error.response.data.message);
    dispatch({ type: PRODUCTBYID_FAIL, payload: err });
  }
};
// clear Error
export const clearErrors = async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
