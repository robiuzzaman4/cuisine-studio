import React from 'react';
import Marquee from 'react-fast-marquee';
import { HiStar } from "react-icons/hi";

const Reviews = () => {
    const reviewData = [
        {
            id: 1,
            name: "Abdullah Azizi",
            review: "The flavors in the dishes were amazing. The staff were attentive and friendly, which made for a great dining experience.",
            rating: "4.50",
            img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        },
        {
            id: 2,
            name: "Ahmad Ali",
            review: "The food was disappointing and not worth the price. The atmosphere was pleasant, but that wasn't enough to make up for the mediocre cuisine.",
            rating: "4.00",
            img: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80"
        },
        {
            id: 3,
            name: "Jabed Haqmal",
            review: "I loved everything about this place! The food was delicious, the service was impeccable, and the atmosphere was cozy and inviting.",
            rating: "5.00",
            img: "https://images.unsplash.com/photo-1678286742832-26543bb49959?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
        },
        {
            id: 4,
            name: "Amanullah Rahim",
            review: "The food was decent, but not outstanding. The service was average, and the prices were a bit high for what we got.",
            rating: "4.50",
            img: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        }
    ];

    return (
        <section className='bg-gradient-to-br from-gray-50 via-pink-50 to-rose-50'>
            <div className='max-w-screen-lg mx-auto px-4 py-20 grid gap-8'>
                <h2 className="pb-6 text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
                    What's people say:
                </h2>
                <Marquee>
                    {
                        reviewData.map((review) => {
                            return (
                                <div key={review.id}
                                    className='w-80 shadow-sm rounded-xl p-4 mx-8 md:mx-12 grid gap-2 bg-white'>
                                    <div className='w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-500 to-orange-500 grid place-items-center'>
                                        <img src={review.img} className='w-9 h-9 rounded-full object-cover' alt="" />
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <h1 className='font-medium'>{review.name}</h1>
                                        <div className='flex items-center gap-1'>
                                            <HiStar/>
                                            <h1 className='font-medium'>{review.rating}</h1>
                                        </div>
                                    </div>
                                    <p className='text-gray-800'>{review.review}</p>
                                </div>
                            )
                        })
                    }
                </Marquee>
            </div>
        </section>
    );
};

export default Reviews;