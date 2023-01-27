import React from 'react';
import useTitle from '../../../Hooks/UseTitle/UseTitle';
import Slider from '../IndexSlider/Slider';
import MostPopular from '../MostPopular/MostPopular';
import MoviesForYou from '../MoviesForYou/MoviesForYou';
import SeriesIndex from '../Series/SeriesIndex/SeriesIndex';


const HomePage = () => {

    useTitle('Home')

    return (
        <div>
            <Slider></Slider>
            <MostPopular></MostPopular>
            <MoviesForYou></MoviesForYou><br /><br />
            <SeriesIndex></SeriesIndex>
        </div>
    );
};

export default HomePage;