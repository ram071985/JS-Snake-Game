let canvas;
let canvasContext;
let snakeX = 200;
let snakeSpeedX = 5;
// let snakeGrowX = snakeX - 23;
let snakeY = null;
let snakeSpeedY = null;
let moveUp = null;
let moveDown = null;
let moveRight = null;
let moveLeft = null;
// let snakeGrowY = snake

window.onload = function () {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");
  let framesPerSecond = 30;
  setInterval(function () {
    drawGame();
    if (moveUp > 0) {
      console.log(moveUp > 0);
      canvasContext.fillStyle = "green";
      canvasContext.beginPath();
      canvasContext.arc(200, moveUp, 12, 0, Math.PI * 2, true);
      canvasContext.fill();
    } else if (moveDown === true) {
      canvasContext.fillStyle = "green";
      canvasContext.beginPath();
      canvasContext.arc(200, moveDown, 12, 0, Math.PI * 2, true);
      canvasContext.fill();
    } else if (moveRight === true) {
      canvasContext.fillStyle = "green";
      canvasContext.beginPath();
      canvasContext.arc(moveRight, 300, 12, 0, Math.PI * 2, true);
      canvasContext.fill();
    } else if (moveLeft === true) {
      canvasContext.fillStyle = "green";
      canvasContext.beginPath();
      canvasContext.arc(moveLeft, 300, 12, 0, Math.PI * 2, true);
      canvasContext.fill();
    }
  }, 1000 / framesPerSecond);
};

function drawGame() {
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

  //function loadScore() {
  // canvasContext.font = "28px Times New Roman";
  // canvasContext.fillStyle = "white";
  // canvasContext.fillText("0", 63, 34);
  // }
  //  loadScore();
}

function snakeMoveDown() {
  moveDown = snakeY - snakeSpeedY;
  canvasContext.fillStyle = "green";
  canvasContext.beginPath();
  canvasContext.arc(200, moveDown, 12, 0, Math.PI * 2, true);
  canvasContext.fill();
}

function snakeMoveRight() {
  moveRight = snakeX + snakeSpeedX;
  canvasContext.fillStyle = "green";
  canvasContext.beginPath();
  canvasContext.arc(moveRight, 300, 12, 0, Math.PI * 2, true);
  canvasContext.fill();
}

function snakeMoveLeft() {
  moveRight = snakeX - snakeSpeedX;
  canvasContext.fillStyle = "green";
  canvasContext.beginPath();
  canvasContext.arc(200, moveDown, 12, 0, Math.PI * 2, true);
  canvasContext.fill();
}
window.addEventListener("keydown", function (event) {
  if (event.code === "ArrowUp") {
    snakeMoveUp();
  } else if (event.code === "ArrowDown") {
  } else if (event.code === "ArrowRight") {
  } else if (event.code === "ArrowLeft") {
  }

  function snakeMoveUp() {
    moveUp = snakeY + snakeSpeedY;
  
  }
});
