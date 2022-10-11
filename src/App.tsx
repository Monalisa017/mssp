import React, { Component }  from 'react';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppRoutes } from './routes';

export const App = () => {
  const notify = () => toast("Wow so easy!")
  return (
    <BrowserRouter>
      <AppRoutes />

      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

