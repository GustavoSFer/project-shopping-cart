import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, click, sty }) {
  return (
    <button
      type="button"
      className={`btn btn-danger w-100 mt-3 ${sty}`}
      onClick={click}
    >
      {children}
    </button>
  );
}

Button.defaultProps = { sty: '' };
Button.propTypes = {
  children: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  sty: PropTypes.string,
};

export default Button;
