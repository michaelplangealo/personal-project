import React, { Component } from 'react';

import Accordion from '../Accordion/Accordion';
import Footer from '../Footer/Footer';

import './Home.css';

import headerPic from '../../assets/shave-mobile.jpg';
import headerPicTwo from '../../assets/shave-mobile-2.jpg';

import gq from '../../assets/gq-sm.png';
import complex from '../../assets/complex-sm.png';
import fc from '../../assets/fc-sm.png';
import time from '../../assets/time.png';
import wwd from '../../assets/wwd.png';
import amazon from '../../assets/amazon.png';
import target from '../../assets/target.png';

import bc93 from '../../assets/bc93.svg';


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: [
      <div className="Tabs-panel Container" id="gq">
        <h6>"Winner of the 2016 GQ Best in Grooming Award."</h6>
      </div>,  
      <div className="Tabs-panel Container" id="cp">
        <h6>"Delivers an experiene that multi-blade and electric razors just can't."</h6>
      </div>, 
      <div className="Tabs-panel Container" id="fc">
        <h6>"And my Andis T-Outliner? FInally, in the trash."</h6>
      </div>, <div className="Tabs-panel Container" id="tm">
        <h6>"If the Bevel Trimmer is good enough for Nas, it works for us."</h6>
      </div>, 
      <div className="Tabs-panel Container" id="wwd">
        <h6>"Walker & Co. Raises $24M; <br /> Inks Deal With Target Corp."</h6>
      </div>
      ],
      showText: false,
      selectedDisplay: []
    }
  }

  changer(num) {
    let cards = this.state.display;
    this.setState({selectedDisplay: cards[num]});
  }

  render() {
    
    return (
      <div className="Main-home">
        <div className="Main-intro">
          <img src={headerPic} className="Header-pic" alt="main header" />
          <img src={headerPicTwo} className="Header-pic-2" alt="Main header 2" />
        </div>

        <div className="Intro">
          <h1 className="Tagline">97% see clearer, smoother skin</h1>
          <p className="Tag-paragraph">Bevel is the first and only end to end <br /> shaving system designed to help reduce shaving irritation and razor bumps.</p>
          <div className="Button-primary">Learn More</div>
        </div>

        <div>
          <ul className="Logo-scroll">
            <li>
              <img onClick={() => this.changer(0)} src={gq} className="Gq-icon" alt="Gq icon" />
            </li>
            <li>
              <img onClick={() => this.changer(1)} src={complex} className="Complex-icon" alt="Complex icon" />
            </li>
            <li>
              <img onClick={() => this.changer(2)} src={fc} className="Fast-icon" alt="Fast Company icon" />
            </li>
            <li>
              <img onClick={() => this.changer(3)} src={time} className="Time-icon" alt="Time Mag icon" />
            </li>
            <li>
              <img onClick={() => this.changer(4)} src={wwd} className="WWD-icon" alt="Women Wear Daily icon" />
            </li>
          </ul>
        </div>

        <div className="Tabs-content">
          {this.state.selectedDisplay}
        </div>

        <div className="Bk-img Bk-img-2">
          <h1 className="Bk-font Container">Dermatologist Approved</h1>
          <p className="Bk-text Container">The Bevel Shave System is clinically tested to help reduce and prevent razor bumps and irritation.</p>
          <a className="Bk-btn" href="">Learn More</a>
        </div>

        <Accordion />

        <div className="Tabs-content Pad">
          <h1 className="Avail">Also Available At</h1>
          <div className="Logo-flex">
            <img alt="" className="Store-width" src={amazon} />
            <img alt="" className="Store-width" src={target} />
          </div>
        </div>

        <div className="Container">
          <h4 className="Center Sans-font Advice">Get Advice</h4>
          <img alt="" src={bc93} className="Bc93" />
          <h1 className="Sans-font Font-size">Becoming a Bevel Man: The Shave</h1>
          <a className="Read-more" href=""><p>Read the article</p></a>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;