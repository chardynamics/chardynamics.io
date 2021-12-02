/*function preload() {
	//loading funcs only, example is like loading images
}*/

let scene = 1;

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent('script-holder');
}

function intro() {
	background(0);
	fill(255, 255, 255);
	rectMode(CENTER);
	
}

function draw() {
	if (scene == 1) {
		intro();
	}
	print(windowWidth);
	print(windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
