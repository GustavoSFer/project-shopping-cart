import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login';
import Cadastro from '../Pages/Cadastro';

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
