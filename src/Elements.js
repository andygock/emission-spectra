import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

const elements = ['H', 'He'];

const Elements = ({ current = 'H', onSelect = () => null }) => {
  return (
    <div className="tags">
      {elements.map((el, index) => (
        <span
          className={classnames(['tag', { 'is-dark': current === el }])}
          key={index}
          onClick={() => onSelect(el)}
        >
          {el}
        </span>
      ))}
    </div>
  );
};

export default Elements;
