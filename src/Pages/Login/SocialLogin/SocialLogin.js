import React from 'react';
import './SocialLogin.css';
import google from '../../../images/google.png';
import facebook from '../../../images/facebook.png';
import github from '../../../images/github.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if (error) {
        return (
            <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>
        );
    }

    if (user) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-line w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-line w-50'></div>
            </div>
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-dark w-50 d-block mx-auto my-3 rounded-pill'>
                    <img className='mb-1' style={{ width: '20px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>

                <button

                    className='btn btn-dark w-50 d-block mx-auto my-3 rounded-pill'>
                    <img className='mb-1' style={{ width: '20px' }} src={facebook} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>

                <button

                    className='btn btn-dark w-50 d-block mx-auto my-3 rounded-pill'>
                    <img className='mb-1' style={{ width: '20px' }} src={github} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
        </div >

    );
};

export default SocialLogin;