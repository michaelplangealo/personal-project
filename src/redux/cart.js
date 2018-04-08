import axios from 'axios';

const ADD_TO_CART = 'ADD_TO_CART';

const initialState = {
    cart: [],
    cartSize: 0,
    loading: false
}

export default function cartReducer(state = initialState, action) {
    switch(action.type) {
        case `${ADD_TO_CART}_PENDING`:
            return {
                ...state,
                loading: true
            }

        case `${ADD_TO_CART}_FULFILLED`:
            return {
                ...state,
                loading: false,
                cart: action.payload,
                cartSize: Array.isArray(action.payload) ? action.payload.length : 0
            }

        default:
            return state;
    }
}

export function addToCart(id) {
    return {
        type: ADD_TO_CART,
        payload: axios.post(`/api/cart/${id}`)
        .then(response => response.data)
        .catch(err => err)
    };
}