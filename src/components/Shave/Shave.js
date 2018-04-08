import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Shave.css';

import videostill from '../../assets/video-still.jpg';
import pic1 from '../../assets/subscription.jpg';
import pic2 from '../../assets/safety-razor.jpg';
import pic3 from '../../assets/starter-kit.jpg';
import pic4 from '../../assets/gift-card.jpg';
import pic5 from '../../assets/20-blades.jpg';
import pic6 from '../../assets/shave-cream.jpg';
import pic7 from '../../assets/restoring-balm.jpg';
import pic8 from '../../assets/priming-oil.jpg';
import pic9 from '../../assets/shave-brush.jpg';
import pic10 from '../../assets/shave-brush.jpg';
import pic11 from '../../assets/shave-brush.jpg';

class Shave extends Component {
    render() {

    return (
        <div>
            <img src={videostill} className="Img-width Margin-top" alt="Video stil" />
        
            <div className="Container No-underline">
                
                <Link to="/shave/subscription">
                <div className="Img-width Margin-top">
                    <div>
                        <img src={pic1} className="Img-width" alt="Subscription" />
                        <h1 className="Open-sans-header">Bevel Shave Subscription</h1>
                        <p className="Open-sans-italic">Complete System delivered to your door</p>
                        <p className="Open-sans-italic">$39.95</p>
                    </div>
                </div>
                </Link>

                <Link to="/shave/safety-razor">
                <div className="Img-width Margin-top">
                    <div>
                        <img src={pic2} className="Img-width" alt="Razor blades" />
                        <h1 className="Open-sans-header">Safety Razor</h1>
                        <p className="Open-sans-italic">Designed to shave at skin level</p>
                        <p className="Open-sans-italic">$49.95</p>
                    </div>
                </div>
                </Link>
                <div className="Img-width Margin-top">
                    <div>
                        <img src={pic3} className="Img-width" alt="Starter kit" />
                        <h1 className="Open-sans-header">Starter Kit</h1>
                        <p className="Open-sans-italic">The Complete Shave System</p>
                        <p className="Open-sans-italic">$129.95</p>
                    </div>
                </div>

                <div className="Img-width Margin-top">
                    <div>
                        <img src={pic4} className="Img-width" alt="Gift card" />
                        <h1 className="Open-sans-header">Gift Card</h1>
                        <p className="Open-sans-italic">Let them choose</p>
                        <p className="Open-sans-italic">$25.00</p>
                    </div>
                </div>

                <Link to="/shave/blades">
                <div className="Img-width Margin-top">
                    <div>
                        <img src={pic5} className="Img-width" alt="Razor blades" />
                        <h1 className="Open-sans-header">20 Blades</h1>
                        <p className="Open-sans-italic">Glides across the skin</p>
                        <p className="Open-sans-italic">$9.95</p>
                    </div>
                </div>
                </Link>  

                <Link to="/shave/shave-cream">
                <div className="Img-width Margin-top">
                    <div>
                        <img src={pic6} className="Img-width" alt="Shaving cream" />
                        <h1 className="Open-sans-header">Shave Cream</h1>
                        <p className="Open-sans-italic">Locks in moisture</p>
                        <p className="Open-sans-italic">$14.95</p>
                    </div>
                </div>
                </Link>

                <Link to="/shave/restoring-balm">
                <div className="Img-width Margin-top">
                    <div>
                        <img src={pic7} className="Img-width" alt="Restoring balm" />
                        <h1 className="Open-sans-header">Restoring Balm</h1>
                        <p className="Open-sans-italic">Cools without the sting</p>
                        <p className="Open-sans-italic">$14.95</p>
                    </div>
                </div>
                </Link>

                <Link to="shave/priming-oil">
                <div className="Img-width Margin-top">
                    <div>
                        <img src={pic8} className="Img-width" alt="Priming oil" />
                        <h1 className="Open-sans-header">Priming Oil</h1>
                        <p className="Open-sans-italic">Preps hair & skin</p>
                        <p className="Open-sans-italic">$14.95</p>
                    </div>
                </div>
                </Link>

                <Link to="shave/shave-brush">
                <div className="Img-width Margin-top">
                    <div>
                        <img src={pic9} className="Img-width" alt="Shave brush" />
                        <h1 className="Open-sans-header">Shave Brush</h1>
                        <p className="Open-sans-italic">Lifts and softens hair</p>
                        <p className="Open-sans-italic">$29.95</p>
                    </div>
                </div>
                </Link>
            </div>
            <Footer />
        </div>
    )
}
}


export default Shave;