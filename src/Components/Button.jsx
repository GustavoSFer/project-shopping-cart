import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, click }) {
  return (
    <button
      type="button"
      className="btn btn-danger w-100"
      onClick={click}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};

export default Button;
