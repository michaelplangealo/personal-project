import axios from 'axios';
import React, { Component } from 'react';
import Items from '../Products/Items';
import ImageGallery from 'react-image-gallery';
import Footer from '../Footer/Footer';
// import * as products from './products';
import './PrimingOil';

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
            showPlayButton: false
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
             <img className="Resize-pic" src="https://i.imgur.com/1kAzSa2.jpg" alt="" /> 
                <h2>IT’S ALL ABOUT THE FUNDAMENTALS</h2>
                <p>
                    Using a special blend of Castor, Olive and Sunflower oils, this primer helps prevent nicks while softening skin and hair. Full list of ingredients.
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
                    Start by taking a hot shower, or hold a damp hot towel against your skin for at least one minute. Immediately after, massage a nickel-size amount of Priming Oil onto your skin, without rinsing it off. The Priming Oil can also be used as a beard oil that can help hydrate your skin and soften/tame hair while giving your beard a nice shine.
                </p>
            </div>
        )
        this.setState({switch2: (!slide2 ? div2 : null), switch1: null, switch3: null, switch4: null})
    }

    toggleAccordion3 = () => {
        let slide3 = this.state.switch3;
        let div3 = (
            <div className="Accordion-content Description-container cf">
            <img className="Resize-pic" src="https://i.imgur.com/BjNmupf.jpg" alt="" /> 
                <h2>DO I NEED THIS?</h2>
                <p>
                    Bevel Priming Oil helps soften your hair and skin by holding moisture in. Softer hair enables an easier cut and softened skin yields more easily to your razor. This lets you apply less pressure to get a good shave.
                </p>
            </div>
        )
        this.setState({switch3: (!slide3 ? div3 : null), switch1: null, switch2: null, switch4: null})
    }

    toggleAccordion4 = () => {
        let slide4 = this.state.switch4;
        let div4 = (
            <div className="Accordion-content Description-container cf">
            <img className="Resize-pic" src="https://i.imgur.com/mE0mF3m.jpg" alt="" /> 
                <h2>IS THIS OKAY TO USE FOR MY SKIN?</h2>
                <p>
                    Yes. We can’t control outlying factors your skin may be affected by, like hormones and build up, but we can control our products. We specifically chose Sunflower, Castor and Olive oils for their beneficial properties, including their ability to help soften skin.
                </p>
            </div>
        )
        this.setState({switch4: (!slide4 ? div4 : null), switch1: null, switch2: null, switch3: null})
    }

    render() {

        console.log(this.props)
        const images = [
            {
              original: 'https://i.imgur.com/nZYLW5s.jpg'
            },
            {
              original: 'https://i.imgur.com/JUVcwhD.jpg'
            }
          ]

          let products = [];
          if(this.props.products && this.props.products.length > 0) {
            products = this.props.products.map((item, i) =>
                  item.item_name === "Priming Oil" ? (
                    <div className="Container" key={i}>
                        <h1 className="Open-sans-header">{item.item_name}</h1>
                        <p className="Playfair-body">{item.price}</p>
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
                  item.item_name === "Priming Oil" ? (
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
                            <h5>THE FIRST STEP</h5>
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
                            <h5>IT’S IMPORTANT</h5>
                            {this.state.switch3}           
                        </a>
                    </li>
                    <li className="Accordion-item">
                        <a onClick={this.toggleAccordion4} className="Accordion-title">
                            <h5>SENSITIVE SKIN</h5>
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

export default connect(mapStateToProps, {getProducts, addToCart})(ShaveBrush);