import React, {Component} from "react";
import axios from 'axios';
import { connect } from "react-redux";
import Footer from '../Footer/Footer';
import {Link, Redirect} from 'react-router-dom';
import {getUser, addUserToProps} from '../../redux/users';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      redirector: null
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
    }).then(response => this.setState({response1: response.data}))
  }

    createIt(username, password){
    axios.put("/api/register", {
      username,
      password
    })
    .then(response => console.log(response))
  }

  login(username, password) {
    axios.put('/api/login', {
      username,
      password
    })
    .then(response => {
      console.log(response)
      if(response.data.user_id){
        this.props.addUserToProps(response.data)
      this.setState({redirector: <Redirect to="/checkoutform" />}) 

    } else if (response.data === 'BADPW'){
      this.setState({redirector: alert("that is a bad password!")})
    }
    })}

  render(){
    console.log(this.state)
    return (
      <div>
      <div className="Container Padding-top Centered Form-style">
        <div>
          <h2 className="Open-sans-font">Welcome Back! Please Sign In</h2>
          <div>
            <button className="Facebook-btn">Login With Facebook</button>
          </div>
        </div>
        <p className="Open-sans-font">OR</p>
        <div className="Input-center">
          <input 
            placeholder="Username" 
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
          <button 
            className="Signin-btn"
            onClick={()=> this.login(this.state.username, this.state.password)}>Continue</button>

            <button
            className="Register-btn"
            onClick={()=> this.createIt(this.state.username, this.state.password)}>Register</button>
      </div>
      <Footer />
      {this.state.redirector}
      </div>
    );
  }
};

const mapStateToProps = state => ({
  ...state.userReducer
});

export default connect(mapStateToProps, {getUser, addUserToProps})(Login);