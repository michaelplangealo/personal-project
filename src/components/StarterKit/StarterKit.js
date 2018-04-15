import axios from 'axios';
import React, { Component } from 'react';
import Items from '../Products/Items';
import ImageGallery from 'react-image-gallery';
import Footer from '../Footer/Footer';
// import * as products from './products';
import './StarterKit';

import "react-image-gallery/styles/css/image-gallery.css";
import videostill from  '../../assets/video-still.jpg';
import {connect} from 'react-redux';
import {getProducts} from '../../redux/products';
import {addToCart} from '../../redux/cart';

import bc93 from '../../assets/bc93.svg';


class ShaveBrush extends Component {
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
        // this.addToCart = this.addToCart.bind(this)
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
                <h2>IT’S ALL THERE</h2>
                <p>
                    We designed the Bevel Shave System from end-to-end to help protect, cleanse and nourish your skin every time you shave. In this kit you’ll find everything you need to do just that, including the Bevel Safety Razor, Shave Brush, Priming Oil, Shave Cream, Restoring Balm and 20 Blades.
                </p>
            </div>
        );
        this.setState({switch1: (!slide1 ? div1 : null), switch2: null, switch3: null, switch4: null})
    }

    toggleAccordion2 = () => {
        let slide2 = this.state.switch2;
        let div2 = (
            <div className="Accordion-content Description-container cf">
            <img className="Resize-pic" src="https://i.imgur.com/FUazLLM.jpg" alt="" /> 
                <h2>How Do I Use It?</h2>
                <p>
                    Prep your skin with the Priming Oil. Lather up the Shave Cream with your Shave Brush. Then shave in easy strokes with the Safety Razor. Finally, rinse and apply the Restoring Balm for a soothing finish without the sting.
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
                <h2>PREP, SOFTEN, CALM</h2>
                <p>
                    Our Priming Oil preps, our Shave Cream moisturizes and our Restoring Balm soothes. Together, they help fight blemishes, irritation and even out your skin tone. It’s that simple.
                </p>
            </div>
        )
        this.setState({switch3: (!slide3 ? div3 : null), switch1: null, switch2: null, switch4: null})
    }

    render() {

        console.log(this.props)
        const images = [
            {
              original: 'https://i.imgur.com/CfUNCe1.jpg'
            }
          ]

          let products = [];
          if(this.props.products && this.props.products.length > 0) {
            products = this.props.products.map((item, i) =>
                  item.item_name === "Starter Kit" ? (
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
                  item.item_name === "Starter Kit" ? (
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
               <div className="Carousel">
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

               <div className="Comment-quote">
                    {testimonial}
               </div>

               <div className="Accordion">
               <ul className="Accordion-container">
                    <li className="Accordion-item">
                        <a onClick={this.toggleAccordion1} className="Accordion-title">
                            <h5>FULL CIRCLE</h5>
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
                            <h5>NOURISH YOUR SKIN</h5>
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

export default connect(mapStateToProps, {getProducts, addToCart})(ShaveBrush);