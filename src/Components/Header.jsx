import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Input from './Input';
import logo from '../imagens/logo.png';
import carrinho from '../imagens/carrinho-de-mao.png';
import filtro from '../imagens/filter.png';
import lupa from '../imagens/lupa.png';
import Carrinho from './Carrinho';
import { RequestGetApi } from '../RequestApi/RequestApi';
import MyContext from '../MyContext/MyContext';

function Header() {
  const [ativarFiltro, setAtivarFiltro] = useState(false);
  const {
    setData,
    optionFilter,
    filterValue,
    setTxtSearch,
    txtSearch,
    ativarCarrinho,
    setAtivarCarrinho,
  } = useContext(MyContext);

  const requestApi = async () => {
    if (ativarCarrinho) setAtivarCarrinho(false);
    const result = await RequestGetApi(txtSearch);
    setData(result);
  };

  return (
    <header className="header-color">
      <nav className="shadow-lg d-flex justify-content-between height">

        <div className="logo">
          <Link to="/loja"><img src={logo} alt="logo" /></Link>
        </div>

        <div className="d-flex justify-content-between">
          <Input
            type="text"
            name="Pesquisar"
            handleChange={(e) => setTxtSearch(e.target.value)}
            value={txtSearch}
            sty="search w-25"
          />
          <Button click={requestApi} sty="search w-25">
            <img src={lupa} alt="pesquisar" className="img" />
          </Button>
        </div>

        <div className="d-flex align-items-center">
          <Button click={() => setAtivarFiltro(!ativarFiltro)} sty="btn-filter-cart">
            <img src={filtro} alt="filtro" className="teste" />
          </Button>
          <Button click={() => setAtivarCarrinho(!ativarCarrinho)} sty="btn-filter-cart">
            <img src={carrinho} alt="Carrinho" className="teste" />
          </Button>
        </div>

      </nav>
      {
        ativarFiltro && (
          <div className="d-flex justify-content-evenly">
            <div className="mt-2">
              <p>Selecionar: Menor / Maior pre??o</p>
              <select className="form-select text-center" onChange={(e) => optionFilter(e.target.value)}>
                <option defaultValue="selecione">= Selecionar =</option>
                <option value="menor"> &lt; - Menor pre??o</option>
                <option value="maior"> &gt; - Maior pre??o</option>
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
                    onChange={(e) => filterValue(e.target.value)}
                  />
                  At?? 50,00
                </label>
                <label htmlFor="filterPrice" className="form-check-label">
                  <input
                    type="radio"
                    id="filterPrice"
                    name="filterPrice"
                    className="form-check-input"
                    value="50-100"
                    onChange={(e) => filterValue(e.target.value)}
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
                    onChange={(e) => filterValue(e.target.value)}
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
                    onChange={(e) => filterValue(e.target.value)}
                  />
                  Entre 200,00 e 500,00
                </label>
                <label htmlFor="filterPrice" className="form-check-label">
                  <input
                    type="radio"
                    id="filterPrice"
                    name="filterPrice"
                    className="form-check-input"
                    value="500-10000"
                    onChange={(e) => filterValue(e.target.value)}
                  />
                  Acima de 500
                </label>
              </div>
            </div>

          </div>
        )
      }

      {
        ativarCarrinho && <Carrinho />
      }

    </header>
  );
}

export default Header;
