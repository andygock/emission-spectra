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
    <div className="ui">
      <div className="controls">
        <h2>Layout</h2>
        <Slider text="Alpha" value={alpha} onUpdate={setAlpha} />
        <Slider
          text="Line width"
          min={0.001}
          max={0.1}
          step={0.001}
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
        <h2>Resolution</h2>
        <Resolutions currentSize={size} onSelect={setSize} />

        <h2>Element</h2>
        <Elements current={element} onSelect={setElement} />

        <div className="footer-links">
          <p>
            <a
              href="https://github.com/andygock/emission-spectra"
              className="href"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
      <div className="canvas">
        <Canvas
          width={width}
          height={height}
          element={element}
          lineOptions={{ alpha, lineWidth, lineHeight, lineOffsetY }}
        />
      </div>
    </div>
  );
};

export default App;
