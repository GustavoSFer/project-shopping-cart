import React from 'react';
import PropTypes from 'prop-types';

function ButtonCart({ children, click, sty }) {
  return (
    <button
      type="button"
      className={`btn btn-danger ${sty}`}
      onClick={click}
    >
      {children}
    </button>
  );
}

ButtonCart.defaultProps = { sty: '', children: '' };
ButtonCart.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  click: PropTypes.func.isRequired,
  sty: PropTypes.string,
};

export default ButtonCart;
