


let canvas;
let canvasContext;


window.onload = function() {
     canvas = document.getElementById('gameCanvas');
     canvasContext = canvas.getContext('2d');
     canvasContext.fillStyle = 'grey';
     canvasContext.fillRect(0,0,canvas.width,canvas.height);
}