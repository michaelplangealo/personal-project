import axios from 'axios';

const GET_PRODUCTS = 'GET_PRODUCTS';

const initialState = {
    products: [],
    loading: false,
    inspectedProduct: {}
}

export default function productReducer(state = initialState, action) {
    switch (action.type) {
      case `${GET_PRODUCTS}_PENDING`:
        return {
          ...state,
          loading: true
        };

      case `${GET_PRODUCTS}_FULFILLED`:
        return {
          ...state,
          loading: false,
          products: action.payload
        };

      default :
        return state;
    }
}

export function getProducts() {
    return {
      type: GET_PRODUCTS,
      payload: axios
        .get("/api/products")
        .then(response => response.data)
        .catch(err => console.log(err))
    };
  }