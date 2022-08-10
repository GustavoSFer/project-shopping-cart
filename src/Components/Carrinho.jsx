import React from 'react';
import ButtonCart from './ButtonCart';

function Carrinho() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho'));

  const removeProduto = (item) => {
    const filtrarCarrinho = carrinho.filter((produto) => produto.id !== item.id);
    localStorage.setItem('carrinho', JSON.stringify([...filtrarCarrinho]));
  };

  return (
    <div className="carrinho-compras">
      {
        carrinho.length > 0
          ? carrinho.map((item) => (
            <div className="row card-carrinho" key={item.id}>
              <div className="col-3">
                <img src={item.thumbnail} alt={item.title} className="card-img" />
              </div>
              <div className="col">
                <h1 className="title">
                  {item.title}
                </h1>
                <p className="price">
                  R$:
                  <span className="price-color">{Number(item.price).toFixed(2)}</span>
                </p>
                <ButtonCart click={() => removeProduto(item)} sty="remover">Remover</ButtonCart>
              </div>
            </div>
          ))
          : <h1>Sem produtos no carrinho</h1>
      }

    </div>
  );
}

export default Carrinho;
