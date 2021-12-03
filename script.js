/*function preload() {
	//loading funcs only, example is like loading images
}*/



let scene = 1;

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent('script-holder');
	rectMode(CENTER);
}

function draw() {
	background(0, 200, 150);
	fill(0, 0, 0);
	rect(windowWidth/2, 100, 50, 50);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
