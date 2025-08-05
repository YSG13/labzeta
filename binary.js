const canvas = document.getElementById("binaryCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let columns = Math.floor(canvas.width / 20);
let drops = Array(columns).fill(1);

const fontSize = 16;
const binaryChars = "01";

function draw() {
  ctx.fillStyle = "rgba(11, 17, 32, 0.15)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#cccccc";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = binaryChars.charAt(Math.floor(Math.random() * binaryChars.length));
    ctx.fillText(text, i * 20, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(draw, 50);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = Math.floor(canvas.width / 20);
  drops = Array(columns).fill(1);
});
