import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../MyContext/MyContext';
import ButtonCart from './ButtonCart';

function Carrinho() {
  const [totalCarrinho, setTotelCarrinho] = useState(0);
  const [removido, setRemovido] = useState(false);
  const { carrinho, setCarrinho } = useContext(MyContext);

  const valorCarrinho = () => {
    const cart = JSON.parse(localStorage.getItem('carrinho'));
    if (cart) {
      const soma = cart.reduce((acc, cur) => acc + cur.price, 0);
      setTotelCarrinho(soma.toFixed(2));
    }
  };

  const removeProduto = (item) => {
    const filtrarCarrinho = carrinho.filter((produto) => produto.id !== item.id);
    localStorage.setItem('carrinho', JSON.stringify([...filtrarCarrinho]));
    setCarrinho(JSON.parse(localStorage.getItem('carrinho')));

    setRemovido(!removido);
  };

  useEffect(() => {
    valorCarrinho();
  }, [removido]);

  useEffect(() => {
    setCarrinho(JSON.parse(localStorage.getItem('carrinho')) || []);
  }, []);

  return (
    <div className="carrinho-compras p-2">
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
          : <h5>Sem produtos no carrinho</h5>
      }
      <div>
        <span className="totalPrice">{`Valor Total - R$: ${totalCarrinho}` }</span>
      </div>
    </div>
  );
}

export default Carrinho;
