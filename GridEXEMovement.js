var width = 80;
var height = 40;
var yspeed = 25;
var xspeed = 25; 

function leftArrowPressed() {
  var element = document.getElementById("image1");
element.style.left = parseInt(element.style.left) - xspeed+'px';
return true;
  }



  function rightArrowPressed() {
  var element = document.getElementById("image1");
element.style.left = parseInt(element.style.left) + xspeed +'px';
return true;
  }



  function upArrowPressed() {
  var element = document.getElementById("image1");
  element.style.top = parseInt(element.style.top) - yspeed + 'px';

return true;

  }

  function downArrowPressed() {

  var element = document.getElementById("image1");
  element.style.top = parseInt(element.style.top) + yspeed + 'px';
  return true;
  }


  function moveSelection(evt) {
      switch (evt.keyCode) {
          case 37:
          leftArrowPressed();
          break;
          case 39:
          rightArrowPressed();
          break;
          case 38:
          upArrowPressed();
          break;
          case 40:
          downArrowPressed();
          break;
          }
      };

function docReady()
{

window.addEventListener('keydown', moveSelection);
}

var canvas = new fabric.Canvas('c', { selection: false });
var grid = 50;

// create grid

for (var i = 0; i < (600 / grid); i++) {
  canvas.add(new fabric.Line([ i * grid, 0, i * grid, 600], { stroke: '#ccc', selectable: false }));
  canvas.add(new fabric.Line([ 0, i * grid, 600, i * grid], { stroke: '#ccc', selectable: false }))
}

// add objects

canvas.add(new fabric.Rect({ 
  left: 100, 
  top: 100, 
  width: 50, 
  height: 50, 
  fill: '#faa', 
  originX: 'left', 
  originY: 'top',
  centeredRotation: true
}));

canvas.add(new fabric.Circle({ 
  left: 300, 
  top: 300, 
  radius: 50, 
  fill: '#9f9', 
  originX: 'left', 
  originY: 'top',
  centeredRotation: true
}));

// snap to grid

canvas.on('object:moving', function(options) { 
  options.target.set({
    left: Math.round(options.target.left / grid) * grid,
    top: Math.round(options.target.top / grid) * grid
  });
});

