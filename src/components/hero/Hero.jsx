import React from 'react';

import './hero.css';

const Hero = () => {
    return (
        <div className="d-flex align-items-center" id='hero'>
            <div className="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
            <div className="row">
                <div className="col-lg-8 text-center">
                <h1 className="gradient__text scale-up-center">South High Bison Band</h1>
                {/* <div className="btns">
                    <a href="#upcoming-events" className="btn-menu animated fadeInUp scrollto">Upcoming Events</a>
                </div> */}
                </div>
            </div>
            </div>
        </div>
    );
};

export default Hero;