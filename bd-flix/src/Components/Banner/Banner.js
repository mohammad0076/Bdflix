import React from 'react';
import './Banner.css'
import bannerImage from '../Banner/BannerImage/banner_backgroud.png'
import NisaImage from '../Banner/BannerImage/misha (1).jpeg'
import MovieCategoryCard from '../Home/IndexSlider/MoviesCategory/MovieCategoryCard';

const Banner = () => {
    const myStyle={
        backgroundImage: `url(${bannerImage})`,
        height:'737px',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div style={myStyle}>
            <div className=' flex justify-between'>
                <div className="title ml-10 w-1/4 text-xl text-white">
                    <h2 className=' font-bold py-3'>Kabadi</h2>
                    <h5 className='py-2'>Drama, Mystory, Thriller</h5>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type </p>
                    <h1 className='py-3'>* New Episode Released</h1>
                    <button className='pt-2 button_color p-2 rounded font-bold '>SELL ALL</button>
                </div>
                <div className='mr-0'>
                    <img className='h-full banner_image' src={NisaImage}></img>
                </div>
            </div>
            <div>
            <MovieCategoryCard></MovieCategoryCard>
            </div>

        </div>
    );
};

export default Banner;