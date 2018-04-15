import axios from 'axios';
import React, { Component } from 'react';
import Items from '../Products/Items';
import ImageGallery from 'react-image-gallery';
import Footer from '../Footer/Footer';
// import * as products from './products';
import './Blades.css';

import "react-image-gallery/styles/css/image-gallery.css";
import videostill from  '../../assets/video-still.jpg';
import {connect} from 'react-redux';
import {getProducts} from '../../redux/products';
import {addToCart} from '../../redux/cart';

import bc93 from '../../assets/bc93.svg';

class Blades extends Component {
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

    componentDidMount() {
        this.props.getProducts()
    }

    addToCart(id) {
        addToCart(id);
    }

    toggleAccordion1 = () => {
        let slide1 = this.state.switch1;
        let div1 = (
            <div className="Accordion-content Description-container cf">
            <img className="Resize-pic" src="https://i.imgur.com/zuiwRD2.jpg" alt="" /> 
                <h2>DO IT RIGHT</h2>
                <p>
                    A sharp look needs a sharp edge. With high quality razor blades from Bevel, every shave can be on point. Polished to perfection, these blades handle the coarsest of hairs while helping to reduce nicking and tugging.
                </p>
            </div>
        );
        this.setState({switch1: (!slide1 ? div1 : null), switch2: null, switch3: null})
    }

    toggleAccordion2 = () => {
        let slide2 = this.state.switch2;
        let div2 = (
            <div className="Accordion-content Description-container cf">
            <img className="Resize-pic" src="https://i.imgur.com/BpHGYCA.jpg" alt="" /> 
                <h2>HOW DO I LOAD THEM INTO THE BEVEL RAZOR?</h2>
                <p>
                    To insert a new blade, hold the Bevel Razor head with one hand and twist the handle counter clockwise. Remove the bottom plate from the razor head and then drop a fresh blade onto the pegs of the razor head. Then place the bottom plate back over the blade with the side walls facing upward.

                    Hold the top and bottom of the head with your thumb and index finger, insert handle back into head and twist clockwise.
                </p>
            </div>
        )
        this.setState({switch2: (!slide2 ? div2 : null), switch1: null, switch3: null})
    }

    toggleAccordion3 = () => {
        let slide3 = this.state.switch3;
        let div3 = (
            <div className="Accordion-content Description-container cf">
            <img className="Resize-pic" src="https://i.imgur.com/YKC2VlW.jpg" alt="" /> 
                <h2>HOW DO I GET RID OF THESE?</h2>
                <p>
                    Every Bevel Razor Blade box includes a compartment for used blades. You can put them there, or in another safe place before disposing. If you've damaged the lid to your box, please be sure to tape it shut so that the blades stay inside the box.
                </p>
            </div>
        )
        this.setState({switch3: (!slide3 ? div3 : null), switch1: null, switch2: null})
    }

    render() {

        console.log(this.props)
        const images = [
            {
              original: 'https://i.imgur.com/I28kWpA.jpg'
            },
            {
              original: 'https://i.imgur.com/QEygpNp.jpg'
            }
          ]

          let products = [];
          if(this.props.products && this.props.products.length > 0) {
            products = this.props.products.map((item, i) =>
                  item.item_name === "20 Blades" ? (
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
          
          const testimonial = this.props.products.map(
              item => 
                item.item_name === "20 Blades" ? (
                    <Items 
                        key={item.id}
                        testimonial={item.testimonial}
                        name={item.testimonial_name}
                    />
                ) : null
          )
          
        return (
            <div className>
               <div style={{width: '50vw', marginLeft: '6vw'}} className="Carousel">
                <ImageGallery 
                            items={images}
                            showThumbnails={this.state.showThumbnails}
                            showFullscreenButton={this.state.showFullscreenButton}
                            showPlayButton={this.state.showPlayButton}
                            />
               </div>

               <div style={{width: '50vw', marginLeft: '6vw'}} className="Database-info">
                    {products}
               </div>

               <div className="Comment-quote">
                    {testimonial}
               </div>

               <div className="Accordion">
               <ul className="Accordion-container">
                    <li className="Accordion-item">
                        <a onClick={this.toggleAccordion1} className="Accordion-title">
                            <h5>PRECISION</h5>
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
                            <h5>DISPOSAL</h5>
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
    };
};

export default connect(mapStateToProps, {getProducts, addToCart})(Blades);