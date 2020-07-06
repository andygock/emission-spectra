import React from 'react';
import Resolutions from './Resolutions';
import Canvas from './Canvas';
import './styles.css';

const App = () => {
  const [size, setSize] = React.useState([1280, 720]); // [width, height]
  const [width, height] = size;
  // console.log(size);

  return (
    <div>
      <Resolutions onSelect={setSize} />
      <Canvas width={width} height={height} />
    </div>
  );
};

export default App;