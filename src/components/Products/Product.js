import React, { Component } from 'react';
import axios from 'axios';
import Items from './Items';
import ImageGallery from 'react-image-gallery';
import * as products from './products';
import './Product.css';

import "react-image-gallery/styles/css/image-gallery.css";


class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get(`/api/products/`)
            .then(response => {
                console.log(response);
                this.setState({
                    products: response.data
                })
            })
    }

    render() {
        const images = [
            {
              original: 'https://i.imgur.com/I28kWpA.jpg'
            },
            {
              original: 'https://i.imgur.com/QEygpNp.jpg'
            }
          ]

         const products = this.state.products.map(item => (
             item.item_name === 'SHAVE BRUSH' ? <p> title={item.item_name} </p> : null
         )) 

        return (
            <div>
               <div className="Carousel"></div>
               <div className="Database-info">
                {products}
               </div>
               <div className="Comment-quote"></div>
               <div className="Accordion"></div>
               <div className="Still-video"></div>
               <div className="Bevel-difference"></div>
               <div></div>
            </div>
        );
    }
}

export default Products;