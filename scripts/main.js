var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//boule de glace
ctx.fillStyle = 'rgb(198, 21, 90)';
ctx.beginPath();
ctx.moveTo(70,200);
ctx.bezierCurveTo(130, 100, 200, 50, 250, 200);
// ctx.bezierCurveTo(70,400,56,355,125,200);
ctx.fill();
//cone
ctx.fillStyle = 'rgb(154, 81, 24)';
ctx.beginPath();
ctx.moveTo(70,200);
ctx.lineTo(160,500);
ctx.lineTo(250,200);
ctx.fill();
