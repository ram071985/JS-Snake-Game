let canvas;
let canvasContext;

window.onload = function() {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");
  drawEverything();
};

function drawEverything() {
  canvasContext.fillStyle = "grey";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
  canvasContext.fillStyle = "red";
  canvasContext.fillRect(100, 200, 50, 25);
  canvasContext.fillStyle = "red";
  canvasContext.fillRect(150, 200, 50, 25);
}
