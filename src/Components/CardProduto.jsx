import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function CardProduto({ item }) {
  const addCart = () => {
    console.log('addcart');
  };

  return (
    <div className="col card-produto shadow m-2 bg-body rounded card-group">
      <div className="card">
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
        <div className="card-footer">
          <Button click={addCart} sty="price">Carrinho</Button>
        </div>
      </div>
    </div>
  );
}

CardProduto.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardProduto;
