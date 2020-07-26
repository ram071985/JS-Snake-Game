const DIRECTION_UP = "UP";
const DIRECTION_DOWN = "DOWN";
const DIRECTION_RIGHT = "RIGHT";
const DIRECTION_LEFT = "LEFT";

let snakeDirection;
let snakeArray = [{ x: 200, y: 300 }];

const fruit = {
  x: Math.floor(Math.random() * 40) * 20,
  y: Math.floor(Math.random() * 30) * 20
}

window.onload = function() {
  const canvas = document.getElementById("gameCanvas");
  const canvasContext = canvas.getContext("2d");
  let framesPerSecond = 10;
  setInterval(function() {
    drawCanvas(canvasContext);
    drawFruit(canvasContext);
    checkForSnakeEatingApple(canvasContext);
    moveSnake();
    addScore();
    drawSnake(canvasContext);
    checkForSnakeTouchingBoundaries();
    checkForSnakeEatingItself();
  }, 1000 / framesPerSecond);
};

window.addEventListener("keydown", function(e) {
  if (e.code === "ArrowRight" && snakeDirection != DIRECTION_RIGHT) {
    snakeDirection = DIRECTION_RIGHT;
  } else if (e.code === "ArrowLeft" && snakeDirection != DIRECTION_LEFT) {
    snakeDirection = DIRECTION_LEFT;
  } else if (e.code === "ArrowUp" && snakeDirection != DIRECTION_UP) {
    snakeDirection = DIRECTION_UP;
  } else if (e.code === "ArrowDown" && snakeDirection != DIRECTION_DOWN) {
    snakeDirection = DIRECTION_DOWN;
  }
});


window.addEventListener("scroll", function(e) {
    window.scrollTo(0, 800);
});

function drawCanvas(context) {
  context.fillStyle = "black";
  context.fillRect(0, 0, context.canvas.width, context.canvas.height);
}

function drawSnake(context) {
  for (i = 0; i < snakeArray.length; i++) {
    context.fillStyle = "green";
    context.fillRect(snakeArray[i].x, snakeArray[i].y, 20, 20);
  }
}

function moveSnake() {
  const snakeCopy = snakeArray.map(snakePart => {
    return { x: snakePart.x, y: snakePart.y };
  });

  if (snakeDirection === DIRECTION_RIGHT) {
    snakeArray[0].x += 20;
  } else if (snakeDirection === DIRECTION_LEFT) {
    snakeArray[0].x -= 20;
  } else if (snakeDirection === DIRECTION_UP) {
    snakeArray[0].y -= 20;
  } else if (snakeDirection === DIRECTION_DOWN) {
    snakeArray[0].y += 20;
  }

  for (i = 1; i < snakeArray.length; i++) {
    snakeArray[i].x = snakeCopy[i - 1].x;
    snakeArray[i].y = snakeCopy[i - 1].y;
  }
}

function checkForSnakeEatingApple() {
  if (snakeArray[0].x === fruit.x && snakeArray[0].y === fruit.y) {
    let newSnakePiece = Object.assign({}, snakeArray[0]);

    if(snakeDirection === DIRECTION_UP) {
      newSnakePiece.y += 20;
    }
    if(snakeDirection === DIRECTION_DOWN) {
      newSnakePiece.y -= 20;
    }
    if(snakeDirection === DIRECTION_RIGHT) {
      newSnakePiece.x += 20;
    }
    if(snakeDirection === DIRECTION_LEFT) {
      newSnakePiece.x -= 20;
    }

    snakeArray.push(newSnakePiece);

    fruit.x = Math.floor(Math.random() * 40) * 20;
    fruit.y = Math.floor(Math.random() * 30) * 20;
  } 
}

function drawFruit(context) {
  context.fillStyle = "red";
    context.fillRect(fruit.x, fruit.y, 20, 20);
}


function checkForSnakeTouchingBoundaries() {
  const isSnakeTouchingRight = snakeArray[0].x === 800;
  const isSnakeTouchingLeft = snakeArray[0].x === -20;
  const isSnakeTouchingTop = snakeArray[0].y === -20;
  const isSnakeTouchingBottom = snakeArray[0].y === 600;

  if (isSnakeTouchingRight || isSnakeTouchingLeft 
    || isSnakeTouchingTop || isSnakeTouchingBottom) {
    window.alert("GAME OVER!");
    window.location.reload(false);
  }
}

function checkForSnakeEatingItself() {
  for (i = 1; i < snakeArray.length; i++) {
    if (
      snakeArray[0].x === snakeArray[i].x &&
      snakeArray[0].y === snakeArray[i].y
    ) {
      window.alert("GAME OVER!");
      window.location.reload(false);
    }
  }
}

function addScore() {
  let scoreNumber = document.getElementById("score");
  if (snakeArray[0].x === fruit.x && snakeArray[0].y === fruit.y) {
    let arrayLength = snakeArray.length;
    let arrayLengthString = arrayLength.toString();
    scoreNumber.textContent = "Score = " + arrayLengthString;
  }
}