import React from 'react';
import './Footer.css';

// import facebook from '../../assets/facebook.svg';
// import twitter from '../../assets/twitter.svg';
// import instagram from '../../assets/instagram.svg';
// import pinterest from '../../assets/pinterest.svg';
import Accordion2 from '../Accordion/Accordion2';

const Footer = () => {
  return (
    <div>
      <div className="Footer-row">
        {/* <ul className="Main-footer Container">
          <li><a href="www.faebook.com/bevel" target="_blank"></a></li>
          <li><a href="www.twitter.com/bevel" target="_blank"></a></li>
          <li><a href="www.instagram.com/bevel" target="_blank"></a></li>
          <li><a href="www.pinterest.com/thebevel" target="_blank"></a></li>
        </ul> */}
      </div>
      <Accordion2 />
      <div className="Copyright">
        <p> &copy; 2013 - 2017 Walker & Company Brands</p>
      </div>
    </div>
  )
};

export default Footer;