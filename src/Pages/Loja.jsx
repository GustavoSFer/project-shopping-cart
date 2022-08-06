import React, { useState } from 'react';
import Button from '../Components/Button';
import Input from '../Components/Input';
import logo from '../imagens/logo.png';
import carrinho from '../imagens/carrinho-de-mao.png';
import filtro from '../imagens/filter.png';
import lupa from '../imagens/lupa.png';

function Loja() {
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

        <div className="d-flex justify-content-between">
          <div className="filtar-and-cart">
            <Button click={() => ('fd')} sty="btn-filter-cart">
              <img src={filtro} alt="filtro" />
            </Button>
          </div>
          <div className="filtar-and-cart">
            <Button click={() => ('fd')} sty="btn-filter-cart">
              <img src={carrinho} alt="Carrinho" className="img" />
            </Button>
          </div>
        </div>

      </div>
    </main>
  );
}

export default Loja;
