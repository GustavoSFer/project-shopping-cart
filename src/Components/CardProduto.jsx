import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from './Button';
import MyContext from '../MyContext/MyContext';

function CardProduto({ item }) {
  const {
    carrinho, setCarrinho, ativarCarrinho, setAtivarCarrinho,
  } = useContext(MyContext);

  const addCart = (addProduto) => {
    if (ativarCarrinho) setAtivarCarrinho(false);

    const filtrarCarrinho = carrinho.filter((produto) => produto.id !== addProduto.id);
    setCarrinho([...filtrarCarrinho, addProduto]);

    localStorage.setItem('carrinho', JSON.stringify([...filtrarCarrinho, addProduto]));
  };

  return (
    <article className="shadow m-2 bg-body card-produto text-center">
      <Link to={`/detalhes/${item.id}`} item={item}>
        <img src={item.thumbnail} alt={item.title} className="card-img" />
        <div className="card-body">
          <h1 className="title">
            {`${item.title.slice(0, 20)}...`}
          </h1>
          <p className="price">
            R$:
            <span className="price-color">{Number(item.price).toFixed(2)}</span>
          </p>
        </div>
        <div className="">
          <Button sty="price btn-detalhe">Detalhes</Button>
        </div>
      </Link>
      <div>
        <Button click={() => addCart(item)} sty="price btn-carrinho w-100">Carrinho</Button>
      </div>
    </article>
  );
}

CardProduto.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardProduto;
