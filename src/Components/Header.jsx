import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
import logo from '../imagens/logo.png';
import carrinho from '../imagens/carrinho-de-mao.png';
import filtro from '../imagens/filter.png';
import lupa from '../imagens/lupa.png';

function Header() {
  const [pesquisar, setPesquisar] = useState('');
  const [ativarFiltro, setAtivarFiltro] = useState(false);
  const [filter, setFilter] = useState(0);

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
          <Button click={() => setAtivarFiltro(!ativarFiltro)} sty="btn-filter-cart">
            <img src={filtro} alt="filtro" className="teste" />
          </Button>
          <Button click={() => ('fd')} sty="btn-filter-cart">
            <img src={carrinho} alt="Carrinho" className="teste" />
          </Button>
        </div>

      </div>
      {console.log(filter)}
      {
        ativarFiltro && (
          <div className="border border-success d-flex justify-content-evenly">
            <div>
              <select className="form-select">
                <option defaultValue="selecione">= Selecionar =</option>
                <option value="mais barato">Menor preço</option>
                <option value="mais caro">Maior preço</option>
              </select>
            </div>

            <div className="form-check">

              <div className="d-flex flex-column">
                Filtrar por valor:
                <label htmlFor="filterPrice" className="form-check-label">
                  <input
                    type="radio"
                    id="filterPrice"
                    name="filterPrice"
                    className="form-check-input"
                    value="0-50"
                    onChange={(e) => setFilter(e.target.value)}
                  />
                  Entre 0 e 50,00
                </label>
                <label htmlFor="filterPrice" className="form-check-label">
                  <input
                    type="radio"
                    id="filterPrice"
                    name="filterPrice"
                    className="form-check-input"
                    value="50-100"
                    onChange={(e) => setFilter(e.target.value)}
                  />
                  Entre 50,00 e 100,00
                </label>
                <label htmlFor="filterPrice" className="form-check-label">
                  <input
                    type="radio"
                    id="filterPrice"
                    name="filterPrice"
                    className="form-check-input"
                    value="100-200"
                    onChange={(e) => setFilter(e.target.value)}
                  />
                  Entre 100,00 e 200,00
                </label>
                <label htmlFor="filterPrice" className="form-check-label">
                  <input
                    type="radio"
                    id="filterPrice"
                    name="filterPrice"
                    className="form-check-input"
                    value="200-500"
                    onChange={(e) => setFilter(e.target.value)}
                  />
                  Entre 200,00 e 500,00
                </label>
                <label htmlFor="filterPrice" className="form-check-label">
                  <input
                    type="radio"
                    id="filterPrice"
                    name="filterPrice"
                    className="form-check-input"
                    value="501"
                    onChange={(e) => setFilter(e.target.value)}
                  />
                  Acima de 500
                </label>
              </div>
            </div>

          </div>
        )
      }

    </main>
  );
}

export default Header;
