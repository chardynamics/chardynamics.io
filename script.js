/*function preload() {
	//loading funcs only, example is like loading images
}*/

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent('script-holder');
}

function draw() {
	background(0);
	fill(255, 255, 255);
	rect(500, 500, 100, 100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
