/*function preload() {
	//loading funcs only, example is like loading images
}*/

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
 
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  cnv.parent('script-holder');
}

function draw() {
	background(0);
	for (var i = 0; i < 200; i += 20) {
    bezier(mouseX-(i/2.0), 40+i, 410, 20, 440, 300, 240-(i/16.0), 300+(i/8.0));
  }
}