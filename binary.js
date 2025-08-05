const canvas = document.getElementById("binaryCanvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01";
const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = Array.from({ length: columns }, () => Math.random() * canvas.height);

function draw() {
  ctx.fillStyle = "rgba(30, 31, 47, 0.2)"; // bluish-grayish fade
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#cccccc"; // light gray for binary
  ctx.font = `${fontSize}px monospace`;

  drops.forEach((y, i) => {
    const text = letters[Math.floor(Math.random() * letters.length)];
    const x = i * fontSize;
    ctx.fillText(text, x, y);
    drops[i] = y > canvas.height ? 0 : y + fontSize * 0.6; // controls speed
  });
}

setInterval(draw, 40);
