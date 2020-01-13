let canvas;
let canvasContext;
let appleX = 50;
let appleSpeedX = 5;

window.onload = function() {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");

  let framesPerSecond = 30;
  setInterval(function () {
    moveEveryThing();
    drawEverything();
  }, 1000/framesPerSecond);

}
function moveEveryThing() {
  appleX = appleX + appleSpeedX;
  if(appleX > 800) {
    appleSpeedX = -5;
  } else if(appleX < 0) {
    appleSpeedX = 5;
  }
}
function drawEverything() {
  moveEveryThing();
  canvasContext.fillStyle = "grey";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
  canvasContext.fillStyle = "red";
  canvasContext.fillRect(appleX, 100, 10,10 );
}
