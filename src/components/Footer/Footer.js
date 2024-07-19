import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <a href="/?lang=en">
            <img
              alt="mandir connect logo english"
              loading="lazy"
              width="136px"
              height="30px"
              decoding="async"
              src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsirmandir_footer_en_logo.fedb7ccd.svg&w=256&q=75"
            />
          </a>
        </div>
        <div className="footer-links">
            <div> 
            <a href="#" className="footer-link">ABOUT US</a>
            <a href="#" className="footer-link">TERMS AND CONDITIONS</a>
            <a href="#" className="footer-link">PRIVACY POLICY</a>
            </div>  
          <div className="footer-text">
          &copy; 2024 Firstprinciple Appsforbharat Pvt Ltd. All rights reserved.
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
