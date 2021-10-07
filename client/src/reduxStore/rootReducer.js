import { combineReducers } from 'redux';
import cartReducer from './cart/cartReducer';
import {
  allProductReducer,
  productByIdReducer,
} from './product/productReducer';
const rootReducer = combineReducers({
  allProduct: allProductReducer,
  singleProduct: productByIdReducer,
  cart: cartReducer,
});

export default rootReducer;
