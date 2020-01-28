
let snakeHeadX = 200;
let snakeHeadY = 300;
let snakeBodyX;
let snakeBodyY;
let arrayX;
let bodyAxis = snakeBodyX + snakeBodyY;
let snakeSpeedX = 10;
let snakeSpeedY = 10;
let snakeDirection;
let snakeArray = [
  { x: 180, y: 300 }
];
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
  if (snakeHeadX === 800) {
    window.location.reload(false);
  }
}

function moveLeft() {
  canvasContext.fillStyle = "green";
  canvasContext.fillRect(snakeHeadX, snakeHeadY, 20, 20);
   if (snakeHeadX === 0) {
    window.location.reload(false);
  }
}

function moveUp() {
  canvasContext.fillStyle = "green";
  canvasContext.fillRect(snakeHeadX, snakeHeadY, 20, 20);
    if (snakeHeadY === 0) {
    window.location.reload(false);
  } 
}

function moveDown() {
  canvasContext.fillStyle = "green";
  canvasContext.fillRect(snakeHeadX, snakeHeadY, 20, 20);
  if (snakeHeadY === 600) {
    window.location.reload(false);
  }
}

function makeFruit() {
  if (snakeHeadX === fruitX && snakeHeadY === fruitY) {
    let newSnakePiece = new Object();
    newSnakePiece.x = 180;
    newSnakePiece.y = 300; 
     snakeArray.push(newSnakePiece);
     for (i = 0; i < snakeArray.length; i++) {
       let arrayX = snakeArray[i].x;
       let arrayY = snakeArray[i].y;
      canvasContext.fillStyle = "green";
      canvasContext.fillRect(arrayX, arrayY, 20, 20);
      console.log(snakeArray);
      debugger;
     }
} else {
  canvasContext.fillStyle = "red";
  canvasContext.fillRect(fruitX, fruitY, 20, 20);
}
}

function growSnake() {
  //if (snakeHeadX === fruitX && snakeHeadY === fruitY) {
    if (snakeDirection === "up") {
      snakeBodyX = snakeHeadX;
      snakeBodyY = snakeHeadY - 20;
      canvasContext.fillStyle = "green";
      canvasContext.fillRect(snakeBodyX, snakeBodyY, 20, 20);
    } else if (snakeDirection === "down") {
      snakeBodyX = snakeHeadX;
      snakeBodyY = snakeHeadY + 20;
      canvasContext.fillStyle = "green";
      canvasContext.fillRect(snakeBodyX, snakeBodyY, 20, 20);
    } else if (snakeDirection === "left") {
      snakeBodyX = snakeHeadX + 20;
      snakeBodyY = snakeHeadY;
      canvasContext.fillStyle = "green";
      canvasContext.fillRect(snakeBodyX, snakeBodyY, 20, 20)
    } else if (snakeDirection === "right"){
      snakeBodyX = snakeHeadX - 20;
      snakeBodyY = snakeHeadY;
      canvasContext.fillStyle = "green";
      canvasContext.fillRect(snakeBodyX, snakeBodyY, 20, 20)
    } else {
      snakeBodyX = snakeHeadX - 20;
      snakeBodyY = snakeHead;
      canvasContext.fillStyle = "green";
      canvasContext.fillRect(snakeBodyX, snakeBodyY, 20, 20)
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
      growSnake();
      snakeHeadX = snakeHeadX - snakeSpeedX;
      snakeBodyX = snakeBodyX - snakeSpeedX;
      snakeSpeedY = 0;
    } else if (snakeDirection === "up") {
      snakeSpeedY = 20;
      moveUp();
      growSnake();
      snakeHeadY = snakeHeadY - snakeSpeedY;
      snakeBodyY = snakeBodyX - snakeSpeedY;
      snakeSpeedX = 0;
    } else if (snakeDirection === "down") {
      snakeSpeedY = 20;
      moveDown();
      growSnake();
      snakeHeadY = snakeHeadY + snakeSpeedY;
      snakeSpeedX = 0;
    } else {
      snakeHead();
      growSnake();
     
    }
  }, 1000 / framesPerSecond);
};

