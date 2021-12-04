var scene = 2;
var fade = 130;
var arialBold;

function preload() {
	arialBold = loadFont("/assets/fonts/arialbd.ttf");
}

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent('script-holder');
	rectMode(CENTER);
	textAlign(CENTER, CENTER);
	textFont(arialBold);
    noStroke();
}

function intro() {
	background(0, 0, 0);
	fill(255, 255, 255);
	textSize(250);
	text("D", (windowWidth/2) - 250, 100);
	text("P", (windowWidth/2) + 250, 100);
}

function menu() {
	background(0, 200, 150);
	fill(0, 0, 0);
	rect(windowWidth/2, 100, 50, 50);
	textSize(36);
	textFont("Georgia");
	text("Hello World! in Georgia.", 500, 500);
}

function draw() {
	if (scene == 2) {
		intro();
	} else if (scene == 2) {
		menu();
	}
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
