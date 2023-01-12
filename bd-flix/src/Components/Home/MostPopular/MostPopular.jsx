import React from 'react';
import './poster.css';
import {AiOutlineArrowRight} from "react-icons/ai"






const MostPopular = () => {


    const PopularMovies = [
        {
            "name": "Wanda Vision",
            "PhotoUrl": "https://i.ibb.co/PTxpjD1/wanda1.png"
        },
        {
            "name": "Bandhobi",
            "PhotoUrl": "https://i.ibb.co/7rjktyD/bandhobi2.png"
        },
        {
            "name": "Ekti Sobuj Bag",
            "PhotoUrl": "https://i.ibb.co/8mr5s3D/akti3.png"
        },
        {
            "name": "Shadi main Joroor ana",
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







    return (
        <div className='mx-2 md:mx-8 mt-15'>
            <div className='flex justify-between mb-3'>
                <h1 className='text-2xl font-bold text-white'>Most Popular</h1>
                <p className='text-white inline'>See all <AiOutlineArrowRight className='inline text-red-500'></AiOutlineArrowRight></p>
            </div>
            <div className='carousel-item'>
                {
                    PopularMovies?.slice(0, 7).map(movies => <div className=" carousel-item w-28 md:w-40 lg:w-48 m-1 md:m-2 image-full cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 ">
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

export default MostPopular;