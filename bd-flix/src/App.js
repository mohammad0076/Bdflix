import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Route/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Skeleton } from "@mui/material";
import Box from '@mui/material/Box';
import { Rings } from 'react-loader-spinner'
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from './Components/Context/Authprovider/Authprovider';

function App() {
  const { mode } = useContext(AuthContext)

  return (
    <div className={`App ${mode}`}>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

    </div>
  );
}

export default App;
