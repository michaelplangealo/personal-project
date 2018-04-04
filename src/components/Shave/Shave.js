import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Shave.css';

import videostill from '../../assets/video-still.jpg';
import subscription from '../../assets/subscription.jpg';
import razor from '../../assets/safety-razor.jpg';
import kit from '../../assets/starter-kit.jpg';
import card from '../../assets/gift-card.jpg';
import blades from '../../assets/20-blades.jpg';
import cream from '../../assets/shave-cream.jpg';
import balm from '../../assets/restoring-balm.jpg';
import oil from '../../assets/priming-oil.jpg';
import brush from '../../assets/shave-brush.jpg';


const shave = (props) => {
    return (
        <div>
            <img src={videostill} className="Img-width Margin-top" alt="Video stil" />

            <div className="Container">
                <div className="Img-width Margin-top">
                    <div>
                        <img src={subscription} className="Img-width" alt="Subscription" />
                        <h1 className="Open-sans-header">Bevel Shave Subscription</h1>
                        <p className="Open-sans-italic">Complete System delivered to your door</p>
                        <p className="Open-sans-italic">$39.95</p>
                    </div>
                </div>
                <div className="Img-width Margin-top">
                    <div>
                        <img src={razor} className="Img-width" alt="Razor blades" />
                        <h1 className="Open-sans-header">Safety Razor</h1>
                        <p className="Open-sans-italic">Designed to shave at skin level</p>
                        <p className="Open-sans-italic">$49.95</p>
                    </div>
                </div>
                <div className="Img-width Margin-top">
                    <div>
                        <img src={kit} className="Img-width" alt="Starter kit" />
                        <h1 className="Open-sans-header">Starter Kit</h1>
                        <p className="Open-sans-italic">The Complete Shave System</p>
                        <p className="Open-sans-italic">$129.95</p>
                    </div>
                </div>
                <div className="Img-width Margin-top">
                    <div>
                        <img src={card} className="Img-width" alt="Gift card" />
                        <h1 className="Open-sans-header">Gift Card</h1>
                        <p className="Open-sans-italic">Let them choose</p>
                        <p className="Open-sans-italic">$25.00</p>
                    </div>
                </div>
                <div className="Img-width Margin-top">
                    <div>
                        <img src={blades} className="Img-width" alt="Razor blades" />
                        <h1 className="Open-sans-header">20 Blades</h1>
                        <p className="Open-sans-italic">Glides across the skin</p>
                        <p className="Open-sans-italic">$9.95</p>
                    </div>
                </div>
                <div className="Img-width Margin-top">
                    <div>
                        <img src={cream} className="Img-width" alt="Shaving cream" />
                        <h1 className="Open-sans-header">Shave Cream</h1>
                        <p className="Open-sans-italic">Locks in moisture</p>
                        <p className="Open-sans-italic">$14.95</p>
                    </div>
                </div>
                <div className="Img-width Margin-top">
                    <div>
                        <img src={balm} className="Img-width" alt="Restoring balm" />
                        <h1 className="Open-sans-header">Restoring Balm</h1>
                        <p className="Open-sans-italic">Cools without the sting</p>
                        <p className="Open-sans-italic">$14.95</p>
                    </div>
                </div>
                <div className="Img-width Margin-top">
                    <div>
                        <img src={oil} className="Img-width" alt="Priming oil" />
                        <h1 className="Open-sans-header">Priming Oil</h1>
                        <p className="Open-sans-italic">Preps hair & skin</p>
                        <p className="Open-sans-italic">$14.95</p>
                    </div>
                </div>
                <div className="Img-width Margin-top">
                    <div>
                        <img src={brush} className="Img-width" alt="Shave brush" />
                        <h1 className="Open-sans-header">Shave Brush</h1>
                        <p className="Open-sans-italic">Lifts and softens hair</p>
                        <p className="Open-sans-italic">$29.95</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default shave;