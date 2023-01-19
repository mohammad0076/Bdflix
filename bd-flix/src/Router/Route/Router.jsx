import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ClickedVideo from "../../Components/ClickedVideo/ClickedVideo";
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
                path: '/clickedvideo',
                element: <ClickedVideo></ClickedVideo>
            }
        ]
    },
]);
export default router;