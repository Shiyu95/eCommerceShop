import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from '../constants/productConstants.js';

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      //done loading, done make request. change loading be false
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      //done loading,just have error still false
      return { loading: false, error: action.payload };
    //state will inital state
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case PRODUCT_DETAILS_SUCCESS:
      //done loading, done make request. change loading be false
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      //done loading,just have error still false
      return { loading: false, error: action.payload };
    //state will inital state
    default:
      return state;
  }
};
