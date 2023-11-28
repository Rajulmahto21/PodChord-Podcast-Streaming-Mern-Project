// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          {/* Content for the first row, if any */}
        </div>
      </div>

      <div className="container pt-5">
        <div className="row align-items-center">

          <div className="col-lg-2 col-md-3 col-12">
            <a className="navbar-brand" href="index.html">
              <img src="images/pod-talk-logo.png" className="logo-image img-fluid" alt="templatemo pod talk" style={{ width: '600px' }} />
            </a>
          </div>

          <div className="col-lg-7 col-md-6 col-11 offset-md-2 offset-2">
            <p className="copyright-text mb-0 text-md-end">Copyright © 2023 PodChord</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
