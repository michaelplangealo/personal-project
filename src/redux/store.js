import productReducer from '../redux/products';
import cartReducer from '../redux/cart';
import userReducer from '../redux/users';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

const store =  createStore(
    combineReducers({productReducer, cartReducer, userReducer}),
    applyMiddleware(promiseMiddleware()));

export default store;