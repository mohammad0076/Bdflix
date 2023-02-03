import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const MovieUpdate = (singleMovie) => {
  const [loading, setLoading] = useState(false);
  const { state } = useLocation();

  const updateData = state.singleMovie



  const navigate = useNavigate()





  const handleSubmit = event => {
    event.preventDefault()



    const image = event.target.poster_path.files[0]


    const catagories = event.target.productCatagories.value
    const overview = event.target.overview.value
    const poster_path = event.target.poster_path.value
    const vote_average = ""
    // const video = event.target.video.value
    const original_title = event.target.original_title.value

 

    let catagoriesWithOutSpace = catagories
    let movieWithoutSpaces = catagoriesWithOutSpace.replace(/ /g, "");



    const formData = new FormData()
    formData.append('image', image)

    const url = "https://api.imgbb.com/1/upload?key=455300bd4645b3d5f212e2ce5e751d05"


    fetch(url, {
      method: 'POST',
      body: formData
    }).then(res => res.json())
      .then(ImageData => {


console.log(ImageData)

        const updateMovie = {
          image: ImageData.data.url,
          category: movieWithoutSpaces,
          original_title,
          overview,
          poster_path,
          vote_average,
          // video
        }

        console.log(updateMovie)


        fetch(`https://bd-flix-server-i4wbktqxf-mohammad0076.vercel.app/updateMovie/${updateMovie}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(updateMovie)
        })
          .then(res => res.json())
          .then(data => {

            if (data.success) {
              toast.success(data.message);
            } else {
              toast.error(data.error);
            }

            navigate('/admin/allmovies')


          }).catch(err => toast.error(err.message))

      })


  }








  return (

    <div className='bg-slate-900 w-full  rounded-lg text-center'>
      <div className="hero my-4 ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Update Your Movie</h1>

          </div>
          <form onSubmit={handleSubmit}>
            <div className="card mt-4 w-full">
              <div className="card-body grid lg:grid-cols-2 grid-cols-1">

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-xl">Title: {updateData.original_title}</span>
                  </label>
                  <input type="text" required name='original_title' placeholder="Change Title Type Here" className="input bg-transparent rounded-md input-bordered" />
                </div>


                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-xl">Overview: {updateData.overview.slice(0, 30) + "..."}</span>
                  </label>
                  <input type="text" required name='overview' placeholder=" Change overview type here" className="input bg-transparent rounded-md input-bordered" />
                </div>


                <div className="form-control">
                <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold">Banner</span>
                </label>
                <img className='w-[200px] h-[200px]' src={updateData.poster_path} alt=" Banner"/>
  
                {/* <input type="file" name='video' required placeholder="Image Upload" className="input input-bordered" /> */}
              </div>
                  <label className="label">
                    <span className="label-text">Image Upload</span>
                  </label>
                  <div className="flex">
                    <input type="file" required name="poster_path" accept='image/*' id="files" className="px-8 py-12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" />
                  </div>
                  {/* <input type="file" required name='poster_path' accept='image/*' placeholder="Image Upload" className="input input-bordered" /> */}
                </div>
                {/* this is video upload  */}

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Video Upload</span>
                  </label>
               { /*  <div className="flex">
                    <input type="file" required name="video" id="files" className="px-8 py-12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" />
                  </div>*/}
                  {/* <input type="file" name='video' required placeholder="Image Upload" className="input input-bordered" /> */}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Catagories: {updateData.category} </span>
                  </label>
                  <select name='productCatagories' className="input rounded-md bg-transparent input-bordered" >
                    <option className='bg-slate-900'>Most Popular Movie</option>



                   <option className='bg-slate-900'>Movies For You</option>
                    <option className='bg-slate-900'>Post Popular Movie</option>


                    
                  </select>
                </div>
              </div>
                <div className="form-control mt-6">
                  <button className=" font-bold p-3 rounded-lg bg-green-700">{loading ? "Loading..." : "Update"}</button>
                </div>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
};

export default MovieUpdate;