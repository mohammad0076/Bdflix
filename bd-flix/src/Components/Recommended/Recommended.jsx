import React from 'react';

const Recommended = ({ movies, video, setVideo }) => {
    const handleVideo = (newVideo) => {
        setVideo(newVideo);
        console.log("click");
    }
    return (
        <div className=" carousel-item w-full md:w-40 lg:w-40 m-1 md:m-2 image-full cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 ">
            <div className='relative'>
                <figure onClick={
                        () => handleVideo(movies.video)} className='poster-img'>
                    <img
                        src={movies.poster_path} alt="Shoes" />
                </figure>
                {/* <h2 className=" absolute bottom-2 text-center md:text-xl  font-bold text-white  mx-2 ">{movies.original_title}</h2> */}
            </div>
        </div>
    );
};

export default Recommended;