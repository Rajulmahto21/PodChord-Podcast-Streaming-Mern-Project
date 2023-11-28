// HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row">

          <div className="col-lg-12 col-12">
            <div className="text-center mb-5 pb-2">
              <h1 className="text-white">Exploring Podcasts with PodChord</h1>

              <p className="text-white">Listen it everywhere. Explore your fav podcasts.</p>

              <a href="#section_2" className="btn custom-btn smoothscroll mt-3">Start listening</a>
            </div>

            <div className="owl-carousel owl-theme">
              {/* Replace the content inside the owl-carousel with your images and other elements */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
