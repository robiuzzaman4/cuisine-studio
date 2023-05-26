import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Hero = () => {
    return (
        <section className='bg-gradient-to-br from-gray-50 via-pink-50 to-rose-50'>
            <div className="max-w-screen-lg mx-auto px-4 pt-40 pb-20 grid sm:grid-cols-2 gap-8 md:gap-16 place-items-center">
                <div className="grid gap-4">
                    <h1 className="text-center md:text-start text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-yellow-500 to-violet-500 leading-[3.8rem] sm:leading-[4.2rem] md:leading-[4.6rem] 2xl:leading-[5rem] animate-textAnimation">
                        Discover authentic afghan cuisine.
                    </h1>
                    <h2 className="text-gray-800 text-center md:text-start text-3xl md:text-4xl font-bold"> feel your ultimate experience today!</h2>
                </div>
                <div>
                    <LazyLoadImage className="rounded-xl" src="https://i.pinimg.com/originals/f9/e1/fa/f9e1fa3f067029aaeb3134f72f27e8b7.jpg" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Hero;