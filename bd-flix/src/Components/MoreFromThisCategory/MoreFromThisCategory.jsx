import React from 'react';

const MoreFromThisCategory = ({movies}) => {
    return (
        <div className=" carousel-item w-24 md:w-40 lg:w-40 md:m-2 image-full cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 ">
            <div className='relative'>
                <figure className='poster-img'>
                    <img className='' src={movies.PhotoUrl} alt="Shoes" />
                </figure>
                <h2 className=" absolute bottom-2 text-center md:text-xl  font-bold text-white mx-2">{movies.name}</h2>
            </div>
        </div>
    );
};

export default MoreFromThisCategory;