import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import hamburger from '../../assets/hamburger.svg';
import cart from '../../assets/cart.svg';
import logo from '../../assets/logo.svg';
import bevel from '../../assets/bevel-code.svg';
import login from '../../assets/login.svg';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuList: [<Link className="Link" to='/trimmer'>Trimmer</Link>, ],
      showMenu: false
    }
  }

  toggleMenu = () => {
    const menuOpen = this.state.showMenu;
    this.setState({showMenu: !menuOpen});
  }

  render() {
    let menu = null;

    if(this.state.showMenu) {
      menu = (
        <div className="Menu-parent">
            <ul className="Menu-list">
              <li className="Menu-child">{this.state.menuList[0]}</li>
              <li className="Menu-child"><Link className="Link" to='/shave'>Shave</Link></li>
              <li>
                <img src={bevel} className="Bevel-code" alt="second logo" />
                <ul className="Sub-list">
                  <li className="Sub-list-items">Find Your <br /> Barber</li>
                  <li className="Sub-list-items">Grooming</li>
                  <li className="Sub-list-items">Style</li>
                  <li className="Sub-list-items">Interviews</li>
                </ul>
              </li>
              <li className="Sub-list-items Line_under"><Link to='/login'>Sign In</Link></li>
            </ul>
        </div>
      );
    }

    return (
      <div className="Main-header">
        <div className="Main-nav Container">
          <a onClick={this.toggleMenu}><img src={hamburger} className="Main-menu" alt="hamburger-menu" /></a>
          <a href="/"><img src={logo} className="Main-logo" alt="logo" /></a>
          <img src={cart} className="Main-cart" alt="cart" />
        </div>
        <div className="Main-nav-2">
          <a href="/"><img src={logo} className="Main-logo" alt="logo" /></a>
          <div className="Move-right">
            {this.state.menuList[0]}
            <a className="Shave">Shave</a>
            <a><img src={bevel} className="Bevel-code" alt="second logo" /></a>
            <a><img src={login} className="Main-login" alt="" /></a>
            <a><img src={cart} className="Main-cart-2" alt="" /></a>
          </div>
        </div>
        {menu}
      </div>
    )
  };
}

export default Header;