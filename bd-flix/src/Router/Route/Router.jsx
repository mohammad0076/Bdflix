import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Admin from "../../Components/Banner/admin/Admin";
import AllMovies from "../../Components/Banner/admin/Layout/AllMovies";

import AllUsers from "../../Components/Banner/admin/Layout/AllUsers";
import MovieUpdate from "../../Components/Banner/admin/Layout/MovieUpdate";
import UploadMovies from "../../Components/Banner/admin/Layout/UploadMovies";
import ClickedVideo from "../../Components/ClickedVideo/ClickedVideo";
import Forget from "../../Components/Context/Authprovider/Authintication/Forget";
import Login from "../../Components/Context/Authprovider/Authintication/Login";
import Reset from "../../Components/Context/Authprovider/Authintication/Reset";
import Signup from "../../Components/Context/Authprovider/Authintication/Signup";
import HomePage from "../../Components/Home/IndexPage/HomePage";
import Movies from "../../Components/Movies/Movies";
import Premium from "../../Components/Premium/Premium";
import TvShows from "../../Components/Tvshows/Tvshows";
import Main from "../../Main/Main";
import Private from "../Private";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/clickedvideo/:id',
                loader: ({ params }) => fetch(`https://bd-flix-server-i4wbktqxf-mohammad0076.vercel.app/movie/${params.id}`),
                element: <ClickedVideo></ClickedVideo>
            },
            {
                path: '/moviesforyou/:id',
                loader: ({ params }) => fetch(`https://bd-flix-server-i4wbktqxf-mohammad0076.vercel.app/movie/${params.id}`),
                element: <ClickedVideo></ClickedVideo>
            },
            {
                path: '/allmovie/:id',
                loader: ({ params }) => fetch(`https://bd-flix-server-i4wbktqxf-mohammad0076.vercel.app/movie/${params.id}`),
                element: <ClickedVideo></ClickedVideo>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/forget',
                element: <Forget></Forget>
            },
            {
                path: '/resetform',
                element: <Reset></Reset>

            },


            {
                path: '/movies',
                element: <Movies></Movies>

            },
            {
                path: '/tvshows',
                element: <TvShows></TvShows>

            },
            {
                path: '/premium',
                element: <Private><Premium></Premium></Private>

            },



        ]
    },
    {
        path: '/admin',
        element: <Admin />,
        children: [

            {
                path: '/admin',
                element: <AllMovies />

            },
            {
                path: '/admin/allmovies',
                element: <AllMovies />

            },
            {
                path: '/admin/allmovies',
                element: <AllMovies />

            },
            {
                path: '/admin/allusers',
                element: <AllUsers />

            },
            {
                path: '/admin/uploadmovies',
                element: <UploadMovies />

            },
            {
                path: '/admin/updatemovie',
                element: <MovieUpdate />

            },
        ]
    }
]);
export default router;