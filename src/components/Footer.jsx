import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-left">
          {/* Information */}
          <h3>Universe</h3>
          <p>Address: Above and beyond</p>
          <p>Phone: +123456789</p>
          <p>Email: visituniverse@universe.com</p>
        </div>
        <div className="footer-right">
          {/* Links */}
          <h3>Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;