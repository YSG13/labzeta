const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);
canvas.style.position = "fixed";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.zIndex = "-1";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const cols = canvas.width / 20;
const ypos = Array.from({ length: cols }).fill(0);

function binaryRain() {
  ctx.fillStyle = "rgba(11,19,43,0.15)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#ccc";
  ctx.font = "18px monospace";

  ypos.forEach((y, index) => {
    const text = Math.random() > 0.5 ? "1" : "0";
    const x = index * 20;
    ctx.fillText(text, x, y);
    ypos[index] = y > canvas.height + Math.random() * 100 ? 0 : y + 20;
  });
}

setInterval(binaryRain, 60);