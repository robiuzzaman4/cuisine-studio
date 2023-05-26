import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const [passErr, setPassErr] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const { userLogin, googleLogin, githubLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname;


    const handleLogin = (e) => {
        e.preventDefault();
        setEmailErr('');
        setPassErr('');

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then((result) => {
                setEmailErr('');
                setPassErr('');
                const logedInUser = result.user;
                console.log(logedInUser);
                form.reset();
                navigate(from ? from : '/', { replace: true });
            })
            .catch((error) => {
                console.log(error.message);
                if (error.message === 'Firebase: Error (auth/user-not-found).') {
                    return setEmailErr('User not found');
                } else if (error.message === 'Firebase: Error (auth/wrong-password).') {
                    return setPassErr('Wrong password');
                }
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from ? from : '/', { replace: true });
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    const handleGithubLogin = () => {
        githubLogin()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from ? from : '/', { replace: true });
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    return (
        <div className='max-w-screen-lg mx-auto px-4 pt-40 pb-20'>
            <h1 className='text-center text-3xl font-bold pb-3'>Login Now</h1>
            <div className='w-full sm:w-96 mx-auto p-4 rounded-xl shadow-sm grid gap-2'>
                <form onSubmit={handleLogin} className='w-full grid gap-2'>
                    <label className='grid gap-1'>
                        <span>Email:</span>
                        <input
                            type="email"
                            name='email'
                            placeholder='Enter your email'
                            className='w-full rounded-xl px-4 py-2 bg-transparent border border-gray-300 focus:border-blue-500 focus:ring focus:ring-transparent focus:ring-offset-4 focus:ring-offset-blue-200 focus:outline-none'
                            required />
                    </label>
                    <p className='text-sm text-rose-500'>{emailErr}</p>
                    <label className='grid gap-1'>
                        <span>Password:</span>
                        <input
                            type="password"
                            name='password'
                            placeholder='Enter your password'
                            className='w-full rounded-xl px-4 py-2 bg-transparent border border-gray-300 focus:border-blue-500 focus:ring focus:ring-transparent focus:ring-offset-4 focus:ring-offset-blue-200 focus:outline-none'
                            required />
                    </label>
                    <p className='text-sm text-rose-500'>{passErr}</p>
                    <button className='btn-primary w-full my-2'>Login</button>
                    <span className='text-sm'>Don't have an account? <Link to='/register' className='text-blue-500 underline'>Register Now</Link> </span>
                </form>
                <div className='grid gap-2'>
                    <span className='mt-4 text-center text-sm text-gray-800'>or</span>
                    <div className='grid gap-2'>
                        <button onClick={handleGoogleLogin} className='px-4 py-2 rounded-full flex items-center justify-center gap-2 shadow-sm '>
                            <FaGoogle className='text-xl' />
                            <span>Log in with Google</span>
                        </button>
                        <button onClick={handleGithubLogin} className='px-4 py-2 rounded-full flex items-center justify-center gap-2 shadow-sm bg-gray-950 text-gray-50'>
                            <FaGithub className='text-xl' />
                            <span>Log in with Github</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;