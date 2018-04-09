import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Footer from '../Footer/Footer';
import {getUser} from '../../redux/users';

import {connect} from 'react-redux';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      cartSize: 0

    }
  }

  componentDidMount() {
    this.props.addToCart
  }

  render() {
    const items = this.props.cart.map(item => {
      <div>
        <h1 className="Open-sans-header">{item.item_name}</h1>
        <p className="Playfair-body">{item.price}</p>
        <p className="Playfair-body">{item.item_description}</p>
      </div>
    })
    
    return (
      <div>
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

export default connect(mapStateToProps, {getUser})(Cart);
