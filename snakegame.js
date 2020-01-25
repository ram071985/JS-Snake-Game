// GOAL 1: move the snake to the right when the app starts
// GOAL 2: move the snake down when the app starts

// REQUIREMENTS: use the snakeSpeedY and snakeSpeedX to accomplish your goals

let snakeX = 60;
let snakeY = 60;
let snakeSpeedX = 5;
let snakeSpeedY = 5;
let snakeDirection;
let fruitX = Math.floor((Math.random() * 800) + 1);
let fruitY = Math.floor((Math.random() * 600) + 1);
console.log(fruitX);
console.log(fruitY);

function drawCanvas() {
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
}

function snakeStartPosition() {
  canvasContext.fillStyle = "green";
  canvasContext.beginPath();
  canvasContext.arc(60, 60, 12, 0, Math.PI * 2, true);
  canvasContext.fill();
}

function moveRight() {
  canvasContext.fillStyle = "green";
  canvasContext.beginPath();
  canvasContext.arc(snakeX, snakeY, 12, 0, Math.PI * 2, true);
  canvasContext.fill();
  if (snakeX === 790) {
    snakeSpeedX = 0;
    window.location.reload(false);

  }
}

function moveLeft() {
  canvasContext.fillStyle = "green";
  canvasContext.beginPath();
  canvasContext.arc(snakeX, snakeY, 12, 0, Math.PI * 2, true);
  canvasContext.fill();
  if (snakeX === 10) {
    snakeSpeedX = 0;
    window.location.reload(false);
  }
}

function moveUp() {
  canvasContext.fillStyle = "green";
  canvasContext.beginPath();
  canvasContext.arc(snakeX, snakeY, 12, 0, Math.PI * 2, true);
  canvasContext.fill();
  if (snakeY === 10) {
    snakeSpeedY = 0;
    window.location.reload(false);
  }
}

function moveDown() {
  canvasContext.fillStyle = "green";
  canvasContext.beginPath();
  canvasContext.arc(snakeX, snakeY, 12, 0, Math.PI * 2, true);
  canvasContext.fill();
  if (snakeY === 590) {
    snakeSpeedY = 0;
    window.location.reload(false);
  }

}

function makeFruit() {
canvasContext.fillStyle = "red";
canvasContext.beginPath();
canvasContext.arc(fruitX, fruitY, 10, 0, Math.PI * 2, true);
canvasContext.fill();


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

  let framesPerSecond = 30;
  setInterval(function() {
    drawCanvas();
    makeFruit();
     if (snakeDirection === "right") {
      snakeSpeedX = 5;
      moveRight();
      snakeX = snakeX + snakeSpeedX;
      snakeSpeedY = 0;
    } else if (snakeDirection === "left") {
      snakeSpeedX = 5;
      moveLeft();
      snakeX = snakeX - snakeSpeedX;
      snakeSpeedY = 0;
    } else if (snakeDirection === "up") {
      snakeSpeedY = 5;
      moveUp();
      snakeY = snakeY - snakeSpeedY;
      snakeSpeedX = 0;
    } else if (snakeDirection === "down") {
      snakeSpeedY = 5;
      moveDown();
      snakeY = snakeY + snakeSpeedY;
      snakeSpeedX = 0;
    } else {
      snakeStartPosition();
    }
  }, 1000/framesPerSecond);
};

