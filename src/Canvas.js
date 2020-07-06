import React, { useEffect } from 'react';
import { paint } from './spectra';

const Canvas = ({ width, height }) => {
  const ref = React.createRef();

  useEffect(() => {
    paint(ref.current);
  }, [width, height]);

  return (
    <div>
      <canvas ref={ref} id="image" width={width} height={height} />
    </div>
  );
};

export default Canvas;
