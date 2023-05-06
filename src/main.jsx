import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, } from "react-router-dom";
import { router } from './Router';
import { AuthContextProvider } from './hooks/AuthContext';
import { ChatContextProvider } from './hooks/ChatContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <ChatContextProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </ChatContextProvider>
  </AuthContextProvider>
);


