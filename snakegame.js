// GOAL 1: move the snake to the right when the app starts
// GOAL 2: move the snake down when the app starts

// REQUIREMENTS: use the snakeSpeedY and snakeSpeedX to accomplish your goals

let snakeX = 60;
let snakeY = 60;
let snakeSpeedX = 10;
let snakeSpeedY = 10;
let snakeDirection;
let snakeArray = [];

let fruitX = Math.floor(Math.random() * 40) * 20;
let fruitY = Math.floor(Math.random() * 30) * 20;

function drawCanvas() {
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
}

function snakeStartPosition() {
  canvasContext.fillStyle = "green";
  canvasContext.fillRect(60, 60, 20, 20);
}

function moveRight() {
  canvasContext.fillStyle = "green";
  canvasContext.fillRect(snakeX, snakeY, 20, 20);
  if (snakeX === fruitX && snakeY === fruitY) {

    window.location.reload(false);
  } else if (snakeX === 800) {
    window.location.reload(false);
  }
}

function moveLeft() {
  canvasContext.fillStyle = "green";
  canvasContext.fillRect(snakeX, snakeY, 20, 20);
  if (snakeX === fruitX && snakeY === fruitY) {
    window.location.reload(false);
  } else if (snakeX === 0) {
    window.location.reload(false);
  }
}

function moveUp() {
  canvasContext.fillStyle = "green";
  canvasContext.fillRect(snakeX, snakeY, 20, 20);
  if (snakeX === fruitX && snakeY === fruitY) {
    window.location.reload(false);
  } else if (snakeY === 0) {
    window.location.reload(false);
  }
}

function moveDown() {
  canvasContext.fillStyle = "green";
  canvasContext.fillRect(snakeX, snakeY, 20, 20);
  if (snakeX === fruitX && snakeY === fruitY) {
    window.location.reload(false);
  } else if (snakeY === 600) {
    window.location.reload(false);
  }
}

function makeFruit() {
  canvasContext.fillStyle = "red";
  canvasContext.fillRect(fruitX, fruitY, 20, 20);
}

window.addEventListener("keydown", function(e) {
  if (e.code === "ArrowRight") {
    snakeDirection = "right";
  } else if (e.code === "ArrowLeft") {
    snakeDirection = "left";
  } else if (e.code === "ArrowUp") {
    snakeDirection = "up";
  } else if (e.code === "ArrowDown") {
    snakeDirection = "down";
  }
});

window.onload = function() {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");
  let framesPerSecond = 10;
  setInterval(function() {
    drawCanvas();
    makeFruit();
    if (snakeDirection === "right") {
      snakeSpeedX = 20;
      moveRight();
      snakeX = snakeX + snakeSpeedX;
      snakeSpeedY = 0;
    } else if (snakeDirection === "left") {
      snakeSpeedX = 20;
      moveLeft();
      snakeX = snakeX - snakeSpeedX;
      snakeSpeedY = 0;
    } else if (snakeDirection === "up") {
      snakeSpeedY = 20;
      moveUp();
      snakeY = snakeY - snakeSpeedY;
      snakeSpeedX = 0;
    } else if (snakeDirection === "down") {
      snakeSpeedY = 20;
      moveDown();
      snakeY = snakeY + snakeSpeedY;
      snakeSpeedX = 0;
    } else {
      snakeStartPosition();
    }
  }, 1000 / framesPerSecond);
};
