import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-gradient-to-tr from-orange-500 to-yellow-500 mt-10'>
            <div className='max-w-screen-lg mx-auto px-4 py-10'>
                <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
                    <div className='flex flex-col md:flex-row md:items-center gap-1 md:gap-4'>
                        <h3 className='text-xl font-medium'>Navigate:</h3>
                        <span><Link to='/'>Home</Link></span>
                        <span><Link to='/blog'>Blog</Link></span>
                        <span><Link to='/login'>Login</Link></span>
                        <span><Link to='/register'>Register</Link></span>
                    </div>
                    <div className='flex items-center gap-4'>
                    <h3 className='text-xl font-medium'>Social:</h3>
                        <span className='cursor-pointer'> <FaFacebook /> </span>
                        <span className='cursor-pointer'> <FaTwitter /> </span>
                        <span className='cursor-pointer'> <FaGithub /> </span>
                    </div>
                </div>
                <div className='py-3 mt-6'>
                    <p className='text-center text-sm'>All right reserved 2023 @cuisinestudio.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;