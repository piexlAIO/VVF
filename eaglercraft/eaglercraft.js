const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ตัวแปรพื้นฐาน
let gameStarted = false;
let player = { x: canvas.width/2, y: canvas.height/2, size: 30 };

// ปุ่มเริ่มเกม
document.getElementById("start-button").addEventListener("click", () => {
    gameStarted = true;
    document.getElementById("ui").style.display = "none";
    gameLoop();
});

// วาดผู้เล่น
function drawPlayer() {
    ctx.fillStyle = "red";
    ctx.fillRect(player.x - player.size/2, player.y - player.size/2, player.size, player.size);
}

// ลูปเกม
function gameLoop() {
    if (!gameStarted) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // วาดผู้เล่น
    drawPlayer();

    requestAnimationFrame(gameLoop);
}

// ควบคุมผู้เล่นด้วยคีย์บอร์ด
window.addEventListener("keydown", (e) => {
    const speed = 10;
    switch(e.key) {
        case "w": player.y -= speed; break;
        case "s": player.y += speed; break;
        case "a": player.x -= speed; break;
        case "d": player.x += speed; break;
    }
});
