var canvas = document.getElementById("creativeCoding");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");

var x = 0;
var y = 0;
var incrementor = 1;

function Square() {
  ctx.fillStyle = "deeppink";
  ctx.fillRect(x, y, 100, 100);

  ctx.fillStyle = "purple";
  ctx.fillRect(-x, 600, 700, 100);

  ctx.fillStyle = "yellow";
  ctx.fillRect(x, 200, 400, 20);
}

function drawBoxxy() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

// Adding Strings 

  ctx.font = "50px Arial";
  ctx.fillStyle = "deepskyblue";
  ctx.fillText("See you later Alligator", 20, y);
  ctx.fillStyle = "deeppink";
  ctx.fillText("holy moly Guacamole", x, y);


//  Passing a variable with text
ctx.fillStyle = "#ffb703";  
let seriousQuestion = "Bye bye butterfly";
  ctx.fillText(seriousQuestion, x, 400);







  Square();
  while (x + incrementor > canvas.width || x + incrementor < 0) {
    incrementor = -incrementor;
  }
  while (y + incrementor > canvas.height || y + incrementor < 0) {
    incrementor = -incrementor;
  }
  x += incrementor;
  y += incrementor;
}

setInterval(drawBoxxy, 10);
