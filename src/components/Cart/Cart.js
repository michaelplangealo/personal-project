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
    axios.get
  }

  render() {
    return (
      <div>
      <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.userReducer
  }
}

export default connect(mapStateToProps, {getUser})(Cart);
