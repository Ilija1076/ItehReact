import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-foot">
        <div className="footer-left">
          <h3>Universe</h3>
          <p>Address: Above and beyond</p>
          <p>Phone: +123456789</p>
          <p>Email: visituniverse@universe.com</p>
        </div>
        <div className="footer-right">
          <h3>Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/destinations">Destinations</a>
            </li>
          </ul>
        </div>
        </div>
    </footer>
  );
};

export default Footer;