var scene = 2;
var fade = 130;
var arialBold;

function preload() {
	arialBold = ('
}

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent('script-holder');
	rectMode(CENTER);
    noStroke();
}

function intro() {
	textAlign(CENTER, CENTER);
	var blackScreen = false;
	if(fade < 255){
		angle += 3;
		fade += 2.5;
	} else {
		blackScreen = true;
		s = 1;
		fade = 0;
	}
	background(0, 0, 0);
	fill(255, 255, 255);
	textSize(250);
	text("D", 25, 220);
	text("P", 315, 220);
	textSize(40);
	text("ynamic", 176, 220);
	text("roductions", 375, 220);
	pushMatrix();
	translate(5, -5);
	rect(100, 140, 30, 15);
	triangle(110, 120, 140, 140, 110, 140);
	triangle(110, 160, 140, 140, 110, 140);
	popMatrix();
	textSize(67);
	text("cubeRedux();", 100, 550);

	pushMatrix();
	fill(-pulse, pulse, -pulse + 100);
	translate(300, 375);
	rotate(angle);
	rect(0, 0, 150, 150, 25);
	popMatrix();
	fill(255, 255, 255);
	textSize(100);
	textAlign(CENTER, CENTER);
	text("X", 300, 370);
	textAlign(LEFT,LEFT);

	fill(0, 0, 0, fade);
	rect(300, 300, 600, 600);

	if (blackScreen === true) {
		fill(0, 0, 0);
		rect(300, 300, 600, 600);
	}
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
