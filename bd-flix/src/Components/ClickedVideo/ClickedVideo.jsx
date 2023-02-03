import React, { useRef, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BiShareAlt } from 'react-icons/bi';
import { FiDownload } from 'react-icons/fi';
import { MdPlaylistAdd } from 'react-icons/md';
import { AiFillPlayCircle } from 'react-icons/ai';
import Recommended from '../Recommended/Recommended';
import MoreFromThisCategory from '../MoreFromThisCategory/MoreFromThisCategory';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { useEffect } from 'react';
import ClickedVideoReview from './ClickedVideoReview';



const ClickedVideo = () => {
    const data = useLoaderData();
    const [recomended, setRecomended] = useState([]);
    const [video, setVideo] = useState(data?.video);
    useEffect(() => {
        fetch(`http://localhost:5000/recommend/${data.original_title}`)
            .then(res => res.json())
            .then(result => setRecomended(result))
    }, [])



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

    // Start Like and dislike post---------------------------------------->
    const [like, setLike] = useState(0);
    const [isLike, setIsLike] = useState(false);


    const onLikeButtonClick = () => {

        setIsLike(!isLike);
        setLike(like + (isLike ? -1 : 1));

    }


    const [play, setPlay] = useState(false);
    //End of Like and Dislike-------------------------------------->
    //Download-------------------------------------->

    const videoRef = useRef(null);

    const handleDownload = () => {
        const videoSrc = videoRef.current.src;
        const a = document.createElement("a");
        a.href = videoSrc;
        a.download = data?.video;
        a.click();
    };
    //End of Download-------------------------------------->
    return (
        <div className='mx-2 md:mx-4'>
            <div className='lg:grid grid-cols-3 gap-1'>
                <div className='col-span-2'>

                    <div className='relative h-[500px] my-8'>

                        {!play ?
                            <div className='relative'>
                                <img className='object-cover w-full h-[500px]' src={data.poster_path} alt='poster'></img>
                                <div className='absolute lg:inset-0 lg:bg-black lg:opacity-50'></div>

                            </div> :
                            <video ref={videoRef} className='h-full w-full' controls={play} autoPlay src={video}>
                            </video>}
                        <button onClick={() => setPlay(!play)}>{play ? '' :
                            <AiFillPlayCircle className='text-4xl md:text-6xl text-green-700 absolute top-2/4 left-2/4'></AiFillPlayCircle>}</button>

                    </div>
                    <div className=''>

                        <div className='my-5 flex justify-between'>

                            <p className='text-2xl font-bold mt-2'>{data.release_date}</p>
                            <div className='flex justify-center items-center gap-16 font-bold'>
                                <div className='flex justify-center items-center gap-10'>

                                    <div className={"" + (isLike ? "text-blue-500" : "")}>
                                        <FaThumbsUp onClick={onLikeButtonClick}
                                            className="text-2xl mx-auto cursor-pointer" />
                                        <p className="text-xs text-white">Likes {like}</p>
                                    </div>



                                    <div className=''>
                                        <MdPlaylistAdd className='text-2xl mx-auto'></MdPlaylistAdd>
                                        <p className='text-xs -mt-1'>WatchList</p>
                                    </div>
                                    <div>
                                        <BiShareAlt className='text-xl mx-auto'></BiShareAlt>
                                        <p className='text-xs'>Share</p>
                                    </div>
                                    <button onClick={handleDownload} className='cursor-pointer'>
                                        <FiDownload className='text-xl mx-auto'></FiDownload>
                                        <p className='text-xs'>Download</p>
                                    </button>
                                </div>
                            </div>
                        </div>


                        <div className='bg-slate-900 my-5 p-5 rounded'>
                            <p className='font-bold'>{data.title ? data.title : data.original_title}</p>
                            <p className='text-xl my-2'>Description</p>
                            <p className='text-xs text-'>{data.overview}</p>
                        </div>
                        <div>
                            <ClickedVideoReview data={data} />
                        </div>
                    </div>



                </div>
                {/* Recomendation------------------------------------------------------------------------ */}
                <div className='mx-auto my-5'>
                    <p className='text-xl font-bold mb-3 text-center'>Recommended</p>
                    <div className='mx-auto'>
                        <div className="grid lg:grid-cols-2 grid-cols-3 gap-5">
                            {
                                recomended?.slice(0, 6).map(movies =>
                                    <Recommended
                                        video={video}
                                        setVideo={setVideo}
                                        movies={movies}></Recommended>
                                )
                            }
                        </div>
                    </div>
                </div>

                {/* Recomendation------------------------------------------------------------------------ */}
            </div>
            <div className='my-5'>
                <p className='text-xl font-bold mb-3 text-center'>More from this category</p>
                <div className='mx-auto'>
                    <div className="grid lg:grid-cols-7 md:grid-cols-4 grid-cols-3 gap-4">
                        {
                            PopularMovies?.map(movies =>
                                <MoreFromThisCategory movies={movies}></MoreFromThisCategory>
                            )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ClickedVideo;