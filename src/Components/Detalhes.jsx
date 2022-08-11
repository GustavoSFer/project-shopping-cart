import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MyContext from '../MyContext/MyContext';
import { RequestUnicoProduto } from '../RequestApi/RequestApi';
import Button from './Button';
import Header from './Header';

function Detalhes() {
  const [produto, setProduto] = useState({});
  const {
    carrinho, setCarrinho,
    ativarCarrinho,
    setAtivarCarrinho,
  } = useContext(MyContext);
  const { id } = useParams();

  const api = async () => {
    const result = await RequestUnicoProduto(id);
    setProduto(result);
  };

  const addCart = (addProduto) => {
    if (ativarCarrinho) setAtivarCarrinho(false);

    const filtrarCarrinho = carrinho.filter((item) => item.id !== addProduto.id);
    setCarrinho([...filtrarCarrinho, addProduto]);

    localStorage.setItem('carrinho', JSON.stringify([...filtrarCarrinho, addProduto]));
  };

  useEffect(() => {
    api();
    setCarrinho(JSON.parse(localStorage.getItem('carrinho')) || []);
  }, []);

  return (
    <div>

      <Header />
      <main className="card mb-3 card-detalhes">
        <section className="row g-0">
          <div className="col-md-4 text-center mt-4">
            <img src={produto.thumbnail} className="img-fluid rounded-start" alt={produto.title} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{produto.title}</h5>
              <p className="card-text">{produto.warranty}</p>
              <p className="card-text">
                <small className="text-muted">
                  {`R$: ${Number(produto.price).toFixed(2)}`}
                </small>
              </p>
            </div>
          </div>
          <Button click={() => addCart(produto)} sty="">Adicionar ao carrinho</Button>
        </section>
      </main>
    </div>
  );
}

export default Detalhes;
