import React from 'react';
import classnames from 'classnames';

const sizes = [
  [1280, 720],
  [1440, 900],
  [1680, 1050],
  [1920, 1080],
  [2560, 1440],
  [3840, 2160],
];

const Resolutions = ({
  currentSize: [currentWidth, currentHeight],
  onSelect = () => null,
}) => (
  <div className="tag-group">
    {sizes.map(([w, h], index) => (
      <span
        key={index}
        className={classnames([
          'tag',
          'res',
          {
            'is-dark': currentWidth === w && currentHeight === h,
          },
        ])}
        onClick={() => onSelect([w, h])}
      >{`${w}x${h}`}</span>
    ))}
  </div>
);

export default Resolutions;
