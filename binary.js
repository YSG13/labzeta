const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');

// handle resizing
let fontSize = 16;
let columns, rows;
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = Math.floor(canvas.width / fontSize);
  rows    = Math.floor(canvas.height / fontSize);
  initStatic();
}
window.addEventListener('resize', resize);
resize();

// create a static background of bits
let staticBits = [];
function initStatic() {
  staticBits = Array.from({length: columns}, () =>
    Array.from({length: rows}, () => (Math.random()<0.5?'0':'1'))
  );
}

const drops = Array(columns).fill(0);

function draw() {
  // solid background
  ctx.fillStyle = '#0C111F';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = fontSize + 'px monospace';

  // draw static bits faintly
  ctx.fillStyle = 'rgba(200,200,200,0.05)';
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      ctx.fillText(staticBits[i][j], i * fontSize, j * fontSize);
    }
  }

  // draw falling bits
  ctx.fillStyle = '#ccc';
  for (let x = 0; x < columns; x++) {
    const y = drops[x] * fontSize;
    ctx.fillText(Math.random()<0.5?'0':'1', x * fontSize, y);
    // reset or advance
    drops[x] = (y > canvas.height && Math.random() > 0.975) ? 0 : drops[x] + 1;
  }
}

// faster refresh (~33fps)
setInterval(draw, 30);
