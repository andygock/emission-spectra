import React from 'react';

const sizes = [
  [1280, 720],
  [1440, 900],
  [1680, 1050],
  [1920, 1080],
  [2560, 1440],
  [3840, 2160],
];

const Resolutions = ({ onSelect = () => null }) =>
  sizes.map(([w, h], index) => (
    <span
      key={index}
      className="tag res"
      onClick={() => onSelect([w, h])}
    >{`${w}x${h}`}</span>
  ));

export default Resolutions;
