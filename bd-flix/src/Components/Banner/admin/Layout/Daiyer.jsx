import React from "react";
import { Link } from "react-router-dom";
import AllUsers from "./AllUsers";

const Daiyer = () => {
  return (
    <div>
        <div>

          <ul className="bg-[#3a3b3c] md:mr-24 rounded-lg md:h-screen lg:h-screen border-rounded-10 sm:w-48  p-4 w-80  text-base-content">

            <div className="avatar">
                
              <div className="w-12 rounded-full">
                <img src="https://placeimg.com/192/192/people" />
              </div>             
            </div>
            <li className="bg-emerald-600 mb-6 text-center hover:bg-teal-500 p-2 m-2 rounded-full font-bold">
              <Link to="/admin/uploadmovies">Upload Movies</Link>
            </li>
            <li  className="bg-emerald-600 mb-6 text-center hover:bg-teal-500 p-2 m-2 rounded-full font-bold">
              <Link to="/admin/allmovies">All Movies</Link>
            </li>
            <li  className="bg-emerald-600  text-center hover:bg-teal-500 p-2 m-2 rounded-full font-bold">
              <Link to="/admin/allusers">All Users</Link>
            </li>
          </ul>
        </div>
      </div>

  );
};

export default Daiyer;
