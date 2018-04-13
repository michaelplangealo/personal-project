import React from 'react';
import './Footer.css';

// import facebook from '../../assets/facebook.svg';
// import twitter from '../../assets/twitter.svg';
// import instagram from '../../assets/instagram.svg';
// import pinterest from '../../assets/pinterest.svg';
import Accordion2 from '../Accordion/Accordion2';
import footer from '../../assets/footer.jpg';

const Footer = () => {
  return (
    <div>
      <div className="Footer-row">
        <ul className="Main-footer Container">
          {/* <li><a className="Facebook" target="_blank"><img src={facebook} alt="" /></a></li>
          <li><a className="Twitter" target="_blank"><img src={twitter} alt="" /></a></li>
          <li><a className="Instagram" target="_blank"><img src={instagram} alt="" /></a></li>
          <li><a className="Pinterest" target="_blank"><img src={pinterest} alt="" /></a></li> */}
        </ul>
      </div>
      <div className="Footer-accordion">
        <Accordion2 />
      </div>
      <div className="Copyright">
        <p> &copy; 2013 - 2017 Walker & Company Brands</p>
      </div>
      <footer className="Main-footer-large">
          <div className="Main-footer-container">
            <div>
              <img className="Footer-pic-width" src={footer} alt="" />
              <p className="Copyright-2"> &copy; 2013 - 2017 Walker & Company Brands</p>
            </div>
            <nav className="Nav-info-1">
              <h3>Company</h3>
              <ul>
                <li>Careers</li>
                <li>Bevel Code</li>
                <li>Walker & Company</li>
                <li>Terms & Conditions</li>
              </ul>
            </nav>
            <nav className="Nav-info-2">
              <h3>Contact</h3>
              <ul>
                <h5>General Information</h5>
                <li>Info@getbevel.com</li>
                <h5>Help</h5>
                <li>Support@getbevel.com</li>
                <h5>Press</h5>
                <li>Press@getbevel.com</li>
              </ul>
            </nav>
            <nav className="Nav-info-3">
              <h3>Customer</h3>
              <ul>
                <li>Proof</li>
                <li>FAQs</li>
                <li>Military Discount</li>
                <li>30-Day Money Back Guarantee</li>
              </ul>
            </nav>
            </div>
      </footer>
    </div>
  )
};

export default Footer;