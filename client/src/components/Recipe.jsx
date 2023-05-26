import React, { useState } from 'react';
import { HiStar } from "react-icons/hi";
import toast from 'react-hot-toast';

const Recipe = ({ chefRecipe }) => {
    const [isDisable, setDisable] = useState(false);

    const handleFavourite = () => {
        toast.success('Successfully Added to Favourite');
        setDisable(true);
    }

    const { name, ingredients, cookingMethod, rating } = chefRecipe;
    return (
        <div className='grid gap-2 rounded-xl p-4 relative bg-white hover:bg-gradient-to-r hover:from-rose-50 from-30% hover:via-orange-50 hover:to-pink-50 shadow-sm  transition-all delay-500 cursor-pointer'>
            <div className='flex items-center justify-between gap-4 mb-4'>
                <h1 className='text-2xl font-semibold'>{name}</h1>
                <button onClick={handleFavourite} className='btn-secondary w-fit flex items-center gap-1 cursor-pointer' disabled={isDisable}>
                    <span className='hidden md:block'>Add to Favourite</span> <HiStar />
                </button>
            </div>
            <div className='flex flex-col md:flex-row md:items-center gap-1'>
                <p className='font-semibold'>Ingredients:</p>
                <p className='font-medium text-gry-800 capitalize'>{(ingredients).join(', ')}</p>
            </div>
            <div>
                <p className='font-semibold'>Cooking Methods:</p>
                {
                    cookingMethod.map((method, index) => <p
                        key={index}>{method}</p>)
                }
            </div>
            <p className='font-semibold'>Ratings: {rating}</p>
        </div>
    );
};

export default Recipe;