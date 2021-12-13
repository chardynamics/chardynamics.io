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
	
	var privacyBanner = document.querySelectorAll("[data-gg-privacy-banner-anchor]");
	for (var i = 0; i < privacyBanner.length; i++) {
		privacyBanner[i].parentNode.removeChild(privacyBanner[i]);
	}
}

var arialBold;
var scaleResolutionX;
var scaleResolutionY;
var scene = 1;
var angle = 0;

var fade = {
	fade: 255,
	opp: 0,
}

var pulse = {
	pulse: 200,
	rate: 5,
}

var bullet = {
	timeLine: 454,
	timeLineVel: 1,
	textCover: -864,
	soundBarrier: 0,
	bulletVisible: 0,
}

var car = {
	y: 300,
	rotate: 0,
	grotate: 0,
}

function intro() {
	angle += 5;
	
	if (car.y > 210) {
		car.y -= 1;
	}
	if ((car.y == 210) && (car.rotate < 25)) {
		car.rotate += 1;
		car.grotate = car.rotate;
	}
	if (car.rotate == 25 && car.grotate < 90) {
        	car.grotate += 1;
	}
	if (car.grotate == 90) {
		bullet.bulletVisible = 255;
		if (bullet.timeLine <= 1525) {
			bullet.timeLine += 8;
		}
		if ((bullet.timeLine >= 497) && (bullet.soundBarrier < 50)) {
			bullet.soundBarrier += 5;
		}
	}
	if ((bullet.timeLine >= 536) && (bullet.textCover < 0)) {
		bullet.textCover += 8;
	}
	if ((bullet.timeLine >= 1525) && (fade.opp < 255)) {
		fade.opp += 2.5;
	}
	
	background(0, 0, 0);
	fill(255, 255, 255);
	textSize(800 * scaleResolutionX); //I'm just using this as a general scale/ratio factor, although it only works with appropriate ratios
	text("DP", 700 * scaleResolutionX, 250 * scaleResolutionY);
	textSize(75 * scaleResolutionX);
	text("roductions", 1100 * scaleResolutionX, 577.5 * scaleResolutionY);
	push();
	translate(150 * scaleResolutionX, 730 * scaleResolutionY);
	rotate(angle);
	fill(-pulse.pulse, pulse.pulse, pulse.pulse + 100);
	rect(0, 0, 125 * scaleResolutionX, 125 * scaleResolutionY, 15);
	pop();
	textSize(75 * scaleResolutionX);
	text("X", 150 * scaleResolutionX, 725 * scaleResolutionY);
	push();
	translate(bullet.timeLine * scaleResolutionX, 716 * scaleResolutionY);
	fill(100, 100, 100, bullet.soundBarrier);
	triangle(-7.5, 45, 40, 17.5, -7.5, -9);
	fill(158, 60, 14, bullet.bulletVisible);
	triangle(2, 27.5, 45, 17.5, 2, 10);
	pop();
	push();
	scale(3.5);
	translate(110 * scaleResolutionX, car.y * scaleResolutionY);
	rotate(car.rotate);
	fill(50, 0, 0);
	rect(-12 * scaleResolutionX,0,5 * scaleResolutionX,35 * scaleResolutionY,5);
	rect(12 * scaleResolutionX,0,5 * scaleResolutionX,35 * scaleResolutionY,5);
	fill(0, 120, 0);
	rect(0,0,20 * scaleResolutionX,40 * scaleResolutionY,5);
	pop();
	push();
	scale(3.5);
	translate(110 * scaleResolutionX, car.y * scaleResolutionY);
	rotate(car.grotate);
	fill(0, 100, 0);
	rect(0,0,15 * scaleResolutionX,15 * scaleResolutionY,5);
	rect(0,-20 * scaleResolutionX,5 * scaleResolutionX,25 * scaleResolutionY,0);
	pop();
	textSize(165 * scaleResolutionX);
	text("...and more", 1010 * scaleResolutionX, 715 * scaleResolutionY);
	rectMode(CORNER);
	fill(0);
	rect(1445  * scaleResolutionX, 670 * scaleResolutionY, bullet.textCover* scaleResolutionX, 122* scaleResolutionY);
	rectMode(CENTER);
	
	if (fade.fade > 0) {
		fill(0, 0, 0, fade.fade);
		rect(windowWidth/2, windowHeight/2, windowWidth, windowHeight);
		fade.fade -= 2.5;
	}

	fill(0, 0, 0, fade.opp);
	rect(windowWidth/2, windowHeight/2, windowWidth, windowHeight);
	
	if (fade.opp >= 255) {
		scene = 2;
	}
}

function menu() {
        background(0, 100, pulse);
	fill(255, 245, 190);
	rect(windowWidth/2, windowHeight/2, windowWidth - 25, windowHeight - 50, 10);
	fill(52, 140, 49);
	rect(windowWidth/2, windowHeight/2, windowWidth - 50, windowHeight - 80, 10);
}
	
function draw() {
	pulse.pulse -= pulse.rate;
	if(pulse.pulse<125){pulse.rate = -1;}
	if(pulse.pulse>225){pulse.rate = 1;}
    
	if (scene == 1) {
		intro();
	} else if (scene == 2) {
		menu()
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
