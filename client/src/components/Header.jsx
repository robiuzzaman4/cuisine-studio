import React, { useContext } from 'react';
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt4, HiOutlineX } from "react-icons/hi";
import { useState } from "react";
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const { user, userLogout } = useContext(AuthContext);
    const photoURL = user?.photoURL;
    const name = user?.displayName;

    const handleMouseOver = () => {
        setIsHovering(true);
    }
    const handleMouseOut = () => {
        setIsHovering(false);
    }

    const handleLogOut = () => {
        userLogout()
            .then(() => {
                console.log('Log Out successful');
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    return (
        <header className="bg-white/50 shadow-sm fixed top-0 w-full backdrop-blur-2xl z-10">
            <nav className="max-w-screen-lg mx-auto px-4 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 relative">
                <div className='flex items-center'>
                    <Link to='/'>
                        <div className="text-xl font-semibold flex items-center gap-2">
                            <span className='h-8 w-8 grid place-items-center rounded-full bg-gradient-to-tr from-orange-600 to-yellow-500'>
                                <img className='w-4 h-4' src="/knife.svg" alt="" />
                            </span>
                            <span>Cuisine Studio</span>
                        </div>
                    </Link>
                </div>
                <div className={`md:flex flex-col md:flex-row md:items-center gap-4 font-medium ${!menuOpen ? 'hidden' : 'flex'}`}>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive ? 'active' : ''
                        }>
                        Home
                    </NavLink>
                    <NavLink
                        to='/blog'
                        className={({ isActive }) =>
                            isActive ? 'active' : ''
                        }>
                        Blog
                    </NavLink>
                    {
                        photoURL ?
                            <div className='w-10 h-10 grid place-items-center cursor-pointer' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                                <img className='w-full h-full rounded-full' src={photoURL} alt="" />
                            </div>
                            :
                            <Link to='/login'>
                                <button className="btn-primary">Login</button>
                            </Link>
                    }
                    <div className={`absolute top-[152px] left-16 md:left-auto md:top-20 md:right-20 bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-sm rounded-xl px-4 py-2 ${isHovering ? "block" : "hidden"}`}>
                        <h3 className='font-medium'>Name: {name}</h3>
                    </div>
                    {
                        user && photoURL &&
                        <button onClick={handleLogOut} className='btn-secondary'>
                            Log Out
                        </button>
                    }
                </div>
                <div onClick={() => setMenuOpen(!menuOpen)} className="md:hidden absolute top-[30px] right-4 text-xl cursor-pointer">
                    {
                        !menuOpen ? <HiOutlineMenuAlt4 /> : <HiOutlineX />
                    }
                </div>
            </nav>
        </header>
    );
};

export default Header;