import axios from 'axios';

const ADD_TO_CART = 'ADD_TO_CART';
const GET_CART = 'GET_CART';
const DELETE_FROM_CART = 'DELETE_FROM_CART';
const UPDATE_TOTAL= 'UPDATE_TOTAL';

const initialState = {
    cart: [],
    tax: 0,
    total: 0
    // loading: false
}

export default function cartReducer(state = initialState, action) {
    switch(action.type) {
        case `${ADD_TO_CART}_PENDING`:
            return {
                ...state,
                isLoading: true
            }

        case `${ADD_TO_CART}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                cart: action.payload,
            }

        case `${GET_CART}_PENDING`:
            return {
                ...state,
                isLoading: true
            }

        case `${GET_CART}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                cart: action.payload,
                total: action.payoad
            }

        case UPDATE_TOTAL:
            return {
                ...state,
                total: action.payload
            }

        case `${DELETE_FROM_CART}_PENDING`:
            return {
                ...state,
                isLoading: true
            }

        case `${DELETE_FROM_CART}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                cart: action.payload
            }

        default:
            return state;
    }
}

export function addToCart(item) {
    console.log(item)
    return {
        type: ADD_TO_CART,
        payload: axios.post(`/api/cart`, {
            id: item.id,
            item_name: item.item_name,
            price: item.price,
            image_url: item.image_url
            })
        .then(response => response.data)
        .catch(err => err)
    };
}

export function getCart(item) {
    return {
        type: GET_CART,
        payload: axios.get(`/api/cart`)
        .then(response => {console.log(response) 
            return response.data
        })
        .catch(err => err)
    };
}

export function updateTotal(total){
    return {
        type: UPDATE_TOTAL,
        payload: total
    }
}

export function deleteFromCart(id) {
    return {
        type: DELETE_FROM_CART,
        payload: axios.delete(`/api/cart/${id}`)
        .then(response => response.data)
        .catch(err => err)
    }
}

