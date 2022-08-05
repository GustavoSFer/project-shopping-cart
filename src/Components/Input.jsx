import React from 'react';
import PropTypes from 'prop-types';

function Input({
  type, name, value, handleChange,
}) {
  return (
    <label htmlFor={name} className="input-group mt-3">
      <input
        type={type}
        id={name}
        onChange={handleChange}
        value={value}
        className="form-control"
        placeholder={name}
      />
    </label>
  );
}

Input.defaultProps = { value: '' };
Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
