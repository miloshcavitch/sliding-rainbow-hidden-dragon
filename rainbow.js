var colorRay = [];
var rojo = 255;
var verde = 0;
var azul = 0;

function rgbToHex(red, green, blue){
  var hexR, hexG, hexB;

  if (red < 10){
    hexR = "0" + red.toString(16);
  } else{
    hexR = red.toString(16);
  }
  if (green < 10){
    hexG = "0" + green.toString(16);
  } else{
    hexG = green.toString(16);
  }
  if (blue < 10){
    hexB = "0" + blue.toString(16);
  } else{
    hexB = blue.toString(16);
  }


  var hexString = "#" + hexR + hexG + hexB;
  return hexString;
}
for (var i = 0; i < 255; i++){
  colorRay[i] = rgbToHex(rojo, verde, azul);
  rojo--;
  verde++;
}
for (var i = 255; i < 510; i++){
  colorRay[i] = rgbToHex(rojo, verde, azul);
  verde--;
  azul++;
}
for (var i = 510; i < 765; i++){
  colorRay[i] = rgbToHex(rojo, verde, azul);
  rojo++;
  azul--;
}

for (var c = 0; c < colorRay.length; c++){
  console.log(colorRay[c]);
}



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
