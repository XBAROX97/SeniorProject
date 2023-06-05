import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { useContext } from "react";
import { AuthContext } from "./hooks/AuthContext";
import {  Navigate } from "react-router-dom";

const App = () => {


 
  return (

    
    <div className="overflow-hidden">
    
      <Outlet />
      <Toaster
        position='top right'
      />
    </div>
  )
}

export default App