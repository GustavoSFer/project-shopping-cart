import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
import logo from '../imagens/logo.png';
import carrinho from '../imagens/carrinho-de-mao.png';
import filtro from '../imagens/filter.png';
import lupa from '../imagens/lupa.png';

function Header() {
  const [pesquisar, setPesquisar] = useState('');
  return (
    <main>
      <div className="border border-success d-flex justify-content-between height">

        <div className="logo">
          <a href="/loja"><img src={logo} alt="logo" /></a>
        </div>

        <div className="d-flex justify-content-between">
          <Input
            type="text"
            name="Pesquisar"
            handleChange={(e) => setPesquisar(e.target.value)}
            value={pesquisar}
            sty="search w-25"
          />
          <Button click={() => ('fd')} sty="search w-25">
            <img src={lupa} alt="pesquisar" className="img" />
          </Button>
        </div>

        <div className="d-flex align-items-center">
          <Button click={() => ('fd')} sty="btn-filter-cart">
            <img src={filtro} alt="filtro" className="teste" />
          </Button>
          <Button click={() => ('fd')} sty="btn-filter-cart">
            <img src={carrinho} alt="Carrinho" className="teste" />
          </Button>
        </div>

      </div>
    </main>
  );
}

export default Header;
