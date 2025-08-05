const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.zIndex = '-1';
canvas.style.pointerEvents = 'none';

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = Math.random() * canvas.height;
}

function draw() {
    // Static background 0s
    ctx.fillStyle = "rgba(0, 0, 40, 0.8)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Text style
    ctx.fillStyle = "#ffffff";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset to top with a bit of randomness
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i] += 0.5; // ← this slows it down
    }

    // Dim static binary pattern
    ctx.fillStyle = "rgba(255, 255, 255, 0.01)";
    ctx.font = fontSize + "px monospace";
    for (let y = 0; y < canvas.height; y += fontSize) {
        for (let x = 0; x < canvas.width; x += fontSize) {
            ctx.fillText("0", x, y);
        }
    }
}

setInterval(draw, 50);
