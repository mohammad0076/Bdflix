import React from 'react';
import { useLocation } from 'react-router-dom';
import { BiListPlus, BiShareAlt } from 'react-icons/bi';
import { FiDownload } from 'react-icons/fi';
import { MdPlaylistAdd } from 'react-icons/md';
import { AiFillPlayCircle } from 'react-icons/ai';



const ClickedVideo = () => {

    const { state } = useLocation();
    const movie = state.movie;






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




    return (
        <div className='mx-2 md:mx-4'>
            <div className='lg:grid grid-cols-3 gap-1'>
                <div className='col-span-2'>
                    <div  className='relative'>
                        <img src='https://i.ibb.co/gTqPc2T/Rectangle-39-5.png' alt='poster'></img>
                        <AiFillPlayCircle className='text-4xl md:text-6xl text-red-600 absolute top-1/2 left-1/2'></AiFillPlayCircle>

                    </div>
                    <div className='md:flex justify-between'>
                        <div>
                            <p className='text-4xl font-bold mt-4'>{movie}</p>
                            <p className='text-2xl font-bold mt-2'><span>2018</span> / <span>2h 30m</span></p>
                            <p className=' mt-2'>Bangladeshi superhero movie</p>
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                            <div className=''>
                                <MdPlaylistAdd className='text-2xl mx-auto'></MdPlaylistAdd>
                                <p className='text-xs -mt-1'>WatchList</p>
                            </div>
                            <div>
                                <BiShareAlt className='text-xl mx-auto'></BiShareAlt>
                                <p className='text-xs'>Share</p>
                            </div>
                            <div>
                                <FiDownload className='text-xl mx-auto'></FiDownload>
                                <p className='text-xs'>Download</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='text-xl'>Description</p>
                        <p className='text-xs text-'>Bizli Bengali: বিজলী, 'lightning' is a 2018 Bangladeshi superhero film directed by Iftakar Chowdhury, and produced by Bobstar Films. It stars Bobby as the protagonist and Indian actress Satabdi Roy as the antagonist. The film was released at Janata Cinema Hall in Nilphamari on 30 March 2018, then released countrywide on 13 April 2018. It is the first superhero film in Bangladesh to possess an original script and story line.</p>
                    </div>
                </div>
                <div className='mx-auto my-5'>
                    <p className='text-xl font-bold mb-3'>Suggested For You</p>
                    <div className='carousel carousel-center mx-auto'>
                        <div className="carousel-item lg:grid grid-cols-2">
                            {
                                PopularMovies?.slice(0, 6).map(movies => <div className=" carousel-item w-24 md:w-40 lg:w-40 m-1 md:m-2 image-full cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 ">
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

                </div>

            </div>

            <div className='mx-auto my-5'>
                <p className='text-xl font-bold mb-3'>More from this category</p>
                <div className='carousel carousel-center mx-auto'>
                    <div className="carousel-item ">
                        {
                            PopularMovies?.map(movies => <div className=" carousel-item w-24 md:w-40 lg:w-40 m-1 md:m-2 image-full cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 ">
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

            </div>
        </div>
    );
};

export default ClickedVideo;