let canvas;
let canvasContext;
let snakeX = 50;
let snakeSpeedX = 5;
let snakeGrowX = snakeX - 10;

window.onload = function() {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");

  let framesPerSecond = 30;
  setInterval(function () {
    moveSnake();
    drawEverything();
  }, 1000/framesPerSecond);

}
function moveSnake() {
  snakeX = snakeX + snakeSpeedX;
  snakeGrowX = snakeGrowX + snakeSpeedX;
 //if(snakeX  > canvas.width) {
 //  snakeSpeedX = -snakeSpeedX;
// } else if (snakeX < 0) {
  //  snakeSpeedX = -snakeSpeedX;
  //}
}
function drawEverything() {
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
  canvasContext.fillStyle = "green";
  canvasContext.beginPath();
  canvasContext.arc(snakeX,100,8,0,Math.PI*2, true);
  canvasContext.fill();
  canvasContext.fillStyle = "green";
  canvasContext.beginPath();
  canvasContext.arc(snakeGrowX,100,8,0,Math.PI*2, true);
  canvasContext.fill();
  

}
