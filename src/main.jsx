import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import RegisterRBS from './components/RegisterRBS/RegisterRBS';
import Main2 from './components/Layout/Main2';
import Home2 from './components/Home/Home2';
import Login2 from './components/Login/Login2';
import Register2 from './components/Register/Register2';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main2></Main2>,
    children: [
      {
        path: '/',
        element: <Home2></Home2>
      },
      {
        path: '/login',
        element: <Login2></Login2>
      },
      {
        path: '/register',
        element: <Register2></Register2>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
