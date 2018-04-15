import React, { Component } from 'react';
import './Accordion.css';
import {Link} from 'react-router-dom';

class Accordion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            switch1: null,
            switch2: null,
            switch3: null
        }
    }

    toggleAccordion1 = () => {
        let slide1 = this.state.switch1;
        let div1 = (
            <div className="Accordion-content Description-container cf">
                <img className="Resize-pic" src="https://i.imgur.com/RVFDHxl.jpg" alt="" />            
                <h2>The Most Advanced Trimmer On The Planet</h2>
                <p>
                    The future of grooming is right now. By combining art and science, 
                    we created the Bevel Trimmer and invented a new way to adjust sharpness 
                    and guarantee powerful cordless performance, in a perfectly weighted body.
                </p>
                <button className="Yellow-btn">Buy Trimmer</button>
            </div>
        );
        this.setState({switch1: (!slide1 ? div1 : null), switch2: null, switch3: null})
    }

    toggleAccordion2 = () => {
        let slide2 = this.state.switch2;
        let div2 = (
            <div className="Accordion-content Description-container cf">
                <img className="Resize-pic" src="https://i.imgur.com/72ns7Wf.jpg" alt="" />            
                <h2>Why Choose Bevel?</h2>
                <p>
                    You've got coarse, curly hair, which means you're no stranger to irritation, razor 
                    bumps and skin sensitivity. You deserve better. Bevel is the better. Our soothing, 
                    moisturizing shave, helps keep your skin and hair happy. We knew you needed the best 
                    tools to be your best self. So we made them.
                </p>
                <Link to="/shave"><button className="Yellow-btn">Shop Bevel</button></Link>                
            </div>
        )
        this.setState({switch2: (!slide2 ? div2 : null), switch1: null, switch3: null})
    }

    toggleAccordion3 = () => {
        let slide3 = this.state.switch3;
        let div3 = (
            <div className="Accordion-content Description-container cf">
                <img className="Resize-pic" src="https://i.imgur.com/xLbiTTY.jpg" alt="" />            
                <h2>A Classic Refresh With You In Mind</h2>
                <p>
                    Single blade safety razors are your best tools in the fight against skin irritation and 
                    razor bumps because they're designed to cut your hair at skin-level. A single blades helps 
                    avoid tugging, pulling, nicks and cuts.that can harm your skin. With the right system and 
                    technique, a safety razor can give you the clean shave you want, every time you step in 
                    front of the mirror.
                </p>
                <Link to="/shave/safety-razor"><button className="Yellow-btn">Buy Razor</button></Link>                
            </div>
        )
        this.setState({switch3: (!slide3 ? div3 : null), switch1: null, switch2: null})
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <ul className="Accordion-container">
                    <li className="Accordion-item">
                        <a onClick={this.toggleAccordion1} className="Accordion-title">
                            <h5>The Bevel Trimmer</h5>
                            {this.state.switch1}
                        </a>

                    </li>
                    <li className="Accordion-item">
                    <a onClick={this.toggleAccordion2} className="Accordion-title">
                        <h5>Bevel Shaving Kit</h5>
                        {this.state.switch2}                   
                    </a>
                    </li>
                    <li className="Accordion-item">
                        <a onClick={this.toggleAccordion3} className="Accordion-title">
                            <h5>Safety Razors</h5>
                            {this.state.switch3}           
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Accordion;