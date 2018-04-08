// import React, { Component } from 'react';
// import Items from './Items';
// import ImageGallery from 'react-image-gallery';
// import Accordion from '../Accordion/Accordion';
// // import * as products from './products';
// import './Product.css';

// import "react-image-gallery/styles/css/image-gallery.css";
// import videostill from  '../../assets/video-still.jpg';
// import {connect} from 'react-redux';

// import {getProducts} from '../../redux/products';
// import {addToCart} from '../../redux/cart';


// class Products extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
            
//         }
//     }

//     componentDidMount() {
//         this.props.getProducts()
//     }

//     render() {

//         console.log(this.props)
//         const images = [
//             {
//               original: 'https://i.imgur.com/I28kWpA.jpg'
//             },
//             {
//               original: 'https://i.imgur.com/QEygpNp.jpg'
//             }
//           ]

//           const products = this.props.products.map(
//             item =>
//               item.item_name === "20 Blades" ? (
//                 <Items 
//                     key={item.id}
//                     title={item.item_name}
//                     price={item.price}
//                     description={item.item_description}
//                      />
//               ) : null
//           )
          
//           const testimonial = this.props.products.map(
//               item => 
//                 item.item_name === "20 Blades" ? (
//                     <Items 
//                         key={item.id}
//                         testimonial={item.testimonial}
//                         name={item.testimonial_name}
//                     />
//                 ) : null
//           )

//         // const showContent = this.props.products.map(
//         //     item =>
//         //         item. 
//         // )

//         // <div className="Accordion-content">
//         //     <h2>A Classic Refresh With You In Mind</h2>
//         //     <p>
//         //         Single blade safety razors are your best tools in the fight against skin irritation and 
//         //         razor bumps because they're designed to cut your hair at skin-level. A single blades helps 
//         //         avoid tugging, pulling, nicks and cuts.that can harm your skin. With the right system and 
//         //         technique, a safety razor can give you the clean shave you want, every time you step in 
//         //         front of the mirror.
//         //     </p>
//         // </div>
          
//         return (
//             <div>
//                <div className="Carousel">
//                     <ImageGallery 
//                         items={images}
//                          />
//                </div>

//                <div className="Database-info">
//                     {products}
//                     <button className="Add-to-cart">Add To Cart</button>
//                </div>

//                <div className="Comment-quote">
//                     {testimonial}
//                </div>

//                <div className="Accordion">
//                     <Accordion />
//                </div>

//                <div className="Still-video">
//                     <img src={videostill} alt="Still video" className="Video-still" />
//                </div>

//                <div className="Advice">
                    
//                </div>



//                 {/* <ul className="Product-info-container">
//                     <li className="Product-info-item">
//                         <a onClick={this.toggleAccordion1} className="Accordion-title">
//                             <h5>The Bevel Trimmer</h5>
//                             {this.state.switch1}
//                         </a>

//                     </li>
//                     <li className="Product-info-item">
//                     <a onClick={this.toggleAccordion2} className="Accordion-title">
//                         <h5>Bevel Shaving Kit</h5>
//                         {this.state.switch2}                   
//                     </a>
//                     </li>
//                     <li className="Product-info-item">
//                         <a onClick={this.toggleAccordion3} className="Accordion-title">
//                             <h5>Safety Razors</h5>
//                             {this.state.switch3}           
//                         </a>
//                     </li>
//                 </ul> */}



//             </div>
//         );
//     }
// }

// const mapStateToProps = state => {
//     return {
//         ...state.productReducer
//     };
// };

// export default connect(mapStateToProps, {getProducts, addToCart})(Products);