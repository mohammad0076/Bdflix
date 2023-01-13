import React from 'react';
import Slider from '../IndexSlider/Slider';
import MostPopular from '../MostPopular/MostPopular';
import MoviesForYou from '../MoviesForYou/MoviesForYou';
import SeriesIndex from '../Series/SeriesIndex/SeriesIndex';

const HomePage = () => {
    return (
        <div>
            <Slider></Slider>
            <MostPopular></MostPopular>
            <MoviesForYou></MoviesForYou><br/><br/>
            <SeriesIndex></SeriesIndex>
        </div>
    );
};

export default HomePage;