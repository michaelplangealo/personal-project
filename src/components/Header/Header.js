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
      menuList: [, ],
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
              <li className="Menu-child"><Link to='/trimmer'>Trimmer</Link></li>
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
          <Link to="/cart"><img src={cart} className="Main-cart" alt="cart" /></Link>
        </div>
        <div className="Main-nav-2">
          <a href="/"><img src={logo} className="Main-logo" alt="logo" /></a>
          <div className="Move-right">
            <Link className="Trimmer" style={{color: 'white', textDecoration: 'none'}} to='/trimmer'>Trimmer</Link>
            <a className="Shave"><Link style={{color: 'white', textDecoration: 'none'}} to='/shave'>Shave</Link></a>
            <a><img src={bevel} className="Bevel-code" alt="second logo" /></a>
            <Link to="/login"><img src={login} className="Main-login" alt="" /></Link>
            <Link to="/cart"><img src={cart} className="Main-cart-2" alt="" /></Link>
          </div>
        </div>
        {menu}
      </div>
    )
  };
}

export default Header;