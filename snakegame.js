let canvas;
let canvasContext;
let snakeX = 50;
let snakeSpeedX = 5;
let snakeGrowX = snakeX - 23;

window.onload = function() {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");
  drawEverything();

  //let framesPerSecond = 30;
 // setInterval(function() {
  //  moveSnake();
 // }, 1000 / framesPerSecond);
};

function moveSnake() {
  snakeX = snakeX + snakeSpeedX;
  snakeGrowX = snakeGrowX + snakeSpeedX;
  if (snakeX === 790) {
    snakeSpeedX = 0;
  }
  if (snakeSpeedX === 0) {
    snakeGrowX = snakeGrowX - snakeSpeedX;
  }
}

function drawEverything() {
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
  canvasContext.fillStyle = "green";
  canvasContext.fillRect(0,0,800, 45);
  canvasContext.fillStyle = "red";
  canvasContext.beginPath();
  canvasContext.arc(20, 22.5, 10, 0, Math.PI * 2, true);
  canvasContext.fill();
  canvasContext.font = "30px Times New Roman";
  canvasContext.fillStyle = "white";
  canvasContext.fillText("=",40,34);
  canvasContext.fillStyle = "green";
  canvasContext.beginPath();
  canvasContext.arc(200, 300, 12, 0, Math.PI * 2, true);
  canvasContext.fill();
  canvasContext.fillStyle = "green";
  canvasContext.beginPath();
  canvasContext.arc(177, 300, 12, 0, Math.PI * 2, true);
  canvasContext.fill();
  canvasContext.fillStyle = "red";
  canvasContext.beginPath();
  canvasContext.arc(623, 300, 10, 0, Math.PI * 2, true);
  canvasContext.fill();

 function loadScore() {

    canvasContext.font = "28px Times New Roman";
    canvasContext.fillStyle = "white";
    canvasContext.fillText("0",63,34);
  }
loadScore();
}