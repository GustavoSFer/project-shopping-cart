import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login';
import Cadastro from '../Pages/Cadastro';
import Loja from '../Pages/Loja';

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/loja" element={<Loja />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
