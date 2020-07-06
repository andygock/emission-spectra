import React from 'react';
import Resolutions from './Resolutions';
import Canvas from './Canvas';
import './styles.css';
import Elements from './Elements';

const App = () => {
  const [size, setSize] = React.useState([1280, 720]); // [width, height]
  const [width, height] = size;

  const [element, setElement] = React.useState('H');

  return (
    <div>
      <Resolutions currentSize={size} onSelect={setSize} />
      <Elements current={element} onSelect={setElement} />
      <Canvas width={width} height={height} element={element} />
    </div>
  );
};

export default App;
