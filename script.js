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
}

function intro() {
	angle++;
	background(0, 0, 0);
	fill(255, 255, 255);
	textSize(800 * scaleResolutionX); //I'm just using this as a general scale/ratio factor, although it only works with appropriate ratios
	text("DP", 700 * scaleResolutionX, 250 * scaleResolutionY);
	textSize(75 * scaleResolutionX);
	text("roductions", 1100 * scaleResolutionX, 577.5 * scaleResolutionY);
	push();
    translate(200, 760);
	fill(-pulse, pulse, pulse + 100);
	rect(0, 0, 100, 100, 10);
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
	if(pulse<125){pulseRate = -0.25;}
	if(pulse>225){pulseRate = 0.25;}
    
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
