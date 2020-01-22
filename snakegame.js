let canvas;
let canvasContext;
let snakeX = 200;
let snakeSpeedX = 5;
// let snakeGrowX = snakeX - 23;
let snakeY = 300;
let snakeSpeedY = -5;
// let snakeGrowY = snake

window.onload = function() {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");
  drawStartGame();
};

function drawStartGame() {
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
  canvasContext.fillStyle = "green";
  canvasContext.fillRect(0, 0, 800, 45);
  canvasContext.fillStyle = "red";
  canvasContext.beginPath();
  canvasContext.arc(20, 22.5, 10, 0, Math.PI * 2, true);
  canvasContext.fill();
  canvasContext.font = "30px Times New Roman";
  canvasContext.fillStyle = "white";
  canvasContext.fillText("=", 40, 34);
  canvasContext.fillStyle = "green";
  canvasContext.beginPath();
  canvasContext.arc(200, 300, 12, 0, Math.PI * 2, true);
  canvasContext.fill();
  canvasContext.fillStyle = "red";
  canvasContext.beginPath();
  canvasContext.arc(623, 300, 10, 0, Math.PI * 2, true);
  canvasContext.fill();

  function loadScore() {
    canvasContext.font = "28px Times New Roman";
    canvasContext.fillStyle = "white";
    canvasContext.fillText("0", 63, 34);
  }
  loadScore();
}

window.addEventListener("keydown", function(event) {
  let moveRight = snakeX + snakeSpeedX;
  let moveLeft = snakeX - snakeSpeedX;
  let moveUp = snakeY + snakeSpeedY;
  let moveDown = snakeY - snakeSpeedY;
  let framesPerSecond = 30;
  setInterval(function() {
    if (event.code === "ArrowUp") {
      canvasContext.fillStyle = "green";
      canvasContext.beginPath();
      canvasContext.arc(200, moveUp, 12, 0, Math.PI * 2, true);
      canvasContext.fill();
    } else if (event.code === "ArrowDown") {
      canvasContext.fillStyle = "green";
      canvasContext.beginPath();
      canvasContext.arc(200, moveDown, 12, 0, Math.PI * 2, true);
      canvasContext.fill();
    } else if (event.code === "ArrowRight") {
      canvasContext.fillStyle = "green";
      canvasContext.beginPath();
      canvasContext.arc(moveRight, 300, 12, 0, Math.PI * 2, true);
      canvasContext.fill();
    } else if (event.code === "ArrowLeft") {
      canvasContext.fillStyle = "green";
      canvasContext.beginPath();
      canvasContext.arc(moveLeft, 300, 12, 0, Math.PI * 2, true);
      canvasContext.fill();
    }
  }, 1000 / framesPerSecond);
});
