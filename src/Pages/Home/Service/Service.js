import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }

    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h3 className='my-4'>{name}</h3>
            <p><small>{description}</small></p>
            <p>Price: <span className='taka-logo'><b>৳</b>৳</span>{price}/month</p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>Book Now: {name}</button>
        </div>
    );
};

export default Service;