import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Forget from "../../Components/Context/Authprovider/Authintication/Forget";
import Login from "../../Components/Context/Authprovider/Authintication/Login";
import Reset from "../../Components/Context/Authprovider/Authintication/Reset";
import Signup from "../../Components/Context/Authprovider/Authintication/Signup";
import HomePage from "../../Components/Home/IndexPage/HomePage";
import Main from "../../Main/Main";

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
            }
        ]
    },
]);
export default router;