const canvas = document.getElementById('binaryCanvas');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

const fontSize = 16;
let columns = Math.floor(canvas.width / fontSize);
let drops = Array(columns).fill(0);

function draw() {
  // fade the old text with a translucent navy
  ctx.fillStyle = 'rgba(11,18,53,0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'rgba(200,200,200,0.5)';
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < columns; i++) {
    const text = Math.random() > 0.5 ? '1' : '0';
    const x = i * fontSize;
    const y = drops[i] * fontSize;
    ctx.fillText(text, x, y);

    if (y > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }

  requestAnimationFrame(draw);
}

// if user resizes, recalc columns & drops[]
window.addEventListener('resize', () => {
  columns = Math.floor(canvas.width / fontSize);
  drops = Array(columns).fill(0);
});

draw();
