'use client';
import React from 'react';
import Link from 'next/link';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';

const swiperOptions = {
  modules: [Navigation, Autoplay],
  slidesPerView: 2,
  centeredSlides: true,
  autoPlay: true,
  loop: true,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 1000,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: false,
    },
    991: {
      slidesPerView: 2,
    },
  }
}

function Works3() {
  return (
    <section className="work-carousel2 metro section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head">
              <h3 className="wow color-font">
              Our Range of Services
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 no-padding">
            <div className="swiper-container">
              <Swiper className="swiper-wrapper" {...swiperOptions}>
                <SwiperSlide className="swiper-slide">
                  <div className="content">
                    <div className="img">
                      <span className="imgio">
                        <div className="wow cimgio" data-delay="500"></div>
                        <img src="/img/portfolio/2.jpg" alt="" />
                      </span>
                    </div>
                    <div className="cont">
                      <h4>
                        <Link href="/project-details2/project-details2-dark">
                        Brand Identity Creation
                        </Link>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="content">
                    <div className="img">
                      <span className="imgio">
                        <div className="wow cimgio" data-delay="500"></div>
                        <img src="/img/portfolio/1.jpg" alt="" />
                      </span>
                    </div>
                    <div className="cont">
                      <h4>
                        <Link href="/project-details2/project-details2-dark">
                         Brand Strategy Development
                        </Link>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="content">
                    <div className="img">
                      <span className="imgio">
                        <div className="wow cimgio" data-delay="500"></div>
                        <img src="/img/portfolio/3.jpg" alt="" />
                      </span>
                    </div>
                    <div className="cont">
                      <h4>
                        <Link href="/project-details2/project-details2-dark">
                        Social Media Marketing
                        </Link>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="content">
                    <div className="img">
                      <span className="imgio">
                        <div className="wow cimgio" data-delay="500"></div>
                        <img src="/img/portfolio/4.jpg" alt="" />
                      </span>
                    </div>
                    <div className="cont">
                      <h4>
                        <Link href="/project-details2/project-details2-dark">
                        Content Marketing 
                        </Link>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="content">
                    <div className="img">
                      <span className="imgio">
                        <div className="wow cimgio" data-delay="500"></div>
                        <img src="/img/portfolio/5.jpg" alt="" />
                      </span>
                    </div>
                    <div className="cont">
                      <h4>
                        <Link href="/project-details2/project-details2-dark">
                        Web development
                        </Link>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="content">
                    <div className="img">
                      <span className="imgio">
                        <div className="wow cimgio" data-delay="500"></div>
                        <img src="/img/portfolio/6.jpg" alt="" />
                      </span>
                    </div>
                    <div className="cont">
                      <h4>
                        <Link href="/project-details2/project-details2-dark">
                        App Development
                        </Link>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer">
                <i className="ion-ios-arrow-right"></i>
              </div>
              <div className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer">
                <i className="ion-ios-arrow-left"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works3;