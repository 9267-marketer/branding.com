'use client';
import React, { useEffect } from "react";
import Link from "next/link";
//= Scripts
import cardMouseEffect from "@/common/cardMouseEffect";

function Services3() {
  useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
  }, []);

  return (
    <section className="feat sub-bg section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10">
              <h3 className="wow color-font">
              We give <b/>Brands<b/> the <b/>Voice<b/> they never had before through!
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 items md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-monitor"></i>
              </span>
              <h5>Unique Personas</h5>
              <p>
              Creating distinctive brand personas that resonate with your target audience.
              </p>
              <Link href="/about/about-dark" className="more-stroke">
                <span></span>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items active md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-bolt-outline"></i>
              </span>
              <h5>Strategic Branding</h5>
              <p>
              Developing tailored strategies to position your brand for success.
              </p>
              <Link href="/about/about-dark" className="more-stroke">
                <span></span>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items sm-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-cube"></i>
              </span>
              <h5>Engaging Content</h5>
              <p>
              Producing compelling content that captures and retains audience attention.
              </p>
              <Link href="/about/about-dark" className="more-stroke">
                <span></span>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-color-wand"></i>
              </span>
              <h5>Market Insights</h5>
              <p>
              Leveraging deep market analysis to inform and refine your brand’s approach.
              </p>
              <Link href="/about/about-dark" className="more-stroke">
                <span></span>
              </Link>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Services3;
