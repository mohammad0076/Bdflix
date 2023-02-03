import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Route/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import SplashScreen from './SplashScreen/SplashScreen';
import { AuthContext } from './Components/Context/Authprovider/Authprovider';
import { useContext } from 'react';

function App() {
  const [showFlash, setShowFlash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowFlash(false);
    }, 8000);
  }, []);

  return showFlash ? <SplashScreen></SplashScreen> : <MainContent />;
};
const MainContent = () => {
  const { mode, Togglebutton } = useContext(AuthContext)
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
};



export default App;
