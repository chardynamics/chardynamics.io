var scene = 1;
var fade = 130;
var arialBold;
var scaleResolutionX;
var scaleResolutionY;

function preload() {
	arialBold = loadFont("/assets/fonts/arialbd.ttf");
}

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent('script-holder');
	//probably should find a better solution
	scaleResolutionX = windowWidth/1517;
	scaleResolutionY = windowHeight/853;
	rectMode(CENTER);
	textAlign(CENTER, CENTER);
	textFont(arialBold);
    	noStroke();
}

function intro() {
	background(0, 0, 0);
	fill(255, 255, 255);
	textSize(750 * scaleResolutionX); //I'm just using this as a general scale/ratio factor, although it only works for Chromebook ratios
	text("DP", 500 * scaleResolutionX, 400 * scaleResolutionY);
	
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
	scaleResolutionX = windowWidth/1517;
	scaleResolutionY = windowHeight/853;
}
