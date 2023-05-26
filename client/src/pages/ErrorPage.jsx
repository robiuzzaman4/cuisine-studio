import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ErrorPage = () => {
    return (
        <section className="max-w-screen-lg mx-auto px-4 pt-10 pb-20">
            <div className='flex flex-col items-center gap-4'>
                <LazyLoadImage effect='blur' className='md:w-1/2 mx-auto' src="/errorpage.png" alt="" />
                <h2 className="pb-6 text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
                    Oooops! page not found!
                </h2>
                <Link to='/'>
                    <button className='btn-tertiary'>Back to Home</button>
                </Link>
            </div>
        </section>
    );
};

export default ErrorPage;