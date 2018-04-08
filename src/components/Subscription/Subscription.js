import React, { Component } from 'react';
import Items from '../Products/Items';
import ImageGallery from 'react-image-gallery';
import Accordion from '../Accordion/Accordion';
// import * as products from './products';
import './Subscription';

import "react-image-gallery/styles/css/image-gallery.css";
import videostill from  '../../assets/video-still.jpg';
import {connect} from 'react-redux';
import {getProducts} from '../../redux/products';

class Subscription extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    componentDidMount(){
        this.props.getProducts();
    }

    render() {

        console.log(this.props)
        const images = [
            {
              original: 'https://i.imgur.com/hXj2O4Z.jpg'
            },
            {
              original: 'https://i.imgur.com/QEygpNp.jpg'
            }
          ]

          let products = [];
          if(this.props.products && this.props.products.length > 0) {
            products = this.props.products.map(
                item =>
                  item.item_name === "The Bevel Subscription" ? (
                    <Items 
                        key={item.id}
                        title={item.item_name}
                        price={item.price}
                        description={item.item_description}
                         />
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
            <div>
               <div className="Carousel">
                    <ImageGallery items={images} />
               </div>

               <div className="Database-info">
                    {products}
                    <button className="Add-to-cart">Add To Cart</button>
               </div>

               <div className="Comment-quote">
                    {testimonial}
               </div>

               <div className="Accordion">
                    <Accordion />
               </div>

               <div className="Still-video">
                    <img src={videostill} alt="Still video" className="Video-still" />
               </div>

               <div className="Advice">
                    
               </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state.productReducer
    }
}

export default connect(mapStateToProps, {getProducts})(Subscription);