import React from 'react';
import NF404 from '../../../images/NF404.jpg';

const NotFound = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-center mt-5'>Page Not Found</h1>
            <img className='w-100' src={NF404} alt="" />
        </div>
    );
};

export default NotFound;