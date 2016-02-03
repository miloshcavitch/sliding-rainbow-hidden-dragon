var rojo = 255;
var verde = 0;
var azul = 0;

var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var startPos = 0;
function draw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (startPos == 765){
    startPos = 0;
  } else{
    startPos++;
  }

  for (var i = startPos; i < (colorRay.length + startPos); i++){
      var p = i - startPos;
      var j = i;
      if (i > 765){//index rollover
        j = i - 765;
      }
      ctx.beginPath();
      ctx.rect(p, 0, canvas.width, canvas.height);
      ctx.fillStyle = colorRay[j];
      ctx.fill();
      ctx.closePath();
    }
}

setInterval(draw, 10);
