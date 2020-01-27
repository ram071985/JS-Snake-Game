
let snakeHeadX = 200;
let snakeHeadY = 300;
let snakeBodyX = 180
let snakeBodyY = 300;
let snakeSpeedX = 10;
let snakeSpeedY = 10;
let snakeDirection;
let snakeArray = [];
let array = "hey";

let fruitX = Math.floor(Math.random() * 40) * 20;
let fruitY = Math.floor(Math.random() * 30) * 20;

function drawCanvas() {
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
}

function snakeHead() {
  canvasContext.fillStyle = "green";
  canvasContext.fillRect(200, 300, 20, 20)
}

function moveRight() {
  canvasContext.fillStyle = "green";
  canvasContext.fillRect(snakeHeadX, snakeHeadY, 20, 20);
  if (snakeHeadX === fruitX && snakeHeadY === fruitY) {
  // let addSection = snakeArray[i] - 20;
  } else if (snakeHeadX === 800) {
    window.location.reload(false);
  }
}

function moveLeft() {
  canvasContext.fillStyle = "green";
  canvasContext.fillRect(snakeHeadX, snakeHeadY, 20, 20);
  if (snakeHeadX === fruitX && snakeHeadY === fruitY) {
  
  } else if (snakeHeadX === 0) {
    window.location.reload(false);
  }
}

function moveUp() {
  canvasContext.fillStyle = "green";
  canvasContext.fillRect(snakeHeadX, snakeHeadY, 20, 20);
  if (snakeHeadX === fruitX && snakeHeadY === fruitY) {
    window.location.reload(false);
  } else if (snakeHeadY === 0) {
    window.location.reload(false);
  }
}

function moveDown() {
  canvasContext.fillStyle = "green";
  canvasContext.fillRect(snakeHeadX, snakeHeadY, 20, 20);
  if (snakeHeadX === fruitX && snakeHeadY === fruitY) {
    window.location.reload(false);
  } else if (snakeHeadY === 600) {
    window.location.reload(false);
  }
}

function makeFruit() {
  if (snakeHeadX === fruitX && snakeHeadY === fruitY) {
  canvasContext.fillStyle = "red";
  canvasContext.fillRect(0, 0, 0, 0);
} else {
  canvasContext.fillStyle = "red";
  canvasContext.fillRect(fruitX, fruitY, 20, 20);
}
}

function growSnake() {
  //if (snakeHeadX === fruitX && snakeHeadY === fruitY) {
    canvasContext.fillStyle = "green";
    canvasContext.fillRect(snakeBodyX, snakeBodyY, 20, 20)
    // snakeArray.push(array);
  //}
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
      growSnake();
      snakeHeadX = snakeHeadX + snakeSpeedX;
      snakeBodyX = snakeBodyX + snakeSpeedX;
      snakeSpeedY = 0;
    } else if (snakeDirection === "left") {
      snakeSpeedX = 20;
      moveLeft();
   
      snakeHeadX = snakeHeadX - snakeSpeedX;
      snakeSpeedY = 0;
    } else if (snakeDirection === "up") {
      snakeSpeedY = 20;
      moveUp();
   
      snakeHeadY = snakeHeadY - snakeSpeedY;
      snakeSpeedX = 0;
    } else if (snakeDirection === "down") {
      snakeSpeedY = 20;
      moveDown();
      
      snakeHeadY = snakeHeadY + snakeSpeedY;
      snakeSpeedX = 0;
    } else {
      snakeHead();
      growSnake();
    }
  }, 1000 / framesPerSecond);
};
