import React from 'react';
import { HiThumbUp } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ChefCard = ({ chef }) => {
    const { id, chefName, chefPicture, yearsOfExperience, numberOfRecipes, likes } = chef;
    return (
        <div className='p-4 rounded-xl shadow-sm grid gap-4'>
            <div className='flex justify-end'>
                <div className='w-20 h-8 rounded-full shadow-sm flex items-center justify-center gap-1'>
                    <HiThumbUp className='text-xl text-blue-500' />
                    <span>{likes}</span>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <LazyLoadImage effect='blur' className='h-40 w-28 object-cover rounded-full' src={chefPicture} alt="" />
            </div>
            <div>
                <h1 className='text-xl font-semibold'>{chefName}</h1>
                <p className='text-gray-800 font-medium'>Years of experience: {yearsOfExperience} year</p>
                <p className='text-gray-800 font-medium'>Numbers of recipes: {numberOfRecipes}</p>
            </div>
            <Link to={`/chef/${id}`}>
                <button className='btn-tertiary w-full'>View Recipes</button>
            </Link>
        </div>
    );
};

export default ChefCard;