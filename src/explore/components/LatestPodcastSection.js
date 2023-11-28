// LatestPodcastSection.js
import React from 'react';

const LatestPodcastSection = () => {
  return (
    <section className="latest-podcast-section section-padding pb-0" id="section_2">
      <div className="container">
        <div className="row justify-content-center">

          <div className="col-lg-12 col-12">
            <div className="section-title-wrap mb-5">
              <h4 className="section-title">Lastest episodes</h4>
            </div>
          </div>

          <div className="col-lg-6 col-12 mb-4 mb-lg-0">
            <div className="custom-block d-flex">
              <div>
                <div className="custom-block-icon-wrap">
                  <div className="section-overlay"></div>
                  <a href="detail-page.html" className="custom-block-image-wrap">
                    <img src="images/podcast/1.jpg" className="custom-block-image img-fluid" alt="" />
                    <a href="#" className="custom-block-icon">
                      <i className="bi-play-fill"></i>
                    </a>
                  </a>
                </div>
              </div>

              <div className="custom-block-info">
                <div className="custom-block-top d-flex mb-1">
                  <small className="me-4">
                    <i className="bi-clock-fill custom-icon"></i>
                    50 Minutes
                  </small>

                  <small>Episode <span className="badge">10</span></small>
                </div>

                <h5 className="mb-2">
                  <a href="detail-page.html">
                    Who Killed JFK?
                  </a>
                </h5>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className="custom-block d-flex">
              <div>
                <div className="custom-block-icon-wrap">
                  <div className="section-overlay"></div>
                  <a href="detail-page.html" className="custom-block-image-wrap">
                    <img src="images/podcast/2.jpg" className="custom-block-image img-fluid" alt="" />
                    <a href="#" className="custom-block-icon">
                      <i className="bi-play-fill"></i>
                    </a>
                  </a>
                </div>
              </div>

              <div className="custom-block-info">
                <div className="custom-block-top d-flex mb-1">
                  <small className="me-4">
                    <i className="bi-clock-fill custom-icon"></i>
                    120 Minutes
                  </small>

                  <small>Episode <span className="badge">15</span></small>
                </div>

                <h5 className="mb-2">
                  <a href="detail-page.html">
                    Tosh Show
                  </a>
                </h5>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LatestPodcastSection;
