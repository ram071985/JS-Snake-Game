let snakeDirection;
let lastItem;
let lastItemX;
let lastItemY;
let directionSet;
let snakeArray = [{ x: 200, y: 300 }];
let fruitX = Math.floor(Math.random() * 40) * 20;
let fruitY = Math.floor(Math.random() * 30) * 20;

function drawCanvas() {
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
  for (i = 0; i < snakeArray.length; i++) {
    if (snakeDirection === up) {
   let currentItem = snakeArray.slice(-1)[0]
    canvasContext.fillStyle = "green";
    canvasContext.fillRect(snakeArray[i].x - , snakeArray[i].y, 20, 20);
  }
}

//function moveUp() {
// for (i = 0; i < snakeArray.length; i++) {
//   if (snakeArray[i] !== 0)
//snakeArray[i].y = ;
//  }
//}

  function moveSnake() {
    for (i = 0; i < snakeArray.length; i++) {
      if (snakeDirection === "right") {
        snakeArray[i].x = snakeArray[i].x + 20;
      } else if (snakeDirection === "left") {
      snakeArray[i].x = snakeArray[i].x - 20;
      } else if (snakeDirection === "up") {
      snakeArray[i].y = snakeArray[i].y - 20;
      } else if (snakeDirection === "down") {
      snakeArray[i].y = snakeArray[i].y + 20;
      }
    }
    
  } 

  function addSnakePieceUp() {
    for (i = 0; i < snakeArray.length; i++) {
    if (snakeDirection === "up") {
    let lastItem = snakeArray.slice(-2)[0];
    let currentItem = snakeArray.slice(-1)[0]
    console.log(currentItem)
    let newSnakePiece = {
      x: snakeArray[0].x,
      y: lastItem.y - 20};
    snakeArray.push(newSnakePiece);
    }
  }
  }

  function addSnakeDown() { 
    if (snakeDirection === "down") {
      let lastItem = snakeArray.slice(-2)[0];
      let newSnakePiece = {
        x: lastItem.x + 20,
        y: snakeArray[0].y};
      snakeArray.push(newSnakePiece);
    }
  }

  function addSnakePieceRight() {
    if (snakeDirection === "right") {
      let lastItem = snakeArray.slice(-2)[0];
      let newSnakePiece = {
        x: lastItem.x + 20,
        y: snakeArray[0].y};
      snakeArray.push(newSnakePiece);
    }
  }

function makeFruit() {
  if (snakeArray[0].x === fruitX && snakeArray[0].y === fruitY) {
    canvasContext.fillStyle = "red";
    canvasContext.fillRect(0, 0, 0, 0);
    addSnakePieceRight();
    console.log(snakeArray);
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
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");
  let framesPerSecond = 5;
  setInterval(function() {
    drawCanvas();
    makeFruit();
    drawSnake();

    moveSnake();
    console.log(snakeArray);
  }, 1000 / framesPerSecond);
};
