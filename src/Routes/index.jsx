import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login';
import Cadastro from '../Pages/Cadastro';
import Loja from '../Pages/Loja';
import Detalhes from '../Components/Detalhes';

function Routers() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/detalhes/:id" element={<Detalhes />} />
      </Routes>
    </HashRouter>
  );
}

export default Routers;
