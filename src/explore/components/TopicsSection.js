// TopicsSection.js
import React from 'react';

const TopicsSection = () => {
  return (
    <section className="topics-section section-padding pb-0" id="section_3">
      <div className="container">
        <div className="row">

          <div className="col-lg-12 col-12">
            <div className="section-title-wrap mb-5">
              <h4 className="section-title">Topics</h4>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="custom-block custom-block-overlay">
              <a href="detail-page.html" className="custom-block-image-wrap">
                <img src="images/topics/physician-consulting-his-patient-clinic.jpg" className="custom-block-image img-fluid" alt="" />
              </a>

              <div className="custom-block-info custom-block-overlay-info">
                <h5 className="mb-1">
                  <a href="listing-page.html">
                    Productivity
                  </a>
                </h5>

                <p className="badge mb-0">50 Episodes</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="custom-block custom-block-overlay">
              <a href="detail-page.html" className="custom-block-image-wrap">
                <img src="images/topics/repairman-doing-air-conditioner-service.jpg" className="custom-block-image img-fluid" alt="" />
              </a>

              <div className="custom-block-info custom-block-overlay-info">
                <h5 className="mb-1">
                  <a href="listing-page.html">
                    Technician
                  </a>
                </h5>

                <p className="badge mb-0">12 Episodes</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="custom-block custom-block-overlay">
              <a href="detail-page.html" className="custom-block-image-wrap">
                <img src="images/topics/woman-practicing-yoga-mat-home.jpg" className="custom-block-image img-fluid" alt="" />
              </a>

              <div className="custom-block-info custom-block-overlay-info">
                <h5 className="mb-1">
                  <a href="listing-page.html">
                    Mindfullness
                  </a>
                </h5>

                <p className="badge mb-0">35 Episodes</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="custom-block custom-block-overlay">
              <a href="detail-page.html" className="custom-block-image-wrap">
                <img src="images/topics/delicious-meal-with-sambal-arrangement.jpg" className="custom-block-image img-fluid" alt="" />
              </a>

              <div className="custom-block-info custom-block-overlay-info">
                <h5 className="mb-1">
                  <a href="listing-page.html">
                    Cooking
                  </a>
                </h5>

                <p className="badge mb-0">12 Episodes</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TopicsSection;
