let canvas;
let canvasContext;
let appleX = 50;

window.onload = function() {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");

  setInterval(drawEverything, 1000)
  drawEverything();

}

function drawEverything() {
    appleX = appleX + 20;
    console.log(appleX);
  canvasContext.fillStyle = "grey";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
  canvasContext.fillStyle = "red";
  canvasContext.fillRect(100, 200, 50, 25);
  canvasContext.fillStyle = "red";
  canvasContext.fillRect(75, 200, appleX, 25);
}
