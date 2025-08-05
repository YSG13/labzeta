// binary.js
const canvas = document.getElementById('bg');
const ctx    = canvas.getContext('2d');

// font & sizing
const fontSize = 16;
let columns, drops;

// on resize: recalc columns & reset drops
function resize() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = Math.floor(canvas.width / fontSize);
  // one drop per column:
  drops = new Array(columns).fill(1);
}
window.addEventListener('resize', resize);
resize();

// helper: draw one frame
function draw() {
  // translucent background for trailing effect:
  ctx.fillStyle = 'rgba(12, 17, 31, 0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = fontSize + 'px monospace';

  // draw each column's current drop:
  ctx.fillStyle = '#ccc';
  for (let i = 0; i < columns; i++) {
    const x = i * fontSize;
    const y = drops[i] * fontSize;
    const bit = Math.random() < 0.5 ? '0' : '1';
    ctx.fillText(bit, x, y);

    // reset drop randomly to top, else advance down one
    if (y > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

// ~30fps
setInterval(draw, 33);
