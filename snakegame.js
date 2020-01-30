let snakeSpeedX = 20;
let snakeSpeedY = 20;
let snakeDirection;
let lastItem;
let lastItemX;
let lastItemY;
let snakeArray = [
  { x: 200, y: 300 },
  { x: 180, y: 300 }
 // { x: 160, y: 300 }
];
let fruitX = Math.floor(Math.random() * 40) * 20;
let fruitY = Math.floor(Math.random() * 30) * 20;

function drawCanvas() {
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
}

//function snakeHead() {
// if (snakeDirection === "load") {
//   canvasContext.fillStyle = "green";
//  canvasContext.fillRect(snakeArray[0].x, snakeArray[0].y, 20, 20);
// } //else if ((snakeDirection === "right", "left")) {
// canvasContext.fillStyle = "green";
// canvasContext.fillRect(snakeArray[0].x,snakeArray[0].y, 20, 20);
// } else if ((snakeDirection === "up", "down")) {
//  canvasContext.fillStyle = "green";
//   canvasContext.fillRect(snakeArray[0].x, snakeArray[0].y, 20, 20);
//  }
//}

function drawSnake() {
  for (i = 0; i < snakeArray.length; i++) {
    if (snakeDirection === "load") {
    canvasContext.fillStyle = "green";
    canvasContext.fillRect(snakeArray[i].x, snakeArray[i].y, 20, 20);
    } else if (snakeDirection === "up") {
      snakeArray[i].x = snakeArray[i].x + 20;
      canvasContext.fillStyle = "green";
      canvasContext.fillRect(snakeArray[i].x, snakeArray[i].y, 20, 20);
    }
  }
}

function moveSnake() {
  for (i = 0; i < snakeArray.length; i++) {
    if (snakeDirection === "up") {
      snakeArray[i].y = snakeArray[i].y - snakeSpeedY;
      snakeSpeedX = 0;
    }
  }
}

//function snakeBody () {
//if (snakeDirection === "right") {
// for (i = 0; i < snakeArray.length; i++) {
//  lastItem = snakeArray.slice(-1)[0];
//  lastItemX = lastItem.x;
//  lastItemY = lastItem.y;
//  lastItemX = lastItemX - 20;
//   lastItemY = lastItemY;
//   canvasContext.fillStyle = "green";
//  canvasContext.fillRect(lastItemX, lastItemY, 20, 20);
//  }
// }
//}

//function makeFruit() {
// if (snakeHeadX === fruitX && snakeHeadY === fruitY) {
//   canvasContext.fillStyle = "red";
//  canvasContext.fillRect(0, 0, 0, 0);
//   let newSnakePiece = {
//     x: 200,
//      y: 300
//   };
//    snakeArray.push(newSnakePiece);
//    console.log(snakeArray);
//   debugger;
//   fruitX = Math.floor(Math.random() * 40) * 20;
//   fruitY = Math.floor(Math.random() * 30) * 20;
// } else {
// canvasContext.fillStyle = "red";
//  canvasContext.fillRect(fruitX, fruitY, 20, 20);
//}
//}

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
    // makeFruit();
    drawSnake();
    if (snakeDirection === "right") {
      moveSnake();
    } else if (snakeDirection === "left") {
      moveSnake();
    } else if (snakeDirection === "up") {
      moveSnake();
    } else if (snakeDirection === "down") {
      moveSnake();
    }
  }, 1000 / framesPerSecond);
};
