import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price}/month</p>
            <p>{description}</p>
            <button>Book Now: {name}</button>
        </div>
    );
};

export default Service;