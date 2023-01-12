import React from 'react';
import './MoviesForYou.css';
import {AiOutlineArrowRight} from "react-icons/ai"






const MoviesForYou = () => {



    const PopularMovies = [
        {
            "name": "Avengers",
            "PhotoUrl": "https://i.ibb.co/rs5DVjP/avenger1.png"
        },
        {
            "name": "Panther",
            "PhotoUrl": "https://i.ibb.co/N34wFcF/Panther2.png"
        },
        {
            "name": "Bizli",
            "PhotoUrl": "https://i.ibb.co/KDNWn2h/Bizli3.png"
        },
        {
            "name": "Pashan",
            "PhotoUrl": "https://i.ibb.co/K9n2VsZ/pasan4.png"
        },
        {
            "name": "Movie Name",
            "PhotoUrl": "https://i.ibb.co/rs5DVjP/avenger1.png"
        },
        {
            "name": "Movie Name",
            "PhotoUrl": "https://i.ibb.co/rs5DVjP/avenger1.png"
        },
        {
            "name": "Movie Name",
            "PhotoUrl": "https://i.ibb.co/rs5DVjP/avenger1.png"
        },
        {
            "name": "Movie Name",
            "PhotoUrl": "https://i.ibb.co/rs5DVjP/avenger1.png"
        }
    ]







    return (
        <div className='mx-2 md:mx-8 mt-10'>
            <div className='flex justify-between mb-5'>
                <h1 className='text-2xl font-bold text-white'>Movies For You</h1>
                <p className='text-white inline'>See all <AiOutlineArrowRight className='inline text-red-500'></AiOutlineArrowRight></p>
            </div>
            <div className='carousel-item'>
                {
                    PopularMovies?.slice(0, 7).map(movies => <div className=" carousel-item w-36 md:w-48 lg:w-80 m-1 md:m-2 image-full transition-transform duration-300 ease-in-out transform hover:scale-110">
                        <div className='relative'>
                            <figure className='poster-img'>
                                <img className='' src={movies.PhotoUrl} alt="Shoes" />
                            </figure>
                            <h2 className=" absolute bottom-2 text-center md:text-xl  font-bold text-white  mx-2 ">{movies.name}</h2>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MoviesForYou;