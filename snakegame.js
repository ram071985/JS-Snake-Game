let snakeDirection;
let snakeArray = [{ x: 200, y: 300 }];
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
  const snakeCopy = snakeArray.map(snakePart => {
    return { x: snakePart.x, y: snakePart.y };
  });
  if (snakeDirection === "right") {
    console.log(snakeDirection === "right");
    snakeArray[0].x += 20;
  } else if (snakeDirection === "left") {
    snakeArray[0].x -= 20;
  } else if (snakeDirection === "up") {
    snakeArray[0].y -= 20;
  } else if (snakeDirection === "down") {
    snakeArray[0].y += 20;
  }
  for (i = 1; i < snakeArray.length; i++) {
    snakeArray[i].x = snakeCopy[i - 1].x;
    snakeArray[i].y = snakeCopy[i - 1].y;
  }
}

function addSnakePieceUp() {
  if (snakeDirection === "up") {
    let newSnakePiece = {
      x: snakeArray[0].x,
      y: snakeArray[0].y + 20
    };
    snakeArray.push(newSnakePiece);
  }
}

function addSnakePieceDown() {
  if (snakeDirection === "down") {
    let newSnakePiece = {
      x: snakeArray[0].x,
      y: snakeArray[0].y - 20
    };
    snakeArray.push(newSnakePiece);
  }
}

function addSnakePieceRight() {
  if (snakeDirection === "right") {
    let newSnakePiece = {
      x: snakeArray[0].x - 20,
      y: snakeArray[0].y
    };
    snakeArray.push(newSnakePiece);
  }
}

function addSnakePieceLeft() {
  if (snakeDirection === "left") {
    let newSnakePiece = {
      x: snakeArray[0].x + 20,
      y: snakeArray[0].y
    };
    snakeArray.push(newSnakePiece);
  }
}
function makeFruit() {
  if (snakeArray[0].x === fruitX && snakeArray[0].y === fruitY) {
    canvasContext.fillStyle = "red";
    canvasContext.fillRect(0, 0, 0, 0);
    addSnakePieceUp();
    addSnakePieceDown();
    addSnakePieceRight();
    addSnakePieceLeft();
    fruitX = Math.floor(Math.random() * 40) * 20;
    fruitY = Math.floor(Math.random() * 30) * 20;
  } else {
    canvasContext.fillStyle = "red";
    canvasContext.fillRect(fruitX, fruitY, 20, 20);
  }
}

function noScroll() {
  window.scrollTo(0, 800);
}

function startOver() {
  if (snakeArray[0].x === 800) {
    window.alert("GAME OVER!");
    window.location.reload(false);
  } else if (snakeArray[0].x === -20) {
    window.alert("GAME OVER!");
    window.location.reload(false);
  } else if (snakeArray[0].y === -20) {
    window.alert("GAME OVER!");
    window.location.reload(false);
  } else if (snakeArray[0].y === 600) {
    window.alert("GAME OVER!");
    window.location.reload(false);
  }
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
  if (snakeArray[0].x === fruitX && snakeArray[0].y === fruitY) {
    let arrayLength = snakeArray.length;
    let arrayLengthString = arrayLength.toString();
    scoreNumber.textContent = "Score = " + arrayLengthString;
  }
}

window.addEventListener("keydown", function(e) {
  if (e.code === "ArrowRight" && snakeDirection != "left") {
    snakeDirection = "right";
  } else if (e.code === "ArrowLeft" && snakeDirection != "right") {
    snakeDirection = "left";
  } else if (e.code === "ArrowUp" && snakeDirection != "down") {
    snakeDirection = "up";
  } else if (e.code === "ArrowDown" && snakeDirection != "up") {
    snakeDirection = "down";
  }
});

window.addEventListener("scroll", noScroll);

window.onload = function() {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");
  let framesPerSecond = 10;
  setInterval(function() {
    drawCanvas();
    makeFruit();
    moveSnake();
    addScore();
    drawSnake();
    startOver();
  }, 1000 / framesPerSecond);
};
