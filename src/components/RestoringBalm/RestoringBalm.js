import axios from 'axios';
import React, { Component } from 'react';
import Items from '../Products/Items';
import ImageGallery from 'react-image-gallery';
import Footer from '../Footer/Footer';
// import * as products from './products';
import './RestoringBalm';

import "react-image-gallery/styles/css/image-gallery.css";
import videostill from  '../../assets/video-still.jpg';
import {connect} from 'react-redux';
import {getProducts} from '../../redux/products';
import {addToCart} from '../../redux/cart';

class RestoringBalm extends Component {
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

    render() {

        console.log(this.props)
        const images = [
            {
              original: 'https://i.imgur.com/z5RQWc7.jpg'
            },
            {
              original: 'https://i.imgur.com/ypU493S.jpg'
            }
          ]

          let products = [];
          if(this.props.products && this.props.products.length > 0) {
            products = this.props.products.map((item, i) =>
                  item.item_name === "Restoring Balm" ? (
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
                  item.item_name === "Restoring Balm" ? (
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

               <div className="Still-video">
                    <img src={videostill} alt="Still video" className="Video-still" />
               </div>

               <div className="Advice">
                    
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

export default connect(mapStateToProps, {getProducts, addToCart})(RestoringBalm);