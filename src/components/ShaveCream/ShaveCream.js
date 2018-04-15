import axios from 'axios';
import React, { Component } from 'react';
import Items from '../Products/Items';
import ImageGallery from 'react-image-gallery';
import Footer from '../Footer/Footer';
// import * as products from './products';
import './ShaveCream';

import "react-image-gallery/styles/css/image-gallery.css";
import videostill from  '../../assets/video-still.jpg';
import {connect} from 'react-redux';
import {getProducts} from '../../redux/products';
import {addToCart} from '../../redux/cart';

import bc93 from '../../assets/bc93.svg';

class ShaveCream extends Component {
    constructor(props) {
        super(props);

        this.state = {
            switch1: null,
            switch2: null,
            switch3: null,
            showThumbnails: false,
            showFullscreenButton: false,
            showPlayButton: false
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
            <img className="Resize-pic" src="https://i.imgur.com/POOeg2Y.jpg" alt="" />
                <h2>CREME DE LA CREME</h2>
                <p>
                    Keep your skin happy with the refreshing coolness of our Restoring Balm. 
                    This lotion helps to reduce shave irritation by using Tea Tree Oil and 
                    Witch Hazel to calm your skin. Lactic and Salicylic Acids help exfoliate 
                    and even your complexion, while Shea Butter helps moisturize and reduce 
                    blemishes. Full list of ingredients.
                </p>
            </div>
        );
        this.setState({switch1: (!slide1 ? div1 : null), switch2: null, switch3: null})
    }

    toggleAccordion2 = () => {
        let slide2 = this.state.switch2;
        let div2 = (
            <div className="Accordion-content Description-container cf">
            <img className="Resize-pic" src="https://i.imgur.com/ODT1aeK.jpg" alt="" />
                <h2>How Do I Use It?</h2>
                <p>
                    Less is always more when it comes to the Bevel Shave Cream. When you’re ready to shave, squeeze a nickel-sized amount of cream onto your Bevel Shave Brush. Apply the shave cream in a strong circular motion and use a bit of speed and pressure to whip up a foamy lather. For help creating a strong lather, consider using a shaving bowl and then applying to your face.
                </p>
            </div>
        )
        this.setState({switch2: (!slide2 ? div2 : null), switch1: null, switch3: null})
    }

    toggleAccordion3 = () => {
        let slide3 = this.state.switch3;
        let div3 = (
            <div className="Accordion-content Description-container cf">
            <img className="Resize-pic" src="https://i.imgur.com/mE0mF3m.jpg" alt="" />
                <h2>HOW DOES THIS HELP REDUCE IRRITATION?</h2>
                <p>
                    By creating a moisturizing layer on your skin, the Bevel Shave Cream helps create a barrier that allows your razor to cut at skin-level, not below it. This helps prevent nicks, cuts and razor bumps that can be caused by improperly cut hairs.
                </p>
            </div>
        )
        this.setState({switch3: (!slide3 ? div3 : null), switch1: null, switch2: null})
    }

    render() {

        console.log(this.props)
        const images = [
            {
              original: 'https://i.imgur.com/jTRTELl.jpg'
            },
            {
              original: 'https://i.imgur.com/7Z178oi.jpg'
            }
          ]

          let products = [];
          if(this.props.products && this.props.products.length > 0) {
            products = this.props.products.map((item, i) =>
                  item.item_name === "Shave Cream" ? (
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
                  item.item_name === "Shave Cream" ? (
                      <Items 
                          key={item.id}
                          testimonial={item.testimonial}
                          name={item.testimonial_name}
                      />
                  ) : null
            )
          }
          
        return (
            <div>
               <div className="Carousel">
                <ImageGallery 
                        items={images}
                        showThumbnails={this.state.showThumbnails}
                        showFullscreenButton={this.state.showFullscreenButton}
                        showPlayButton={this.state.showPlayButton}
                         />
               </div>

               <div className="Database-info">
                    {products}
               </div>

               <div className="Comment-quote">
                    {testimonial}
               </div>

               <div className="Accordion">
               <ul className="Accordion-container">
                    <li className="Accordion-item">
                        <a onClick={this.toggleAccordion1} className="Accordion-title">
                            <h5>LATHER UP</h5>
                            {this.state.switch1}
                        </a>

                    </li>
                    <li className="Accordion-item">
                    <a onClick={this.toggleAccordion2} className="Accordion-title">
                        <h5>Use</h5>
                        {this.state.switch2}                   
                    </a>
                    </li>
                    <li className="Accordion-item">
                        <a onClick={this.toggleAccordion3} className="Accordion-title">
                            <h5>PROTECTION</h5>
                            {this.state.switch3}           
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

export default connect(mapStateToProps, {getProducts, addToCart})(ShaveCream);