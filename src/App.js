import React from 'react';
import Resolutions from './Resolutions';
import Canvas from './Canvas';
import './styles.css';
import Elements from './Elements';
import Input from './Input';

const App = () => {
  const [size, setSize] = React.useState([1280, 720]); // [width, height]
  const [width, height] = size;

  const [element, setElement] = React.useState('H');

  // styling and layout for the spectra lines
  const [alpha, setAlpha] = React.useState(0.6);
  const [lineWidth, setLineWidth] = React.useState(0.02);
  const [lineHeight, setLineHeight] = React.useState(0.3);
  const [lineOffsetY, setLineOffsetY] = React.useState(0.15);

  return (
    <div>
      <Resolutions currentSize={size} onSelect={setSize} />
      <Elements current={element} onSelect={setElement} />
      <Input text="Alpha" onUpdate={setAlpha} />
      <Input text="Line width" onUpdate={setLineWidth} />
      <Canvas width={width} height={height} element={element} />
    </div>
  );
};

export default App;
