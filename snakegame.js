


let canvas;
let canvasContext;


window.onload = function() {
     canvas = documnet.getElementById('gameCanvas');
     canvasContext = canvas.getContext('2d');
     canvasContext.fillStyle = 'black';
     canvasContext.fillRect(0,0,canvas.width,canvas.height);
}