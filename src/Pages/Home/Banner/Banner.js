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
                    <h3>Mehruz Saif</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100 banner-img"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
};

export default Banner;