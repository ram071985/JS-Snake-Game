let snakeDirection;
let lastItem;
let lastItemX;
let lastItemY;
let snakeArray = [
  { x: 200, y: 300 },
  { x: 180, y: 300 },
  { x: 160, y: 300 }
];
let fruitX = Math.floor(Math.random() * 40) * 20;
let fruitY = Math.floor(Math.random() * 30) * 20;

function drawCanvas() {
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
  for (i = 0; i < snakeArray.length; i++) {
    canvasContext.fillStyle = "green";
    canvasContext.fillRect(snakeArray[i].x, snakeArray[i].y, 20, 20);
  }
}

function moveSnake() {

    if (snakeDirection === "right") {
      for (i = 0; i < snakeArray.length; i++) {
      snakeArray[i].x = snakeArray[i].x + 20;
      }
    } else if (snakeDirection === "left") {
      for (i = 0; i < snakeArray.length; i++) {
      snakeArray[i].x = snakeArray[i].x - 20
      }
    } else if (snakeDirection === "up") {
      for (i = 0; i < snakeArray.length; i++) {
        snakeArray[i] = 0;
snakeArray[i].y = snakeArray[i].y - 20;
         

        }
      }
  
      
    //  snakeArray[i].y = ;


      //   } else if (snakeDirection === "down") {
      //    let lastItem = snakeArray.slice(-2)[0];
      //  let currentItem = snakeArray.slice(-1)[0];
      //   currentItem.x = lastItem.x;
      //   currentItem.y = lastItem.y;
      //   lastItem.y = lastItem.y + 20;
      // }
    
  
}

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
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");
  let framesPerSecond = 5;
  setInterval(function() {
    drawCanvas();
    //  makeFruit();
    drawSnake();
    moveSnake();
    console.log(snakeArray);
  }, 1000 / framesPerSecond);
};



