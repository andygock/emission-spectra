import wavelengthToRGB from './wavelengthToRGB';

// spectral lines of different types of elements
// visible light is 380 to 750 nm (window of 370 nm)
const emission = {
  // https://en.wikipedia.org/wiki/Hydrogen_spectral_series
  // Hydrogen balmer series (not showing 397.0 which is near invisible)
  H: [656.3, 486.1, 434.0, 410.2],

  // https://www.sciencephoto.com/media/673903/view/helium-emission-and-absorption-spectra
  He: [
    728.1,
    706.5,
    686.7,
    667.8,
    587.5,
    504.7,
    501.5,
    492.1,
    471.3,
    447.1,
    388.8,
  ],
};

// generate CSS compatible RGB string
const cssRGB = (r, g, b, alpha = 1.0) => `rgb(${r},${g},${b},${alpha})`;

// draw rainbow style linear bar
const rainbowLinear = (canvas) => {
  const { width, height } = canvas;
  const ctx = canvas.getContext('2d');

  // draw the colored vertical bars
  for (let x = 0; x < width; x += 1) {
    const w = 380 + (x * 370) / width;
    const [r, g, b] = wavelengthToRGB(w);
    ctx.strokeStyle = cssRGB(r, g, b);
    ctx.strokeRect(x, 0, 1, height);
  }
};

// draw a vertical spectral lines
const drawLines = (canvas, wavelengths, options) => {
  // get canvas dimensions
  const { width, height } = canvas;

  // default options
  const optsDefault = {
    alpha: 0.6,

    // these are represented as percentages of canvas size
    lineWidth: 0.02,
    lineHeight: 0.3,
    lineOffsetY: 0.15,
  };

  // default + user defined options
  const opts = { ...optsDefault, ...options };
  const { lineWidth, lineHeight, lineOffsetY, alpha } = opts;

  // calculate px values
  const lineWidthPx = lineWidth * width;
  const lineHeightPx = lineHeight * height;
  const lineOffsetYPx = lineOffsetY * height;

  // get canvas context
  const ctx = canvas.getContext('2d');

  // draw each vertical line
  wavelengths.forEach((w) => {
    // get RGB value for line, derived from wavelength
    const [r, g, b] = wavelengthToRGB(w);

    // calculate x position, with visible spectrum scaled to canvas width
    const x = (width * (w - 380)) / 370;

    // set line start and end point
    ctx.beginPath();
    ctx.moveTo(x, lineOffsetYPx + lineWidthPx / 2);
    ctx.lineTo(x, lineOffsetYPx + lineHeightPx - lineWidthPx / 2);

    // set style of upcoming stroke() command
    ctx.lineCap = 'round';
    ctx.lineWidth = lineWidthPx;
    ctx.strokeStyle = cssRGB(r, g, b, alpha);

    // paint line
    ctx.stroke();
  });
};

export const paint = (canvas, options = {}) => {
  // draw background colour
  const { width, height } = canvas;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = `#111`;
  ctx.fillRect(0, 0, width, height);

  // merge custom options
  const defaultOptions = {
    // define elements to display
    elements: ['H'],
  };

  const opts = { ...defaultOptions, ...options };

  opts.elements.forEach((element) => drawLines(canvas, emission[element]));
};
