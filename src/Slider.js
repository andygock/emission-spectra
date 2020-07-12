import React from 'react';

const Slider = ({
  text,
  min = 0.0,
  max = 1.0,
  step = 0.01,
  value = 0,
  onUpdate,
  ...otherProps
}) => {
  return (
    <div className="slider">
      <div>
        <input
          className="is-small"
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          {...otherProps}
          onChange={(e) => onUpdate(parseFloat(e.target.value))}
        />
      </div>
      <div>
        {text} = {value}
      </div>
    </div>
  );
};

export default Slider;
