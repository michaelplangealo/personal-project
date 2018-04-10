import React, {Component} from "react";
import axios from 'axios';
import { connect } from "react-redux";
import Footer from '../Footer/Footer';
import {Link} from 'react-router-dom';

import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      username: ""
    }
  }

  usernameHandler(val) {
    this.setState({ username: val })
  }

  passwordHandler(val) {
    this.setState({ password: val })
  }

  sendIt(username, password) {
    axios.put("/api/login", {
      username,
      password
    }).then(response => console.log(response))
  }

  createIt(username, password){
    axios.put("/api/register", {
      username,
      password
    })
    .then (response => console.log(response))
  }

  render(){
    return (
      <div>
      <form className="Container Padding-top Centered Form-style">
        <div>
          <h2 className="Open-sans-font">Welcome Back! Please Sign In</h2>
          <div>
            <button className="Facebook-btn">Login With Facebook</button>
          </div>
        </div>
        <p className="Open-sans-font">OR</p>
        <div className="Input-center">
          <input 
            placeholder="Email" 
            className="Set-block" 
            type="text" 
            onChange={e => this.usernameHandler(e.target.value)} />
        </div>
        <div className="Input-center">
          <input 
            placeholder="Password" 
            className="Set-block" 
            type="password" 
            onChange={e => this.passwordHandler(e.target.value)} />  
        </div> 
          <Link to="/cart"><button 
            className="Signin-btn" 
            onClick={()=> this.sendIt(this.state.username, this.state.password)}>Continue</button></Link>
          <button 
            className="Register-btn" 
            onClick={()=> this.createIt(this.state.username, this.state.password)}>Register </button>
      </form>
      <Footer />
      </div>
    );
  }
};

const mapStateToProps = state => ({
  ...state.userReducer
});

export default connect(mapStateToProps)(Login);