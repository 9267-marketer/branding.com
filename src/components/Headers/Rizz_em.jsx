'use client';
import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

function FreelancreIntro() {
  const [loadTypeWriter, setloadTypeWriter] = useState(false);

  useEffect(() => {
    setloadTypeWriter(true);
  }, []);

  return (
    <header className="freelancre valign">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="img">
              <img src="/img/hero.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-8 valign">
            <div className="cont">
              <h1 className="cd-headline clip">
              Hello, I’m Manvendra, founder of Brandaissance 
              and a high-functioning autistic individual. I am a
                <span style={{ fontSize: "35px", lineHeight: "49px", marginLeft: '7px' }} className="cd-words-wrapper">
                  {
                    loadTypeWriter &&
                    <Typewriter
                      options={{
                        wrapperClassName: "color-font fw-600",
                        strings: [
                          "Social Media Strategist.",
                          "Brand Strategist.",
                          "Content Strategist.",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                      loop={true}
                    />
                  }
                </span>
              </h1>
            </div>
          </div>
        </div>

        <div className="states">
          <div className="container">
            <ul className="flex">
              <li className="flex">
                <div className="numb valign">
                  <h3>2.5</h3>
                </div>
                <div className="text valign">
                  <p>
                    Years <br /> Of Experience
                  </p>
                </div>
              </li>

              <li className="flex">
                <div className="numb valign">
                  <h3>30+</h3>
                </div>
                <div className="text valign">
                  <p>
                    brands <br /> I have worked with.
                  </p>
                </div>
              </li>

              <li className="mail-us">
                <a href="mailto:your@email.com?subject=Subject">
                  <div className="flex">
                    <div className="text valign">
                      <div className="full-width">
                        <p>Get In Touch</p>
                        <h6>neurodiversityinindia@brandaissance.com</h6>
                      </div>
                    </div>
                    <div className="mail-icon">
                      <div className="icon-box">
                        <span className="icon color-font pe-7s-mail"></span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default FreelancreIntro;
