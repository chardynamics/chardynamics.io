/*function preload() {
	//loading funcs only, example is like loading images
}*/

let scene;

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent('script-holder');
}

function draw() {
	background(0);
	fill(255, 255, 255);
	print(windowWidth);
	print(windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
