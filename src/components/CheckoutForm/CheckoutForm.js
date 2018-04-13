import React, {Component} from 'react';
import axios from 'axios';
import './CheckoutForm.css';
import Login from '../Login/Login';
import Checkout from '../Checkout/Checkout';
import {connect} from 'react-redux';
import Footer from '../Footer/Footer';
import {addUserToProps} from '../../redux/users';

class CheckoutForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            state: '',
            postal: '',
            email: '',
            phone: '',
            route: 'signin'
        }
        this.handleChangeShipping = this.handleChangeShipping.bind(this);
    }

    handleChangeShipping(firstName, lastName, address, city, state, postal, email, phone){
        console.log(this.props)
        axios.put('/api/checkoutform', {
            id: this.props.users.user_id,
            firstName,
            lastName,
            address,
            city,
            state,
            postal,
            email,
            phone
        })
        .then(response => this.props.addUserToProps(response.data))
    }

    handleFirstName(val) {
        this.setState({firstName: val})
    }

    handleLastName(val) {
        this.setState({lastName: val})
    }

    handleAddress(val) {
        this.setState({address: val})
    }

    handleCity(val) {
        this.setState({city: val})
    }

    handleState(val) {
        this.setState({state: val})
    }

    handlePostal(val) {
        this.setState({postal: val})
    }

    handleEmail(val) {
        this.setState({email: val})
    }

    handlePhone(val) {
        this.setState({phone: val})
    }

    onRouteChange = (route) => {
        this.setState({route: route})
    }

    render(){
        console.log(this.props.total)
        const {firstName, lastName, address, city, state, postal, email, phone} = this.state;
        return(
            <div className="Pad-top">
                <div className="Form-container">
                    <div className="Col-1">
                        <input onChange={e => this.handleFirstName(e.target.value)}
                            className="Half-width" 
                            type="text" 
                            placeholder="First Name" />
                        <input 
                            onChange={e => this.handleLastName(e.target.value)} 
                            className="Half-width" 
                            type="text" 
                            placeholder="Last Name" />
                    </div>
                    <div className="Col-4">
                    <input 
                        onChange={e => this.handleAddress(e.target.value)} 
                        className="Full-width" 
                        type="text" 
                        placeholder="Address" />
                    </div>
                    <div className="Col-2">
                        <input 
                            onChange={e => this.handleCity(e.target.value)} 
                            className="Third-width" 
                            type="text" 
                            placeholder="City" />
                        <select 
                            onChange={e => this.handleState(e.target.value)} 
                            className="Third-width" type="text" 
                            placeholder="State">
                            <option value="AL">Alabama</option>
                            <option value ="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                        <input 
                            onChange={e => this.handlePostal(e.target.value)} 
                            className="Third-width" 
                            type="text" 
                            placeholder="Postal Code" />
                    </div>
                    <div className="Col-3">
                        <input 
                            onChange={e => this.handleEmail(e.target.value)} 
                            className="Half-width" 
                            type="email" 
                            placeholder="Email" />
                        <input 
                            onChange={e => this.handlePhone(e.target.value)} 
                            className="Half-width" 
                            type="tel" 
                            placeholder="Phone Number" /> 
                    </div>  
                    <div className="Submit-btn">
                        <button onClick={() => this.handleChangeShipping(firstName, lastName, address, city, state, postal, email, phone)}>Save & Submit</button>
                    </div>             
                </div>
                <Checkout
                    name={'Bevel'}
                    amount={this.props.total} />
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
  
  export default connect(mapStateToProps, {addUserToProps})(CheckoutForm);
  
