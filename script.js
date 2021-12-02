/*function preload() {
	//loading funcs only, example is like loading images
}*/

let scene = 1;

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent('script-holder');
	rectMode(CENTER);
}

function intro() {
	background(255, 255, 255);
	fill(255, 255, 255);
	
}

function draw() {
	if (scene == 1) {
		intro();
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
