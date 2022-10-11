import React, { Component }  from 'react';
import Button from '@mui/material/Button/Button';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';



export const AppRoutes = () => {
    function Teste(){
        toast.success("Funcionando!")
    };
    return(
        <Routes>
            <Route path="/pagina-inicial" element={<Button variant='contained' color='primary' onClick={() => Teste()}>Teste Material</Button>} />
            <Route path="*" element={<Navigate to="pagina-inicial" />} />
        </Routes>
    );
};