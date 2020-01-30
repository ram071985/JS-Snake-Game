let snakeHeadX;
let snakeHeadY;
let snakeSpeedX = 20;
let snakeSpeedY = 20;
let snakeDirection;
let lastItem;
let lastItemX;
let lastItemY;
let snakeArray = [{ x: 200, y: 300 }];
let fruitX = Math.floor(Math.random() * 40) * 20;
let fruitY = Math.floor(Math.random() * 30) * 20;

function drawCanvas() {
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
}

function snakeHead() {
  if (snakeDirection === "load") {
    snakeHeadX = snakeArray[0].x;
    snakeHeadY = snakeArray[0].y;
    canvasContext.fillStyle = "green";
    canvasContext.fillRect(snakeHeadX, snakeHeadY, 20, 20);
  } else if ((snakeDirection === "right", "left")) {
    snakeHeadY = snakeHeadY;
    canvasContext.fillStyle = "green";
    canvasContext.fillRect(snakeHeadX, snakeHeadY, 20, 20);
  } else if ((snakeDirection === "up", "down")) {
    snakeHeadX = snakeHeadX;
    canvasContext.fillStyle = "green";
    canvasContext.fillRect(snakeHeadX, snakeHeadY, 20, 20);
  }
}

function snakeBody () {
  if (snakeDirection === "right") {
    lastItem = snakeArray.slice(-1)[0];
    lastItemX = lastItem.x;
    lastItemY = lastItem.y;
    lastItemX = lastItemX - 20;
    lastItemY = lastItemY;
    canvasContext.fillStyle = "green";
    canvasContext.fillRect(lastItemX, lastItemY, 20, 20);
  }
}

function makeFruit() {
  if (snakeHeadX === fruitX && snakeHeadY === fruitY) {
    canvasContext.fillStyle = "red";
    canvasContext.fillRect(0, 0, 0, 0);
    let newSnakePiece = {
      x: 200,
      y: 300
    };
    snakeArray.push(newSnakePiece);
    console.log(snakeArray);
    debugger;
    fruitX = Math.floor(Math.random() * 40) * 20;
    fruitY = Math.floor(Math.random() * 30) * 20;
  } else {
    canvasContext.fillStyle = "red";
    canvasContext.fillRect(fruitX, fruitY, 20, 20);
  }
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
  snakeDirection = "load";
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");
  let framesPerSecond = 15;
  setInterval(function() {
    drawCanvas();
    makeFruit();
    if (snakeDirection === "right") {
      snakeHead();
      snakeBody();
      snakeHeadX = snakeHeadX + snakeSpeedX;
      lastItemX = lastItemX + snakeSpeedX;
    } else if (snakeDirection === "left") {
      snakeHead();
      snakeHeadX = snakeHeadX - snakeSpeedX;
    } else if (snakeDirection === "up") {
      snakeHead();
      snakeHeadY = snakeHeadY - snakeSpeedY;
    } else if (snakeDirection === "down") {
      snakeHead();
      snakeHeadY = snakeHeadY + snakeSpeedY;
    } else {
      snakeHead();
    }
  }, 1000 / framesPerSecond);
};
