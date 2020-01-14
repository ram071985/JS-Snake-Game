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
  if(appleX > canvas.width) {
    appleSpeedX = -appleSpeedX;
  } else if (appleX < 0) {
    appleSpeedX = -appleSpeedX;
  }
}
function drawEverything() {
  canvasContext.fillStyle = "grey";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
  canvasContext.fillStyle = "red";
  canvasContext.beginPath();
  canvasContext.arc(appleX,100,6,0,Math.PI*2, true);
  canvasContext.fill();
}
