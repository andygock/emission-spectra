import './styles.css';
import { paint } from './spectra';

// add or remove active CSS to selected resolution
const updateActiveResolutionStyle = () => {
  const res = document.getElementsByClassName('res');
  [...res].forEach((r) => {
    const canvas = document.getElementById('image');
    if (canvas.height === parseInt(r.dataset.height, 10)) {
      r.classList.add('is-black');
    } else {
      r.classList.remove('is-black');
    }
  });
};

// dynamically generate resolution tags
const updateResolutionLinks = () => {
  const sizes = [
    [1280, 720],
    [1440, 900],
    [1680, 1050],
    [1920, 1080],
    [2560, 1440],
    [3840, 2160],
  ];
  const resSelect = document.getElementById('resolution');
  resSelect.innerHTML = sizes
    .map(
      ([w, h]) =>
        `<span class="tag res res-${h}" data-width="${w}" data-height="${h}">${w}x${h}</span>`
    )
    .join(' ');

  // resolution selection, set new event handlers
  const res = document.getElementsByClassName('res');
  const resClickHandler = (e) => {
    const canvas = document.getElementById('image');
    const { width, height } = e.target.dataset;
    canvas.width = width;
    canvas.height = height;
    updateActiveResolutionStyle();
    paint(canvas);
  };
  [...res].forEach((r) => {
    r.removeEventListener('click', resClickHandler);
    r.addEventListener('click', resClickHandler);
  });
};

(() => {
  const canvas = document.getElementById('image');
  updateResolutionLinks();
  updateActiveResolutionStyle();
  paint(canvas);
  // rainbowLinear(canvas);
})();
