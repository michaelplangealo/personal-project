import axios from 'axios';
import React, { Component } from 'react';
import Items from '../Products/Items';
import ImageGallery from 'react-image-gallery';
import Footer from '../Footer/Footer';
// import * as products from './products';
import './SafetyRazor';

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
            <img className="Resize-pic" src="https://i.imgur.com/j6I5uTQ.jpg" alt="" /> 
                <h2>100 YEARS IN THE MAKING</h2>
                <p>
                    Good history students are rewarded with its secrets. Good thing we did our homework. Now you can enjoy a razor that’s carefully sized to shave any area and is perfectly weighted for effortless use.
                </p>
            </div>
        );
        this.setState({switch1: (!slide1 ? div1 : null), switch2: null, switch3: null, switch4: null})
    }

    toggleAccordion2 = () => {
        let slide2 = this.state.switch2;
        let div2 = (
            <div className="Accordion-content Description-container cf">
            <img className="Resize-pic" src="https://i.imgur.com/2XWI4hx.jpg" alt="" /> 
                <h2>How Do I Use It?</h2>
                <p>
                    Always hold the Safety Razor at about a 30° angle. Holding the logo on the head against your skin, tilt the handle until the blade just touches your skin. Be easy and let the weight of the razor do the work, don’t apply pressure. Keep your glides short and don’t forget to always shave in the direction your hair is growing.
                </p>
            </div>
        )
        this.setState({switch2: (!slide2 ? div2 : null), switch1: null, switch3: null, switch4: null})
    }

    toggleAccordion3 = () => {
        let slide3 = this.state.switch3;
        let div3 = (
            <div className="Accordion-content Description-container cf">
            <img className="Resize-pic" src="https://i.imgur.com/yXlkem5.jpg" alt="" /> 
                <h2>HOW DOES IT HELP STOP SKIN PROBLEMS?</h2>
                <p>
                    Single blade safety razors cut your hair at skin-level. Unlike multi-blade razors, this design helps prevent tugging, pulling and cutting beneath the skin. All of these issues can cause razor bumps and other irritation. With the right routine and proper technique, a safety razor can give you the clean shave you want without damaging your skin.
                </p>
            </div>
        )
        this.setState({switch3: (!slide3 ? div3 : null), switch1: null, switch2: null, switch4: null})
    }

    toggleAccordion4 = () => {
        let slide4 = this.state.switch4;
        let div4 = (
            <div className="Accordion-content Description-container cf">
            <img className="Resize-pic" src="https://i.imgur.com/X7nZr8P.jpg" alt="" /> 
                <h2>HOW OFTEN SHOULD I CHANGE BLADES?</h2>
                <p>
                    You should always use a new blade for a new shave. Using dull blades can cause tugging, irritation and razor bumps, among other issues. If you have coarse hair or a thick beard, multiple blade changes may be needed during a single shave.
                </p>
            </div>
        )
        this.setState({switch4: (!slide4 ? div4 : null), switch1: null, switch2: null, switch3: null})
    }

    render() {

        console.log(this.props)
        const images = [
            {
              original: 'https://i.imgur.com/aJFuVGn.jpg'
            },
            {
              original: 'https://i.imgur.com/AraNlts.jpg'
            },
            {
                original: 'https://i.imgur.com/Ajgf278.jpg'
            },
            {
                original: 'https://i.imgur.com/hfY7y8t.jpg'
            }
          ]

          let products = [];
          if(this.props.products && this.props.products.length > 0) {
            products = this.props.products.map((item, i) =>
                  item.item_name === "Safety Razor" ? (
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
                  item.item_name === "Safety Razor" ? (
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
               <div style={{width: '50vw', marginLeft: '25vw'}} className="Carousel">
                    <ImageGallery 
                        items={images}
                        disableArrowKeys={this.state.disableArrowKeys}
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
                            <h5>A Classic</h5>
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
                            <h5>REDUCING IRRITATION</h5>
                            {this.state.switch3}           
                        </a>
                    </li>
                    <li className="Accordion-item">
                        <a onClick={this.toggleAccordion4} className="Accordion-title">
                            <h5>CHANGING BLADES</h5>
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