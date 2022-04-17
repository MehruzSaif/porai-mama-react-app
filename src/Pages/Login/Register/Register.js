import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    const handleRegister = event => {
        event.preventDefault();
    }

    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }} className='my-5 register-title'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="" id="" placeholder='Your Name' required />

                <input type="email" name="email" id="1" placeholder='Email Address' required />

                <input type="password" name="" id="2" placeholder='Password' required />
                <input className='register-btn' type="submit" value="Register" />
            </form>

            <p>Already have an accout? <Link to='/login' className='text-danger text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;