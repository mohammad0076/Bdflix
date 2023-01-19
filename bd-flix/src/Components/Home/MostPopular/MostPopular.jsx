import React, { useState } from 'react';
import './poster.css';
import { AiOutlineArrowRight } from "react-icons/ai"
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MostPopular = () => {

    const navigate = useNavigate();



    const PopularMovies = [

        {
            "name": "Bandhobi",
            "PhotoUrl": "https://i.ibb.co/7rjktyD/bandhobi2.png"
        },
        {
            "name": "Ekti Sobuj Bag",
            "PhotoUrl": "https://i.ibb.co/8mr5s3D/akti3.png"
        },
        {
            "name": "Shadi main...",
            "PhotoUrl": "https://i.ibb.co/gvYsqG1/shadhi4.png"
        },
        {
            "name": "Shukrana",
            "PhotoUrl": "https://i.ibb.co/D8zQLf9/shukra5.png"
        },
        {
            "name": "Ant Man",
            "PhotoUrl": "https://i.ibb.co/G0Z59XG/ant6.png"
        },
        {
            "name": "Bizli",
            "PhotoUrl": "https://i.ibb.co/Ph52WTw/bizli7.png"
        },
        {
            "name": "Movie Name",
            "PhotoUrl": "https://i.ibb.co/7rjktyD/bandhobi2.png"
        }
    ]

    const [arrowButtonVisibility, setArrowButtonVisibility] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevSlide = () => {
        setCurrentIndex(currentIndex - 1);
    };

    const handleNextSlide = () => {
        setCurrentIndex(currentIndex + 1);
    };

    const handleClickVideo = (movie) => {
        navigate('/clickedvideo', { state: { movie } })
    }


    return (
        <div className='ml-8 my-12 lg:my-0'>
            <div className='flex justify-between mb-3'>
                <h1 className='text-md   font-bold text-white'>Most Popular</h1>
                <p className='text-white inline'>See all <AiOutlineArrowRight className='inline text-red-500'></AiOutlineArrowRight></p>
            </div>
            <>

                <div className="carousel carousel-center lg:h-[20vw]"
                    onMouseEnter={() => setArrowButtonVisibility(true)}
                    onMouseLeave={() => setArrowButtonVisibility(false)}
                >
                    <div className="carousel-item">
                        {
                            PopularMovies.map((images, index) => (
                                <div onClick={() => handleClickVideo(images.name)}
                                    key={index}
                                    className={`carousel-item cursor-pointer ${index === currentIndex ? 'active' : ''}`}
                                    style={{
                                        transform: `translateX(${-100 * currentIndex}%)`,
                                        transition: 'transform 0.3s ease-in-out',
                                    }}>

                                    <div className="carousel-item mr-3 h-[200px] relative">
                                        <img
                                            className='object-cover rounded-sm w-[150px] h-[190px] lg:h-60 lg:w-full transition-transform duration-300 ease-in-out transform hover-zoom'
                                            src={images.PhotoUrl} alt=''
                                        ></img>
                                        <h2 className=" absolute lg:bottom-3 text-center md:text-md text-md font-semibold text-white mx-2 ">{images.name}</h2>
                                    </div>
                                </div>
                            ))
                        }

                        <button
                            className={`lg:block hidden absolute bottom-[1550px] bg-white text-red-700 rounded-full left-0 p-4 ${arrowButtonVisibility ? '' : 'hidden'}`}
                            onClick={handlePrevSlide}
                        >
                            <FaAngleLeft />
                        </button>

                        <button
                            className={`lg:block hidden absolute bottom-[1550px] bg-white rounded-full right-0 text-red-700 p-4 ${arrowButtonVisibility ? '' : 'hidden'}`}
                            onClick={handleNextSlide}
                        >
                            <FaAngleRight />
                        </button>
                    </div>
                </div>

            </>
        </div>
    );
};

export default MostPopular;