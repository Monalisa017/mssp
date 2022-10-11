import { ThemeProvider } from '@emotion/react';
import React, { Component }  from 'react';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppRoutes } from './routes';
import { LightTheme } from './shared/themes/Light';

export const App = () => {

  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <AppRoutes />
          <ToastContainer />

      </BrowserRouter>

    </ThemeProvider>
  );
}

