import React, { useState } from 'react';
import './poster.css';
import { AiOutlineArrowRight } from "react-icons/ai"
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const MostPopular = () => {
    const [loading, setLoading] = useState(false);
    const [MostPopular, setMostPopular] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch('https://bd-flix-server-i4wbktqxf-mohammad0076.vercel.app/allmovie/MostPopularMovie')
            .then(res => res.json())
            .then(res => {
                setMostPopular(res)
                setLoading(false)
            })
    }, [])

    // let image = 'https://image.tmdb.org/t/p/w500/';

    // const PopularMovies = [
    //     {
    //         "name": "Bandhobi",
    //         "PhotoUrl": "https://i.ibb.co/7rjktyD/bandhobi2.png"
    //     },
    //     {
    //         "name": "Ekti Sobuj Bag",
    //         "PhotoUrl": "https://i.ibb.co/8mr5s3D/akti3.png"
    //     },
    //     {
    //         "name": "Shadi main...",
    //         "PhotoUrl": "https://i.ibb.co/gvYsqG1/shadhi4.png"
    //     },
    //     {
    //         "name": "Shukrana",
    //         "PhotoUrl": "https://i.ibb.co/D8zQLf9/shukra5.png"
    //     },
    //     {
    //         "name": "Ant Man",
    //         "PhotoUrl": "https://i.ibb.co/G0Z59XG/ant6.png"
    //     },
    //     {
    //         "name": "Bizli",
    //         "PhotoUrl": "https://i.ibb.co/Ph52WTw/bizli7.png"
    //     },
    //     {
    //         "name": "Movie Name",
    //         "PhotoUrl": "https://i.ibb.co/7rjktyD/bandhobi2.png"
    //     },
    //     {
    //         "name": "Bandhobi",
    //         "PhotoUrl": "https://i.ibb.co/7rjktyD/bandhobi2.png"
    //     },
    //     {
    //         "name": "Bandhobi",
    //         "PhotoUrl": "https://i.ibb.co/7rjktyD/bandhobi2.png"
    //     },
    // ]

    const [arrowButtonVisibility, setArrowButtonVisibility] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevSlide = () => {
        setCurrentIndex(currentIndex - 1);
    };

    const handleNextSlide = () => {
        setCurrentIndex(currentIndex + 1);
    };

    return (
    
                    <div className='relative ml-8 my-12 lg:my-0'>
                        <div className='flex justify-between mb-3'>
                            <h1 className='text-md   font-bold text-white'>Most Popular</h1>
                            <p className='text-white inline'>See all <AiOutlineArrowRight className='inline text-red-500'></AiOutlineArrowRight></p>
                        </div>
                       {
                        loading? "Loading...": <>

                        <div className="carousel carousel-center lg:h-[20vw] h-full"
                            onMouseEnter={() => setArrowButtonVisibility(true)}
                            onMouseLeave={() => setArrowButtonVisibility(false)}
                        >
                            <div className="carousel-item">
                                {
                                    MostPopular.map((images, index) => (
                                        <div
                                            key={index}
                                            className={`carousel-item cursor-pointer ${index === currentIndex ? 'active' : ''}`}
                                            style={{
                                                transform: `translateX(${-100 * currentIndex}%)`,
                                                transition: 'transform 0.3s ease-in-out',
                                            }}>

                                            <Link to={`/clickedvideo/${images.id}`} className="carousel-item mr-3 lg:h-[200px] overflow-hidden">
                                                <div className='relative transition-transform duration-300 ease-in-out transform hover-zoom'>

                                                    <img
                                                        className='object-cover rounded-sm w-[100px] h-[200px] lg:h-[190px] lg:w-full'
                                                        src={images.poster_path} alt=''
                                                    ></img>

                                                    <h2 className=" absolute bottom-[8%] left-0 md:text-md text-md font-semibold text-white mx-2 ">{images.name}</h2>
                                                    <div className="most-popular-gradient absolute bottom-0 left-0 w-full h-2/6"></div>
                                                </div>

                                            </Link>
                                        </div>
                                    ))
                                }

                                <button
                                    className={`lg:block hidden absolute bottom-[50%] text-2xl text-white rounded-full left-0 p-4 ${arrowButtonVisibility ? '' : 'hidden'}`}
                                    onClick={handlePrevSlide}
                                >
                                    <FaAngleLeft />
                                </button>

                                <button
                                    className={`lg:block hidden absolute bottom-[50%] text-2xl rounded-full right-0 text-white p-4 ${arrowButtonVisibility ? '' : 'hidden'}`}
                                    onClick={handleNextSlide}
                                >
                                    <FaAngleRight />
                                </button>
                            </div>
                        </div>

                    </>
                       }
                    </div>
        
    );
};

export default MostPopular;