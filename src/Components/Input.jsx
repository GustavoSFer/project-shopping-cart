import React from 'react';
import PropTypes from 'prop-types';

function Input({ type, name }) {
  return (
    <label htmlFor={name} className="input-group mb-3">
      <input type={type} id={name} className="form-control" placeholder={name} />
    </label>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;
