import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import ErrorPages from "./components/Pages/ErrorPages"; 
 import './index.css'
  import App from "./App";
 import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
  
  
   export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPages />,
      children:[
      
        {
          path: "",
          element: <Login/>,
          errorElement: <ErrorPages/>,
        },
        {
          path: "/login",
          element: <Login/>,
          errorElement: <ErrorPages/>,
        },
        {
            path: "/register",
            element: <Register/>,
            errorElement: <ErrorPages/>,
          },
        {
          path: "/home",
          element: <Home/>,
          errorElement: <ErrorPages />,
        },
     
       
       
      ],
      
    },
  ]);