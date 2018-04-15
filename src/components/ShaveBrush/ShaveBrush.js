import axios from 'axios';
import React, { Component } from 'react';
import Items from '../Products/Items';
import ImageGallery from 'react-image-gallery';
import Footer from '../Footer/Footer';
// import * as products from './products';
import './ShaveBrush';

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
            <img className="Resize-pic" src="https://i.imgur.com/D7tdf2C.jpg" alt="" /> 
                <h2>IT’S ALL ABOUT THE TECHNIQUE</h2>
                <p>
                    This is where the magic happens. With the right wrist action, you’ll spread a proper lather across your face to become a new man. Using premium-grade badger hair, this brush helps to gently exfoliate and lift hair for an effortless shave.
                </p>
            </div>
        );
        this.setState({switch1: (!slide1 ? div1 : null), switch2: null, switch3: null})
    }

    toggleAccordion2 = () => {
        let slide2 = this.state.switch2;
        let div2 = (
              <div className="Accordion-content Description-container cf">
              <img className="Resize-pic" src="https://i.imgur.com/4xJCmWv.jpg" alt="" /> 
                <h2>HOW DO I USE IT?</h2>
                <p>
                    Start by soaking your brush bristles in hot running water for about 20 seconds. Give it one strong flick to remove excess water. Squeeze a nickel-sized amount of shave cream onto the brush. Apply the shave cream in a strong circular motion. It takes a few months of regular use for any badger brush to break in. Slight hair shedding and softened brush tips are natural for badger brushes.
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
                <h2>HOW DO I CLEAN IT?</h2>
                <p>
                    It’s pretty simple: after shaving, rinse your Bevel Brush with hot water until all lather has been removed. Then, do a final rinse with cold water. For deeper cleaning, you can use a gentle shampoo.
                </p>
            </div>
        )
        this.setState({switch3: (!slide3 ? div3 : null), switch1: null, switch2: null})
    }

    render() {

        console.log(this.props)
        const images = [
            {
              original: 'https://i.imgur.com/UuFg0MR.jpg'
            },
            {
              original: 'https://i.imgur.com/krpTcBw.jpg'
            }
          ]

          let products = [];
          if(this.props.products && this.props.products.length > 0) {
            products = this.props.products.map((item, i) =>
                  item.item_name === "Shave Brush" ? (
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
                  item.item_name === "Shave Brush" ? (
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
                <div style={{width: '50vw', marginLeft: '25vw'}} className="Carousel">
                    <ImageGallery 
                        items={images}
                        showThumbnails={this.state.showThumbnails}
                        showFullscreenButton={this.state.showFullscreenButton}
                        showPlayButton={this.state.showPlayButton}
                         />
               </div>

                <div style={{width: '50vw', marginLeft: '25vw'}} className="Database-info">
                    {products}
               </div>

               <div className="Comment-quote">
                    {testimonial}
               </div>

               <div className="Accordion">
               <ul className="Accordion-container">
                    <li className="Accordion-item">
                        <a onClick={this.toggleAccordion1} className="Accordion-title">
                            <h5>Seal, Soothe</h5>
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
                            <h5>The Details</h5>
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