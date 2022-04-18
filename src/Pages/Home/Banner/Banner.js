import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

import banner1 from '../../../images/banner1.jpg';
import banner2 from '../../../images/banner2.jpg';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel>

            <Carousel.Item>
                <img
                    className="d-block w-100 banner-img"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h2>MEET THE TUTOR <span className='text-banner'>MEHRUZ SAIF</span></h2>
                    <p className='mb-0 text-dark'>If you wish to learn with me, you may book one of the packages listed below.</p>
                    <p className='mb-5 text-dark'>I've created three bundles just for SSC applicants. Best Packages at Reasonable Prices may be found there.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100 banner-img"
                    src={banner2}
                    alt="Second slide"
                />

            </Carousel.Item>

        </Carousel>
    );
};

export default Banner;