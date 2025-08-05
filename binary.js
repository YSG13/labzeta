const canvas = document.getElementById('bg');
const ctx    = canvas.getContext('2d');
const fontSize = 16;
let columns, drops;

function resize() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = Math.floor(canvas.width / fontSize);
  drops   = Array(columns).fill(1);
}

window.addEventListener('resize', resize);
resize();

// draw at ~20fps for a slower fall
setInterval(draw, 50);

function draw() {
  // translucent black to leave trails, never clearing the gradient dots
  ctx.fillStyle = 'rgba(10, 15, 26, 0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font      = `${fontSize}px monospace`;
  ctx.fillStyle = '#ddd';  // light gray

  for (let i = 0; i < columns; i++) {
    const x = i * fontSize;
    const y = drops[i] * fontSize;
    const bit = Math.random() < 0.5 ? '0' : '1';
    ctx.fillText(bit, x, y);

    // reset drop occasionally once off-screen
    if (y > canvas.height && Math.random() > 0.98) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
