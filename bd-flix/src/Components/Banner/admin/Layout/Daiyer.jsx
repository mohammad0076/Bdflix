import React from "react";
import { Link } from "react-router-dom";
import AllUsers from "./AllUsers";

const Daiyer = () => {
  return (
    <div>
        <div>

          <ul className="bg-green-900 md:h-96 border-rounded-10 sm:w-48 lg:h-80 p-4 w-80  text-base-content">

            <div className="avatar ">
                
              <div className="w-12 rounded-full">
                <img src="https://placeimg.com/192/192/people" />
              </div>             
            </div>
            <li>
              <Link to="/admin/uploadmovies">Upload Movies</Link>
            </li>
            <li>
              <Link to="/admin/allmovies">All Movies</Link>
            </li>
            <li>
              <Link to="/admin/allusers">All Users</Link>
            </li>
          </ul>
        </div>
      </div>

  );
};

export default Daiyer;
