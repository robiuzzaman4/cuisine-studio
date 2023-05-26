import React from 'react';
import { HiPaperAirplane } from "react-icons/hi";
import toast from 'react-hot-toast';

const NewsLetter = () => {
    const handleNewsletter = (e) => {
        e.preventDefault();
        const form = e.target;
        form.reset();
        
        toast.success('Thank you for subscription!')   
    }
    return (
        <section className=''>
            <div className='max-w-screen-lg mx-auto px-4 py-20'>
                <h2 className="pb-6 text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
                    Stay tuned us:
                </h2>
                <p className='text-gray-800 font-medium text-2xl  text-center mx-auto md:w-96 py-6'>For get update chefs news and recipes, <span className='text-gray-500'>subscribe to our news letter.</span></p>
                <div className='grid gap-4 w-72 md:w-80 mx-auto'>
                    <img className='p-4' src="/newsletter.svg" alt="newsletter icon" />
                    <form onSubmit={handleNewsletter} className='relative'>
                        <label>
                            <input
                                type="email"
                                name='email'
                                placeholder='Enter your email'
                                className='w-full rounded-xl px-4 py-2 bg-transparent border border-gray-300 focus:border-orange-500 focus:ring focus:ring-transparent focus:ring-offset-4 focus:ring-offset-orange-200 focus:outline-none'
                                required />
                        </label>
                        <button className='absolute btn-tertiary right-[9px] top-[9px] py-1 px-2 grid place-items-center'>
                            <HiPaperAirplane className='rotate-90'/>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default NewsLetter;