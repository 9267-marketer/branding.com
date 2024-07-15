import React from "react";
import Link from "next/link";

const Services2 = () => {
  return (
    <section className="services section-padding position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h3 className="wow color-font">
              Creating identities. Engaging campaigns. Seamless digital experiences.
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
            <div className="step-item xtop">
              <span className="icon pe-7s-gleam"></span>
              <h6>Social Media &amp; <br/> Content Marketing</h6>
              <p>
              Creating engaging content and strategic social media campaigns.
              </p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".6s">
            <div className="step-item xcolor">
              <span className="icon pe-7s-phone"></span>
              <h6>Branding</h6>
              <p>
              Crafting unique and memorable brand identities.
              </p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".9s">
            <div className="step-item xbottom">
              <span className="icon pe-7s-magic-wand"></span>
              <h6>Web &amp; App Development</h6>
              <p>
              Developing user-friendly websites and innovative mobile applications.
              </p>
            </div>
          </div>
        </div>
        <div className="smore">
        </div>
      </div>
      <div className="line top left"></div>
      <div className="line bottom right"></div>
    </section>
  );
};

export default Services2;
