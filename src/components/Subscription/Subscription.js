import React, { Component } from 'react';
import Items from '../Products/Items';
import ImageGallery from 'react-image-gallery';
import Accordion from '../Accordion/Accordion';
import Footer from '../Footer/Footer';
// import * as products from './products';
import './Subscription';

import "react-image-gallery/styles/css/image-gallery.css";
import videostill from  '../../assets/video-still.jpg';
import {connect} from 'react-redux';
import {getProducts} from '../../redux/products';
import {addToCart} from '../../redux/cart';


import bc93 from '../../assets/bc93.svg';

class Subscription extends Component {
    constructor(props) {
        super(props);

        this.state = {
            switch1: null,
            switch2: null,
            switch3: null,
            switch4: null,
            showThumbnails: false,
            showFullscreenButton: false,
            showPlayButton: false,
            disableArrowKeys: true
        }
    }

    componentDidMount(){
        this.props.getProducts();
    }

    addToCart(id) {
        addToCart(id);
    }

    toggleAccordion1 = () => {
        let slide1 = this.state.switch1;
        let div1 = (
            <div className="Accordion-content Description-container cf">
            <img className="Resize-pic" src="https://i.imgur.com/mE0mF3m.jpg" alt="" /> 
                <h2>SHAVE ON YOUR OWN TERMS</h2>
                <p>
                    Choose how often you want your shipments and cancel any time. Whether you're a daily shaver, occasional groomer, or need enough product to shave your head, legs and arms, we've got a plan for you.
                </p>
            </div>
        );
        this.setState({switch1: (!slide1 ? div1 : null), switch2: null, switch3: null, switch4: null})
    }

    toggleAccordion2 = () => {
        let slide2 = this.state.switch2;
        let div2 = (
            <div className="Accordion-content Description-container cf">
            <img className="Resize-pic" src="https://i.imgur.com/POOeg2Y.jpg" alt="" /> 
                <h2>INGREDIENTS WITH INTEGRITY</h2>
                <p>
                    From end-to-end, the Bevel Shave System is packed with natural ingredients to help you fight razor bumps and irritation. Sunflower, Castor, Olive Oils soothe and soften, Aloe Vera moisturizes, Tea Tree Oil calms and Lactic and Salicylic Acids help even skin tone and exfoliate. Full list of ingredients.
                </p>
            </div>
        )
        this.setState({switch2: (!slide2 ? div2 : null), switch1: null, switch3: null, switch4: null})
    }

    toggleAccordion3 = () => {
        let slide3 = this.state.switch3;
        let div3 = (
            <div className="Accordion-content Description-container cf">
            <img className="Resize-pic" src="https://i.imgur.com/BpHGYCA.jpg" alt="" /> 
                <h2>SINGLE BLADE SHAVING</h2>
                <p>
                    Single blade safety razors cut your hair at skin-level, which helps prevent irritation and razor bumps. With help from the rest of the Bevel Shave System, a single blade safety razor can give you the clean look you want without the skin damage.
                </p>
            </div>
        )
        this.setState({switch3: (!slide3 ? div3 : null), switch1: null, switch2: null, switch4: null})
    }

    toggleAccordion4 = () => {
        let slide4 = this.state.switch4;
        let div4 = (
            <div className="Accordion-content Description-container cf">
            <img className="Resize-pic" src="https://i.imgur.com/4xJCmWv.jpg" alt="" /> 
                <h2>HOW DOES THE SYSTEM WORK?</h2>
                <p>
                    Prep your skin with the Priming Oil. Lather up the Shave Cream with your Shave Brush. Then shave in easy strokes with the Safety Razor. Finally, rinse and apply the Restoring Balm for a cool finish.
                </p>
            </div>
        )
        this.setState({switch4: (!slide4 ? div4 : null), switch1: null, switch2: null, switch3: null})
    }

    render() {

        console.log(this.props)
        const images = [
            {
              original: 'https://i.imgur.com/zuiwRD2.jpg'
            }
          ]

          let products = [];
          if(this.props.products && this.props.products.length > 0) {
            products = this.props.products.map((item, i) =>
                  item.item_name === "The Bevel Subscription" ? (
                    <div className="Container" key={i}>
                        <h1 className="Open-sans-header">{item.item_name}</h1>
                        <p className="Playfair-body">{`$${item.price}`}</p>
                        <p className="Playfair-body">{item.item_description}</p>
                        <button 
                            onClick={() =>  this.props.addToCart(item)} 
                            className="Add-to-cart">Add To Cart</button>                  
                    </div>
                  ) : null
              )
          }

          let testimonial = [];
          if(this.props.products && this.props.products.length > 0) {
            testimonial = this.props.products.map(
                item => 
                  item.item_name === "The Bevel Subscription" ? (
                      <Items 
                          key={item.id}
                          testimonial={item.testimonial}
                          name={item.testimonial_name}
                      />
                  ) : null
            )
          }
          
        return (
            <div className="Razor-container">
            <div  className="Carousel">
                 <ImageGallery 
                     items={images}
                     disableArrowKeys={this.state.disableArrowKeys}
                     showThumbnails={this.state.showThumbnails}
                     showFullscreenButton={this.state.showFullscreenButton}
                     showPlayButton={this.state.showPlayButton}
                      />
            </div>

            <div className="Database-info">
                 {products}
            </div>
             
            {/* <div className="Comment-quote">
                 {testimonial}
            </div> */}

            <div className="Accordion">
            <ul className="Accordion-container">
                 <li className="Accordion-item">
                     <a onClick={this.toggleAccordion1} className="Accordion-title">
                         <h5>SUBSCRIBE & SAVE</h5>
                         {this.state.switch1}
                     </a>
                 </li>
                 <li className="Accordion-item">
                 <a onClick={this.toggleAccordion2} className="Accordion-title">
                     <h5>NATURALLY EFFECTIVE</h5>
                     {this.state.switch2}                   
                 </a>
                 </li>
                 <li className="Accordion-item">
                     <a onClick={this.toggleAccordion3} className="Accordion-title">
                         <h5>WHY USE A SAFETY RAZOR?</h5>
                         {this.state.switch3}           
                     </a>
                 </li>
                 <li className="Accordion-item">
                     <a onClick={this.toggleAccordion4} className="Accordion-title">
                         <h5>THE BEVEL DIFFERENCE</h5>
                         {this.state.switch4}           
                     </a>
                 </li>
             </ul>
            </div>
             <div className="Container">
                 <h4 className="Center Sans-font Advice">Get Advice</h4>
                 <div className="Center-pic">
                     <img alt="" src={bc93} className="Bc93" />
                 </div>
                 <h1 className="Sans-font Font-size">Becoming a Bevel Man: The Shave</h1>
                 <a className="Read-more" href=""><p>Read the article</p></a>
             </div>

             <Footer />
         </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state.productReducer,
        ...state.cartReducer
    }
}

export default connect(mapStateToProps, {getProducts, addToCart})(Subscription);