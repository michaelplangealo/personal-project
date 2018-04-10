import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Footer from '../Footer/Footer';
import {getUser} from '../../redux/users';
import {getCart} from '../../redux/cart';
import {connect} from 'react-redux';
import './Cart.css';
import Login from '../Login/Login';

import StripeCheckout from 'react-stripe-checkout';
import Checkout from '../Checkout/Checkout';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subtotal: 0,
      tax: 0,
      total: 0,
      route: 'signedin'
    }
  }

  // componentDidMount(){
  //   this.props.getCart()
  // }

  adder(num){
let curr = this.state.subtotal
curr+= num
this.setState({subtotal: curr})

  }

  render() {
    const items = this.props.cart.map(item => (
      <div className="Item-container">
        <img className="Pic-resize" src={item.image_url} />
        <p className="Item-name">{item.item_name}</p>
        <p className="Item-price">${item.price}</p>
      </div>
    ))
    console.log(this.props.cart)
    return (
      <div>
        { this.state.route === 'signedin' 
          ? <div>
            <div className="Total Total-container">
              <p>Subtotal: {this.state.subtotal}</p>
              <p>Tax: {this.state.tax}</p>
              <p>Est. Total: {this.state.total}</p>
            </div>
            <div className="Checkout-btn-container">
              <Checkout
                name={'Bevel'}
                amount={1} />
              <button onClick={this.handleLogin} className="Checkout-btn">Checkout</button>
            </div>
            <Link to="/shave"><p className="Shopping-btn">Continue Shopping</p></Link>
              {items} 
            <Footer />
            </div>
          : <div>
               <Login />
            </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.userReducer,
    ...state.cartReducer
  }
}

export default connect(mapStateToProps, {getUser, getCart})(Cart);
