import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Footer from '../Footer/Footer';
import {getUser} from '../../redux/users';
import {getCart} from '../../redux/cart';
import {connect} from 'react-redux';
import './Cart.css';
import Login from '../Login/Login';
import {updateTotal, deleteFromCart} from '../../redux/cart'
import StripeCheckout from 'react-stripe-checkout';
import Checkout from '../Checkout/Checkout';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      baseTotal: 0
    }
  }

  componentDidMount(){
    let subtotal = (this.props.cart && this.props.cart.length > 0 ? this.props.cart.map(item => item.price).reduce(function(acc, cur){
      return acc + cur
    }).toFixed(2) : null)

    let tax = subtotal * .1;
    tax = tax.toFixed(2);

    let total = parseFloat(tax) + parseFloat(subtotal);

    this.props.updateTotal(total)
  }

  adder(num){
    let curr = this.state.subtotal
    curr += num
    this.setState({subtotal: curr})
  }

  render() {
    let subtotal = (this.props.cart && this.props.cart.length > 0 ? this.props.cart.map(item => item.price).reduce(function(acc, cur){
      return acc + cur
    }).toFixed(2) : null)

    let tax = subtotal * .1;
    tax = tax.toFixed(2);

    let total = parseFloat(tax) + parseFloat(subtotal);

    const items = this.props.cart ? this.props.cart.map((item, i) => (
      <div className="Item-container" key={i}>
        <img className="Pic-resize" src={item.image_url} />
        <p className="Item-name">{item.item_name}</p>
        <p className="Item-price">{`$${item.price}`}</p>
        <button onClick={()=> this.props.deleteFromCart(i)}>Remove from cart</button>
      </div>
    ) ): null

    return (
        <div>
            <div className="Total Total-container">
              <p>Subtotal: {subtotal}</p>
              <p>Tax: {tax}</p>
              <p>Est. Total: {total}</p>
            </div>
            <div className="Checkout-btn-container">
              <Link to="/login"><button onClick={this.handleLogin} className="Checkout-btn">Checkout</button></Link>
            </div>
            <Link to="/shave"><p className="Shopping-btn">Continue Shopping</p></Link>
              {items} 
            <Footer />
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

export default connect(mapStateToProps, {getUser, getCart, updateTotal, deleteFromCart})(Cart);
