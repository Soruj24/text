import React from 'react'
import ReactDOM from 'react-dom/client' 
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/index.jsx'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer/>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
