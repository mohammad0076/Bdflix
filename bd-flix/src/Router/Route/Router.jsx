import React from "react";
import { createBrowserRouter } from "react-router-dom";
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
            }
        ]
    },
]);
export default router;