import React from 'react';
import './SocialLogin.css';
import google from '../../../images/google.png';
import facebook from '../../../images/facebook.png';
import github from '../../../images/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;

    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }

    if (user || user1) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-line w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-line w-50'></div>
            </div>
            {errorElement}
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
                    onClick={() => signInWithGithub()}
                    className='btn btn-dark w-50 d-block mx-auto my-3 rounded-pill'>
                    <img className='mb-1' style={{ width: '20px' }} src={github} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
        </div >

    );
};

export default SocialLogin;