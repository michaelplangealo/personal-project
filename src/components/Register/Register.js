import React, {Component} from "react";
import axios from 'axios';
import { connect } from "react-redux";
import Footer from '../Footer/Footer';
import {Link} from 'react-router-dom';
import {getUser} from '../../redux/users';

import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      username: "",
      response1: "",
      repsonse2: ""
    }
  }

  componentDidMount() {
    this.props.getUser();
  }

  usernameHandler(val) {
    this.setState({ username: val })
  }

  passwordHandler(val) {
    this.setState({ password: val })
  }

  // sendIt(username, password) {
  //   axios.put("/api/login", {
  //     username,
  //     password
  //   }).then(response => this.setState({response1: }))
  // }

  // createIt(username, password){
  //   axios.put("/api/register", {
  //     username,
  //     password
  //   })
  //   .then(response => this.setState({repsonse2: }))
  // }

  // login() {
  //   axios.post('/api/login', {redirector})
  //   .then(repsonse => response.data.user ?
  //   this.setState({redirector: <Redirect to="/checkoutform" />})
  //   : res.data === 'WRONGPASSWORD'
  // )
  // }

  render(){
    const {onRouteChange} = this.props;
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
          <Link style={{textDecoration: 'none'}} to="/checkoutform"><button 
            className="Signin-btn"
            onClick={()=> this.sendIt(this.state.username, this.state.password)}>Continue</button></Link>
            <button onClick={() => onRouteChange('home')}>
              Continue
            </button>
          <button
            className="Register-btn"
            onClick={()=> this.createIt(this.state.username, this.state.password)}>Register</button>
      </form>
      <Footer />
      {/* {this.state.redirector} */}
      </div>
    );
  }
};

const mapStateToProps = state => ({
  ...state.userReducer
});

export default connect(mapStateToProps, {getUser})(Login);