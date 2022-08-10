import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from './Button';

function CardProduto({ item }) {
  return (
    <div className="col card-produto shadow m-2 bg-body rounded card-group">
      <div className="card">
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
          <div className="card-footer">
            <Button sty="price">Detalhes</Button>
          </div>
        </Link>
      </div>
    </div>
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
