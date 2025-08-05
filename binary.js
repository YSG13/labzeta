const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');

// resize
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(0);

function randomBit() {
  return Math.random() < 0.5 ? '0' : '1';
}

function draw() {
  // dark translucent overlay
  ctx.fillStyle = 'rgba(12, 17, 31, 0.08)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#ccc';            // faint gray bits
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < columns; i++) {
    const x = i * fontSize;
    const y = drops[i] * fontSize;
    ctx.fillText(randomBit(), x, y);

    if (y > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i] += 0.3;  // much slower fall
  }
}

// ≈24fps
setInterval(draw, 42);
