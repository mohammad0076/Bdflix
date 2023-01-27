import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AllMovies = () => {


    const navigate = useNavigate()

const [allMovie, setAllMovie] = useState([])
const [refresh, setRefresh] = useState(true)

useEffect(()=>{
    fetch("http://localhost:5000/allMovie")
    .then(res => res.json())
    .then (data =>{
        setAllMovie(data)
     
    })
    .catch((err) => toast.error(err.message))
}, [])




const updateButton = (id) =>{
    navigate('/admin/updatemovie', {state:{id}})
}




const handleDelete = (id) => {
   
    fetch(`http://localhost:5000/allMovie/${id}`, {
        method: "DELETE",
    })
        .then(res => res.json())
        .then(data => {

          console.log('data', data)
            if (data.success) {
                toast.success(data.message);

                setRefresh(refresh);
            } else {
                toast.error(data.error);
            }
            navigate('/admin/allmoives')

        }).catch(err => toast.error(err.message))
};









    return (
        <div className='bg-[#3a3b3c] w-full rounded-lg  grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1' >
            {
                allMovie.map((singleMovie, i)=> <div key={singleMovie._id} className=" cursor-pointer p-1 rounded-md shadow-md dark:text-gray-50">
                <img src={singleMovie.poster_path} alt="" className="object-cover w-[100%] rounded-md h-72" />
                <div className="mt-6 mb-2 ">
                    <span className="block text-xs  font-semibold tracking-widest uppercase dark:text-green-600">{singleMovie.original_title}</span>
                    
                    <div className='flex justify-between mt-3'>
                    <button  onClick={() => handleDelete(singleMovie._id)} className='bg-emerald-600 mb-6 text-center hover:bg-teal-500 px-5 py-2 rounded-full font-bold'>Delete</button>
                    <button onClick={()=>updateButton(singleMovie._id)} className='bg-emerald-600 mb-6 text-center hover:bg-teal-500 px-5 py-2 rounded-full font-bold'>Update </button>
              
                    </div>
                    
                      </div>

            </div>)
            }
        </div>
    );
};

export default AllMovies;