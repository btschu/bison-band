import React from "react";

import { FaCheckCircle } from "react-icons/fa";
import image from "../../assets/about.jpeg";
import "./about.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div
            class="col-lg-6 order-1 order-lg-2"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div class="about-img">
              <img src={image} alt="SHS Concert Band" />
            </div>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h1 className="">About Us</h1>
            <p class="fst-italic">
              South High School is the newest of four High Schools in Cheyenne,
              WY. The school opened in 2010 and the band has received several
              honors since.
            </p>
            <ul>
              <li><FaCheckCircle /> Superior Ratings in Concert Band, Jazz Band, Marching Band, and Small Ensembles</li>
              <li><FaCheckCircle /> Caption Awards at the State Marching Festival for Music, Brass, Woodwinds, Percussion, Marching, General Effect, Colorguard, and Drum Major</li>
              <li><FaCheckCircle /> Several students have represented South in honor groups such as: All-National Honor Band, All-Northwest Honor Band, All-State Honor Band, and All-State Jazz Ensembles</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
