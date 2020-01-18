let canvas;
let canvasContext;
let snakeX = 50;
let snakeSpeedX = 5;
let snakeGrowX = snakeX - 23;

window.onload = function() {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");


  let framesPerSecond = 30;
  setInterval(function() {
    moveSnake();
    drawEverything();
  }, 1000 / framesPerSecond);
};

function moveSnake() {
  snakeX = snakeX + snakeSpeedX;
  snakeGrowX = snakeGrowX + snakeSpeedX;
  if (snakeX === 790) {
    snakeSpeedX = 0;
  }
  if (snakeSpeedX === 0) {
    snakeGrowX = snakeGrowX - snakeSpeedX;
  }
}

function drawEverything() {
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
  canvasContext.fillStyle = "green";
  canvasContext.fillRect(0,0,800, 45);
  canvasContext.fillStyle = "red";
  canvasContext.beginPath();
  canvasContext.arc(20, 22.5, 14, 0, Math.PI * 2, true);
  canvasContext.fill();
  canvasContext.font = "34px Times New Roman";
  canvasContext.fillStyle = "white";
  canvasContext.fillText("=",40,34);
  canvasContext.fillStyle = "green";
  canvasContext.beginPath();
  canvasContext.arc(snakeX, 100, 12, 0, Math.PI * 2, true);
  canvasContext.fill();
  canvasContext.fillStyle = "green";
  canvasContext.beginPath();
  canvasContext.arc(snakeGrowX, 100, 12, 0, Math.PI * 2, true);
  canvasContext.fill();

 function loadScore() {

    canvasContext.font = "34px Times New Roman";
    canvasContext.fillStyle = "white";
    canvasContext.fillText("0",67,34);
  }
loadScore();
}




