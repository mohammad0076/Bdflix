import React from 'react';
import Slider from '../IndexSlider/Slider';
import MostPopular from '../MostPopular/MostPopular';
import MoviesForYou from '../MoviesForYou/MoviesForYou';

const HomePage = () => {
    return (
        <div>
            <Slider></Slider>
            <Slider></Slider>

            <MostPopular></MostPopular>
            <MoviesForYou></MoviesForYou>
        </div>
    );
};

export default HomePage;