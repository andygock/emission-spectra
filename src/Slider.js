import React from 'react';

const Slider = ({
  text,
  min = 0.0,
  max = 1.0,
  step = 0.01,
  onUpdate,
  ...otherProps
}) => {
  return (
    <input
      className="is-small"
      type="range"
      min={min}
      max={max}
      step={step}
      {...otherProps}
      onChange={(e) => onUpdate(parseFloat(e.target.value))}
    />
  );
};

export default Slider;
