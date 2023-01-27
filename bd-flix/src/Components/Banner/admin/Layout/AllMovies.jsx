import React, { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const AllMovies = () => {


const [allMovie, setAllMovie] = useState([])
const [refresh, setRefresh] = useState(false)

useEffect(()=>{
    fetch("http://localhost:5000/allMovie")
    .then(res => res.json())
    .then (data =>{
        setAllMovie(data)
        
    })
    .catch((err) => toast.error(err.message))
}, [])





    return (
        <div className='bg-[#3a3b3c] w-full rounded-lg  grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1' >
            {
                allMovie.map((singleMovie, i)=> <div key={singleMovie._id} className=" cursor-pointer p-1 rounded-md shadow-md dark:text-gray-50">
                <img src={singleMovie.poster_path} alt="" className="object-cover w-[100%] rounded-md h-72" />
                <div className="mt-6 mb-2 ">
                    <span className="block text-xs  font-semibold tracking-widest uppercase dark:text-green-600">{singleMovie.original_title}</span>
                    <button  className='bg-emerald-600 mb-6 text-center hover:bg-teal-500 px-5 py-2 rounded-full font-bold'>Delete</button>
                    <button  className='bg-emerald-600 mb-6 text-center hover:bg-teal-500 px-5 py-2 rounded-full font-bold'>Up Date</button>
                </div>

            </div>)
            }
        </div>
    );
};

export default AllMovies;