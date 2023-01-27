import React from 'react';
import { toast } from 'react-toastify';

const UploadMovies = () => {


const handleSubmit = event =>{
  event.preventDefault()



  const image = event.target.image.files[0]
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


  fetch(url,{
    method: 'POST',
    body: formData
  }).then(res => res.json())
  .then(ImageData => {


    const addMovie ={
      image:ImageData.data.url,
      category:movieWithoutSpaces,
      original_title,
      overview,
      poster_path,
      vote_average,
      // video
    }
    

    fetch('http://localhost:5000/addMovie', {
      method: 'POST',
      headers: { 'content-type': 'application/json', },
      body: JSON.stringify(addMovie)
  })
  .then(res => res.json())
  .then(data =>{
    addMovie.reload()
      console.log(data);
      toast.success('Your Product is added successfully');
  })

})


}

    return (
        <div className='bg-[#3a3b3c]  w-full  rounded-lg text-center'>
            <div className="hero my-4 ">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Uploaded Your Movie</h1>
     
    </div>
    <form onSubmit={handleSubmit}>
    <div className="card mt-4 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">





        <div className="form-control">
          <label className="label">
            <span className="label-text">Movie Title</span>
          </label>
          <input type="text" name='original_title' placeholder="Movie Title" className="input input-bordered" />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Overview</span>
          </label>
          <input type="text" name='overview' placeholder="Overview" className="input input-bordered" />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Image Upload</span>
          </label>
          <input type="file" name='poster_path' accept='image/*'  required placeholder="Image Upload" className="input input-bordered" />
        </div>



            {/* this is video upload  */}


        <div className="form-control">
          <label className="label">
            <span className="label-text">Video Upload</span>
          </label>
          <input type="file" name='image' accept='image/*'  required placeholder="Image Upload" className="input input-bordered" />
        </div>





        <div className="form-control">
        <label className="label">
            <span className="label-text">Catagories </span>
          </label>
        <select name='productCatagories' className="input input-bordered" >
                <option>Most Popular Movie</option>
                <option>Movies For You</option>
                <option>Post Popular Movie</option>
              </select>
              </div>
        <div className="form-control mt-6">
          <button type= "submit" value="Click to Upload" className=" font-bold p-3 rounded-lg btn-primary">Click to Upload</button>
        </div>
      </div>
    </div>
    </form>
  </div>
</div>
        </div>
    );
};

export default UploadMovies;