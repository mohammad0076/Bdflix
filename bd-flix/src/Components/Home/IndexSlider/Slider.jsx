import React, { useEffect, useState } from 'react';
import img1 from '../../../SlideImages/img2.png';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import MovieCategoryCard from './MoviesCategory/MovieCategoryCard';
const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const slider = [
    { sliderImage: img1, moviesName: "panthar", publishedDate: "", },
    { sliderImage: 'https://cdn.bioscopelive.com/upload/slide/topBannerMobile/wl7K42Ty8lv.jpg', moviesName: "panthar", publishedDate: "", },
    { sliderImage: 'https://cdn.bioscopelive.com/upload/slide/topBannerMobile/9vz5k067H1o.jpg', moviesName: "panthar", publishedDate: "", },
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
        <div className='relative h-[850px]'>
            <div className='relative'>
                <div className='absolute inset-0'>
                    <div className='relative'>
                        <img
                            className='object-fit-scale-down h-screen w-screen'
                            src={slider[currentSlide].sliderImage} alt="" />
                        <div className='absolute inset-0 bg-black opacity-50'></div>
                    </div>
                </div>
                <button className='absolute top-56 bg-white text-red-700 rounded-full left-0 p-4' onClick={handlePrevSlide}>
                    <FaAngleLeft />
                </button>
                <button className='absolute top-56 bg-white rounded-full right-0 text-red-700 p-4' onClick={handleNextSlide}>
                    <FaAngleRight />
                </button>
            </div>

            {/* category cart */}
            <div className='absolute lg:top-[450px] top-80'>
                <div className='flex'>
                    <p className='pl-8 font-bold text-white text-lg'>Movies Category</p>
                    <p className='pl-7 font-bold cursor-pointer text-green-700'>See All</p>
                </div>
                <MovieCategoryCard></MovieCategoryCard>
            </div>

        </div>
    );
};

export default Slider;