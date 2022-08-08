import React from 'react';
import PropTypes from 'prop-types';

function CardProduto({ item }) {
  return (
    <div className="col card-produto shadow m-2 p-2 bg-body rounded">
      <img src={item.thumbnail} alt={item.title} />
      <h1 className="title">{item.title}</h1>
      <p className="price">
        R$:
        <span className="price-color">{Number(item.price).toFixed(2)}</span>
      </p>
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
