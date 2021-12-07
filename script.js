var scene = 1;
var fade = 130;
var arialBold;
var scaleResolutionX;
var scaleResolutionY;

//probably should find a better solution
scaleResolutionX = windowWidth/1517;
scaleResolutionY = windowHeight/853;


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
	textSize(750);
	text("DP", 500 * scaleResolutionX, windowHeight/2;
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
	if (scene == 1) {
		intro();
	} else if (scene == 2) {
		menu();
	}
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
