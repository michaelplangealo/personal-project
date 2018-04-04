import React, { Component } from 'react';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    }
  }

  render() {
    return (
      <div>
        <p>Hello I'm a Cart</p>
      </div>
    );
  }
}

export default Cart;