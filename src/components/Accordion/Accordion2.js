import React, { Component } from 'react';
import './Accordion2.css';

class Accordion2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openAc1: null,
            openAc2: null,
            openAc3: null
        }
    }

    toggleAccordion1 = () => {
        let slide1 = this.state.openAc1;
        let div1 = (
            <div className="Accordion-content-2">
                <ul>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Bevel//Code</a></li>
                    <li><a href="">About Walker & Company</a></li>
                    <li><a href="">Terms & Conditions</a></li>
                </ul>
            </div>
        );
        this.setState({openAc1: (!slide1 ? div1 : null), openAc2: null, openAc3: null})
    }

    toggleAccordion2 = () => {
        let slide2 = this.state.openAc2;
        let div2 = (
        <div className="Accordion-content-2">
            <ul>
                <li className="Margin-bottom-1">
                    <p>General Information:</p>
                    <a className="" href="">Info@getbevel.com</a>
                </li>
                <li className="Margin-bottom-1">
                    <p>Help:</p>
                    <a className="" href="">Support@getbevel.com</a>
                </li>
                <li className="Margin-bottom-1">
                    <p>Press:</p>
                    <a className="" href="">Press@getbevel.com</a>
                </li>
            </ul>
        </div>
        );
        this.setState({openAc2: (!slide2 ? div2 : null), openAc1: null, openAc3: null})
    }
    
    toggleAccordion3 = () => {
        let slide3 = this.state.openAc3;
        let div3 = (
            <div className="Accordion-content-2">
                                <ul>
                                    <li className="Margin-bottom-2"><a href="">Proof</a></li>
                                    <li className="Margin-bottom-2"><a href="">FAQs</a></li>
                                    <li className="Margin-bottom-2"><a href="">Military Discount</a></li>
                                    <li className="Margin-bottom-2"><a href="">30-Day Money Back Guarantee</a></li>
                                </ul>
                            </div>
        );
        this.setState({openAc3: (!slide3 ? div3 : null), openAc1: null, openAc2: null})
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <ul className="Accordion-container-2">
                    <li className="Accordion-item-2">
                        <a onClick={this.toggleAccordion1} className="Accordion-title-2">
                            <h5>Company</h5>
                            {this.state.openAc1}
                        </a>
                    </li>
                    <li className="Accordion-item-2">
                        <a onClick={this.toggleAccordion2} className="Accordion-title-2">
                            <h5>Contact</h5>
                            {this.state.openAc2}
                        </a>
                    </li>
                    <li className="Accordion-item-2">
                        <a onClick={this.toggleAccordion3} className="Accordion-title-2">
                            <h5>Customer</h5>
                            {this.state.openAc3}
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Accordion2;