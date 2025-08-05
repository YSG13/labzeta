const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');

// resize handler
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

// settings
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = new Array(columns).fill(0);

// helper: random bit
function randomBit() {
  return Math.random() < 0.5 ? '0' : '1';
}

// draw loop
function draw() {
  // dark, nearly opaque clear to keep background rich
  ctx.fillStyle = 'rgba(12, 17, 31, 0.08)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // light gray bits
  ctx.fillStyle = '#ccc';
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < columns; i++) {
    const x = i * fontSize;
    const y = drops[i] * fontSize;

    ctx.fillText(randomBit(), x, y);

    // reset when offscreen, randomly
    if (y > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    // SLOWER descent
    drops[i] += 0.3;
  }
}

// kick off at ~24fps
setInterval(draw, 42);
