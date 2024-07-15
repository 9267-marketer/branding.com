'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
//= Scripts
import thumparallaxDown from '@/common/thumparallaxDown';


function MinimalArea1() {
  useEffect(() => {
    thumparallaxDown();
  }, []);

  return (
    <section className="min-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img className="thumparallax-down" src="/img/min-area.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <h4 className="color-font">Philosophy. Literature. Art.</h4>
              <p className="wow txt words chars splitting" data-splitting>
                That’s what branding is all about. It's a sophisticated blend of these three elements. <br/> When we ask questions to understand what a brand truly represents and why it exists, that’s philosophy.
              </p>
              <ul>
                <li className="wow fadeInUp" data-wow-delay=".2s">
                When we use these insights to craft a brand’s story, mission, and vision, that’s literature. 
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                And when we create a visual identity for a brand <br/> based on its story, mission, and vision, that’s art.
                </li>
              </ul>
              <Link href="/about/about-dark" className="butn bord curve mt-40 wow fadeInUp" data-wow-delay=".8s">
                <span>Discover</span>
              </Link>
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MinimalArea1