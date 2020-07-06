import React from 'react';

const Input = ({ text, onUpdate, ...otherProps }) => {
  return <input className="input is-small" type="text" {...otherProps} />;
};

export default Input;
