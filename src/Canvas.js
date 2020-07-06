import React, { useEffect } from 'react';
import { paint } from './spectra';

const Canvas = ({ width, height, element }) => {
  const ref = React.createRef();

  useEffect(() => {
    paint(ref.current, {
      // we can display multiple elements, but for now, only display one at a time
      elements: [element],
    });
  }, [width, height, element]);

  return (
    <div>
      <canvas ref={ref} id="image" width={width} height={height} />
    </div>
  );
};

export default Canvas;
