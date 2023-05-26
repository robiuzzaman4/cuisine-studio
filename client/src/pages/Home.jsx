import React from 'react';
import Hero from '../components/Hero';
import Chefs from '../components/Chefs';
import Reviews from '../components/Reviews';
import NewsLetter from '../components/NewsLetter';

const Home = () => {
    return (
        <>
            <Hero></Hero>
            <Chefs></Chefs>
            <Reviews></Reviews>
            <NewsLetter></NewsLetter>
        </>
    );
};

export default Home;