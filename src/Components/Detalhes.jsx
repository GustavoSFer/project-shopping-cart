import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RequestUnicoProduto } from '../RequestApi/RequestApi';
import Button from './Button';

function Detalhes() {
  const [produto, setProduto] = useState({});
  const [carrinho, setCarrinho] = useState([]);
  const { id } = useParams();

  const api = async () => {
    const result = await RequestUnicoProduto(id);
    setProduto(result);
  };

  const addCart = (addProduto) => {
    console.log('chamooou');
    const filtrarCarrinho = carrinho.filter((item) => item.id !== addProduto.id);
    setCarrinho([...filtrarCarrinho, addProduto]);

    localStorage.setItem('carrinho', JSON.stringify([...filtrarCarrinho, addProduto]));
  };

  useEffect(() => {
    api();
    setCarrinho(JSON.parse(localStorage.getItem('carrinho')) || []);
  }, []);
  return (
    <div className="card mb-3 card-detalhes">
      <div className="row g-0">
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
        <Button click={() => addCart(produto)} sty="w-50">Adicionar ao carrinho</Button>
      </div>
    </div>
  );
}

export default Detalhes;
