import React, { useEffect, useState } from 'react';
import ChefCard from './ChefCard';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch(`https://b7a10-chef-recipe-hunter-server-side-robiuzzaman4.vercel.app/chefs`)
        .then((res) => res.json())
        .then((data) => setChefs(data))
    }, []);

    return (
        <section className="max-w-screen-lg mx-auto px-4 py-20">
        <h2 className="pb-6 text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
            Top Chefs:
        </h2>
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {
                chefs.map((chef) => <ChefCard
                key={chef.id}
                chef={chef}></ChefCard>)
            }
        </div>
    </section>
    );
};

export default Chefs;