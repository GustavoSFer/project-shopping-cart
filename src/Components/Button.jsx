import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, click, sty }) {
  return (
    <button
      type="button"
      className={`btn btn-danger mt-3 ${sty}`}
      onClick={click}
    >
      {children}
    </button>
  );
}

Button.defaultProps = { sty: '', children: '' };
Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  click: PropTypes.func.isRequired,
  sty: PropTypes.string,
};

export default Button;
