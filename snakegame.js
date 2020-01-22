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
  // canvasContext.fillStyle = "green";
  // canvasContext.beginPath();
  // canvasContext.arc(177, 300, 12, 0, Math.PI * 2, true);
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
function xAxisMoveRight() {
  snakeX = snakeX + snakeSpeedX;
  if (snakeX === 790) {
    snakeSpeedX = 0;
  }
}

function yAxisMoveDown() {
  snakeY = snakeY - snakeSpeedY;
  if (snakeY === 10) {
    snakeSpeedY = 0;
  }
}


  window.addEventListener("keydown", function(event) {
    let framesPerSecond = 30;
setInterval(function() {
  if (event.code === "ArrowRight") {
    snakeY = null;
    moveRight();
    xAxisMoveRight();
  } else if (event.code === "ArrowDown") {
    snakeX = null;
   moveDown();
   yAxisMoveDown();
  };
}, 1000 / framesPerSecond);
  });


function moveRight() {
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
  canvasContext.arc(snakeX, 300, 12, 0, Math.PI * 2, true);
  canvasContext.fill();
  canvasContext.fillStyle = "red";
  canvasContext.beginPath();
  canvasContext.arc(623, 300, 10, 0, Math.PI * 2, true);
  canvasContext.fill();
}

function moveDown() {
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
  canvasContext.arc(200, snakeY, 12, 0, Math.PI * 2, true);
  canvasContext.fill();
  canvasContext.fillStyle = "red";
  canvasContext.beginPath();
  canvasContext.arc(623, 300, 10, 0, Math.PI * 2, true);
  canvasContext.fill();
}
