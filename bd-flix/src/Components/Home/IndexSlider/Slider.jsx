import React, { useEffect, useState } from 'react';
import img1 from '../../../SlideImages/img2.png';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import MovieCategoryCard from './MoviesCategory/MovieCategoryCard';

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const slider = [
        { sliderImage: img1, moviesName: "panthar", publishedDate: "", },
        { sliderImage: 'https://cdn.bioscopelive.com/upload/slide/topBannerDesktop/9vz5k067H1o.jpg', moviesName: "panthar", publishedDate: "", },
        { sliderImage: 'https://cdn.bioscopelive.com/upload/slide/topBannerDesktop/3kMUBFGj6xZ.jpg', moviesName: "panthar", publishedDate: "", },
        { sliderImage: 'https://cdn.bioscopelive.com/upload/slide/topBannerDesktop/j0UCJSQdxgu.jpg', moviesName: "panthar", publishedDate: "", },]

    // handle nextslide slide
    const handleNextSlide = () => {
        setCurrentSlide(currentSlide === slider.length - 1 ? 0 : currentSlide + 1);
    }

    // handle previousSlide slide
    const handlePrevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slider.length - 1 : currentSlide - 1);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % slider.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <div className='relative lg:h-[850px] h-[430px]'>
            <div className='relative'>
                <div className='absolute inset-0'>
                    <div className='relative'>
                        <img
                            className='h-[100%] lg:lg:w-screen transition transform duration-300 ease-in'
                            src={slider[currentSlide].sliderImage} alt="" />
                        <div className='absolute lg:inset-0 lg:bg-black lg:opacity-50'></div>
                    </div>
                </div>
                <button className='absolute top-14 lg:top-56 text-white text-2xl rounded-full left-0 p-4' onClick={handlePrevSlide}>
                    <FaAngleLeft />
                </button>
                <button className='absolute top-14 lg:top-56 rounded-full right-0 text-white text-2xl p-4' onClick={handleNextSlide}>
                    <FaAngleRight />
                </button>
            </div>

            {/* category cart */}
            <div className='absolute lg:top-[450px] top-56'>
                <div className='flex'>
                    <p className='pl-8 font-bold text-white text-md'>Movies Category</p>
                    <p className='pl-7 font-bold cursor-pointer text-green-700'>See All</p>
                </div>
                <MovieCategoryCard></MovieCategoryCard>
            </div>

        </div>
    );
};

export default Slider;