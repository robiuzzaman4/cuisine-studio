import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [passErr, setPassErr] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const { userRegister } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;

        if (password.length < 6) {
            return setPassErr('The password is less than 6 characters');
        }

        userRegister(email, password)
        .then((result) => {
            const user = result.user;
            updateUser(user, name, photoUrl);
            form.reset();
            navigate('/login');
            setPassErr('');
            setEmailErr('');
            console.log(user);
        })
        .catch((error) => {
            console.log(error.message);
            if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                return setEmailErr('This email is already used');
            }
        })

        const updateUser = (user, name, photoUrl) => {
            updateProfile(user, {
                displayName: name,
                photoURL: photoUrl
            })
            .then(() => {
                console.log('updated user profile');
            })
            .catch((error) => {
                console.log(error.message);
            })
        }
    }
    return (
        <div className='max-w-screen-lg mx-auto px-4 pt-40 pb-20'>
            <h1 className='text-center text-3xl font-bold pb-3'>Register Now</h1>
            <form onSubmit={handleRegister} className='w-full sm:w-96 mx-auto p-4 rounded-xl shadow-sm grid gap-2'>
                <label className='grid gap-1'>
                    <span>Name:</span>
                    <input
                        type="text"
                        name='name'
                        placeholder='Enter your name'
                        className='w-full rounded-xl px-4 py-2 bg-transparent border border-gray-300 focus:border-blue-500 focus:ring focus:ring-transparent focus:ring-offset-4 focus:ring-offset-blue-200 focus:outline-none'
                        required />
                </label>
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
                <label className='grid gap-1'>
                    <span>Photo Url:</span>
                    <input
                        type="text"
                        name='photoUrl'
                        placeholder='Enter your photo url'
                        className='w-full rounded-xl px-4 py-2 bg-transparent border border-gray-300 focus:border-blue-500 focus:ring focus:ring-transparent focus:ring-offset-4 focus:ring-offset-blue-200 focus:outline-none'
                        required />
                </label>
                <button className='btn-primary w-full my-2'>Register</button>
                <span className='text-sm'>Already have an account? <Link to='/login' className='text-blue-500 underline'>Login Now</Link> </span>
            </form>
        </div>
    );
};

export default Register;