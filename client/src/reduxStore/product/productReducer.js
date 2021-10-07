import {
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAIL,
  PRODUCTBYID_REQUEST,
  PRODUCTBYID_SUCCESS,
  PRODUCTBYID_FAIL,
} from './productConstant';

let InitailState = { product: [] };
export const allProductReducer = (state = InitailState, action) => {
  switch (action.type) {
    case ALL_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case ALL_PRODUCTS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
        success: true,
      };
    case ALL_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
        success: false,
      };

    default:
      return state;
  }
};
export const productByIdReducer = (state = InitailState, action) => {
  switch (action.type) {
    case PRODUCTBYID_REQUEST:
      return { ...state, loading: true };
    case PRODUCTBYID_SUCCESS:
      return {
        loading: false,
        product: action.payload,

        success: true,
      };
    case PRODUCTBYID_FAIL:
      return {
        loading: false,
        error: action.payload,
        success: false,
      };

    default:
      return state;
  }
};
