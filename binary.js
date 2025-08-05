const canvas = document.getElementById('binaryCanvas');
const ctx    = canvas.getContext('2d');

function resize() {
  canvas.width  = innerWidth;
  canvas.height = innerHeight;
}
window.addEventListener('resize', resize);
resize();

// how many columns of falling chars:
const fontSize = 16;
let columns   = Math.floor(canvas.width / fontSize);
let drops     = Array(columns).fill(1);
const chars    = '01';

function draw() {
  // semi-transparent overlay for trail effect
  ctx.fillStyle = 'rgba(11,17,32,0.15)';
  ctx.fillRect(0,0,canvas.width, canvas.height);

  ctx.fillStyle = '#cccccc';             // faint gray
  ctx.font      = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = chars.charAt(Math.floor(Math.random() * chars.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, 50);
