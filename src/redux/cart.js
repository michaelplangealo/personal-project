import axios from 'axios';

const ADD_TO_CART = 'ADD_TO_CART';
const GET_CART = 'GET_CART';

const initialState = {
    cart: [],
    // loading: false
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
            }

        case `${GET_CART}_PENDING`:
            return {
                ...state,
                loading: true
            }

        case `${GET_CART}_FULFILLED`:
            return {
                ...state,
                loading: false,
                cart: action.payload,
                total: action.payoad
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