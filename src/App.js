import React from 'react';
import Resolutions from './Resolutions';
import Canvas from './Canvas';
import './styles.css';
import Elements from './Elements';
import Slider from './Slider';

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
      <Slider text="Alpha" value={alpha} onUpdate={setAlpha} />
      <Slider
        text="Line width"
        min={0.001}
        max={0.1}
        step={0.005}
        onUpdate={setLineWidth}
        value={lineWidth}
      />
      <Slider
        text="Line height"
        min={0.01}
        max={1}
        step={0.01}
        onUpdate={setLineHeight}
        value={lineHeight}
      />
      <Canvas
        width={width}
        height={height}
        element={element}
        lineOptions={{ alpha, lineWidth, lineHeight, lineOffsetY }}
      />
    </div>
  );
};

export default App;
