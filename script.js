var scene = 1;
var fade = 130;
var arialBold;
var scaleResolutionX;
var scaleResolutionY;
var pulse =  200;
var pulseRate = 5;
var angle = 0;

function preload() {
	arialBold = loadFont("https://chardynamics.github.io/assets/fonts/arialbd.ttf");
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
	angleMode(DEGREES);
}

function intro() {
	angle += 5;
	background(0, 0, 0);
	fill(255, 255, 255);
	textSize(800 * scaleResolutionX); //I'm just using this as a general scale/ratio factor, although it only works with appropriate ratios
	text("DP", 700 * scaleResolutionX, 250 * scaleResolutionY);
	textSize(75 * scaleResolutionX);
	text("roductions", 1100 * scaleResolutionX, 577.5 * scaleResolutionY);
	push();
    translate(150 * scaleResolutionX, 730 * scaleResolutionY);
	rotate(angle);
	fill(-pulse, pulse, pulse + 100);
	rect(0, 0, 125 * scaleResolutionX, 125 * scaleResolutionY, 15);
	pop();
	textSize(75 * scaleResolutionX);
	text("X", 150 * scaleResolutionX, 725 * scaleResolutionY);
	push();
    translate(625, 155);
    rotate(90);
    fill(0, 120, 0);
    rect(0,0,20 * scaleResolutionX,40 * scaleResolutionY,5);
    fill(50);
    rect(-13 * scaleResolutionX,0,5 * scaleResolutionX,35 * scaleResolutionY,5);
    rect(12 * scaleResolutionX,0,5 * scaleResolutionX,35 * scaleResolutionY,5);
	pop();
	push();
    translate(625, 155);
    rotate(180);
    fill(0, 100, 0);
    rect(0,0,15 * scaleResolutionX,15 * scaleResolutionY,5);
    rect(0,-10 * scaleResolutionX,5 * scaleResolutionX,20 * scaleResolutionY,0);
	pop();
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
	pulse -= pulseRate;
	if(pulse<125){pulseRate = -1;}
	if(pulse>225){pulseRate = 1;}
    
	if (scene == 1) {
		intro();
	} else if (scene == 2) {
		menu();
	}
	fill(255, 0, 0);
	textSize(25 * scaleResolutionX);
	text(mouseX, mouseX + 125, mouseY);
	text(mouseY, mouseX + 125, mouseY + 20);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	scaleResolutionX = windowWidth/1517;
	scaleResolutionY = windowHeight/853;
}
