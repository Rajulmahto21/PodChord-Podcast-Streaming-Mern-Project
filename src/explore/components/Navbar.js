// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand me-lg-5 me-0" href="index.html">
          <img src="images/pod-talk-logo.png" className="logo-image img-fluid" alt="templatemo pod talk" style={{ width: '300px' }} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-lg-auto"></ul>
          <div className="ms-4">
            <a href="#section_3" className="btn custom-btn custom-border-btn smoothscroll">Login/SignUp</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
