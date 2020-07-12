import React, { useEffect } from 'react';
import { paint } from './spectra';

const Canvas = ({ width, height, element, lineOptions = {} }) => {
  const ref = React.createRef();

  useEffect(() => {
    paint(ref.current, {
      // we can display multiple elements, but for now, only display one at a time
      elements: [element],
      lineOptions,
    });
  }, [width, height, element, lineOptions]);

  return (
    <div>
      <canvas ref={ref} id="image" width={width} height={height} />
    </div>
  );
};

export default Canvas;
