// TrendingPodcastSection.js
import React from 'react';

const TrendingPodcastSection = () => {
  return (
    <section className="trending-podcast-section section-padding">
      <div className="container">
        <div className="row">

          <div className="col-lg-12 col-12">
            <div className="section-title-wrap mb-5">
              <h4 className="section-title">Trending episodes</h4>
            </div>
          </div>

          <div className="col-lg-4 col-12 mb-4 mb-lg-0">
            <div className="custom-block custom-block-full">
              <div className="custom-block-image-wrap">
                <a href="detail-page.html">
                  <img src="images/podcast/3.webp" className="custom-block-image img-fluid" alt="" />
                </a>
              </div>

              <div className="custom-block-info">
                <h5 className="mb-2">
                  <a href="detail-page.html">
                    What Now? with Trevor Noah
                  </a>
                </h5>
              </div>

              <div className="social-share d-flex flex-column ms-auto">
                <a href="#" className="badge ms-auto">
                  <i className="bi-heart"></i>
                </a>

                <a href="#" className="badge ms-auto">
                  <i className="bi-bookmark"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-12 mb-4 mb-lg-0">
            <div className="custom-block custom-block-full">
              <div className="custom-block-image-wrap">
                <a href="detail-page.html">
                  <img src="images/podcast/4.jpg" className="custom-block-image img-fluid" alt="" />
                </a>
              </div>

              <div className="custom-block-info">
                <h5 className="mb-2">
                  <a href="detail-page.html">
                    The Defenders
                  </a>
                </h5>

                <div className="custom-block-bottom d-flex justify-content-between mt-3"></div>
              </div>

              <div className="social-share d-flex flex-column ms-auto">
                <a href="#" className="badge ms-auto">
                  <i className="bi-heart"></i>
                </a>

                <a href="#" className="badge ms-auto">
                  <i className="bi-bookmark"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-12">
            <div className="custom-block custom-block-full">
              <div className="custom-block-image-wrap">
                <a href="detail-page.html">
                  <img src="images/podcast/5.jpg" className="custom-block-image img-fluid" alt="" />
                </a>
              </div>

              <div className="custom-block-info">
                <h5 className="mb-2">
                  <a href="detail-page.html">
                    The Bakersfield Three
                  </a>
                </h5>
              </div>

              <div className="social-share d-flex flex-column ms-auto">
                <a href="#" className="badge ms-auto">
                  <i className="bi-heart"></i>
                </a>

                <a href="#" className="badge ms-auto">
                  <i className="bi-bookmark"></i>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrendingPodcastSection;
