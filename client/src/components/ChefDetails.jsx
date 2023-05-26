import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from './Recipe';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ChefDetails = () => {
    const chef = useLoaderData();
    const { chefName, chefPicture, yearsOfExperience, numberOfRecipes, likes, chefShortBio, chefRecipes } = chef;
    return (
        <section className='max-w-screen-lg mx-auto px-4 py-20 mt-20 grid gap-8'>
            <div className='grid sm:grid-cols-2 gap-8'>
                <div className='flex items-center justify-center'>
                    <LazyLoadImage className='h-72 w-48 object-cover rounded-xl' src={chefPicture} alt="" />
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-xl md:text-2xl font-semibold'>Name: {chefName}</h1>
                    <p className='text-gray-800 font-medium'>Years of experience: {yearsOfExperience} year</p>
                    <p className='text-gray-800 font-medium'>Numbers of recipes: {numberOfRecipes}</p>
                    <p className='text-gray-800 font-medium'>Total Likes: {likes}</p>
                    <p className='text-gray-800 font-medium'>Bio: {chefShortBio}</p>
                </div>
            </div>
            <div className='grid gap-4'>
                <h2 className="py-6 text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
                    Chef Recipes:
                </h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    {
                        chefRecipes.map((chefRecipe, index) => <Recipe key={index}
                        chefRecipe={chefRecipe}></Recipe>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ChefDetails;