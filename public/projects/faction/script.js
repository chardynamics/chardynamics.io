var arialBold;

function preload() {
	arialBold = loadFont("/assets/fonts/arialbd.ttf");
}

//probably should find a better solution
var p5WindowWidth;
var scaleResolution;

function setup() {
	//probably should find a better solution
	p5WindowWidth = windowHeight * (16/9);
	Math.floor(p5WindowWidth);	
	scaleResolution = windowHeight/853;
    
	var canvas = createCanvas(p5WindowWidth, windowHeight);
	canvas.style('margin', 'auto');
	//canvas.style('border-style', 'none solid solid');
	canvas.parent('script-holder');
	
	rectMode(CENTER);
	textAlign(CENTER, CENTER);
	textFont(arialBold);
	angleMode(DEGREES);
	noStroke();
	
	var privacyBanner = document.querySelectorAll("[data-gg-privacy-banner-anchor]");
	for (var i = 0; i < privacyBanner.length; i++) {
		privacyBanner[i].parentNode.removeChild(privacyBanner[i]);
	}
}

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
	textSize(800 * scaleResolution); //I'm just using this as a general scale/ratio factor, although it only works with appropriate ratios
	text("DP", 700 * scaleResolution, 250 * scaleResolution);
	textSize(75 * scaleResolution);
	text("roductions", 1100 * scaleResolution, 577.5 * scaleResolution);
	push();
	translate(150 * scaleResolution, 730 * scaleResolution);
	rotate(angle);
	fill(-pulse.pulse, pulse.pulse, pulse.pulse + 100);
	rect(0, 0, 125 * scaleResolution, 125 * scaleResolution, 15*scaleResolution);
	pop();
	textSize(75 * scaleResolution);
	text("X", 150 * scaleResolution, 725 * scaleResolution);
	push();
	translate(bullet.timeLine * scaleResolution, 716 * scaleResolution);
	fill(100, 100, 100, bullet.soundBarrier);
	triangle(-7.5, 45, 40, 17.5, -7.5, -9);
	fill(158, 60, 14, bullet.bulletVisible);
	triangle(2, 27.5, 45, 17.5, 2, 10);
	pop();
	push();
	scale(3.5);
	translate(110 * scaleResolution, car.y * scaleResolution);
	rotate(car.rotate);
	fill(50, 0, 0);
	rect(-12 * scaleResolution,0,5 * scaleResolution,35 * scaleResolution,5*scaleResolution);
	rect(12 * scaleResolution,0,5 * scaleResolution,35 * scaleResolution,5*scaleResolution);
	fill(0, 120, 0);
	rect(0,0,20 * scaleResolution,40 * scaleResolution,5*scaleResolution);
	pop();
	push();
	scale(3.5);
	translate(110 * scaleResolution, car.y * scaleResolution);
	rotate(car.grotate);
	fill(0, 100, 0);
	rect(0,0,15 * scaleResolution,15 * scaleResolution,5*scaleResolution);
	rect(0,-20 * scaleResolution,5 * scaleResolution,25 * scaleResolution,0);
	pop();
	textSize(165 * scaleResolution);
	text("...and more", 1010 * scaleResolution, 715 * scaleResolution);
	rectMode(CORNER);
	fill(0);
	rect(1445  * scaleResolution, 670 * scaleResolution, bullet.textCover* scaleResolution, 122* scaleResolution);
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
    background(0, 100, pulse.pulse);
	fill(255, 245, 190);
	rect(windowWidth/2, windowHeight/2, windowWidth - 50, windowHeight - 50, 10);
	fill(52, 140, 49);
	rect(windowWidth/2, windowHeight/2, windowWidth - 100, windowHeight - 100, 10);
}
	
function draw() {
	pulse.pulse -= pulse.rate;
	if(pulse.pulse<125){pulse.rate = -1;}
	if(pulse.pulse>225){pulse.rate = 1;}
    
	if (scene == 1) {
		intro();
	} else if (scene == 2) {
		menu();
	}
	
	fill(255, 0, 0);
	textSize(25 * scaleResolution);
	text(windowWidth, mouseX + 125, mouseY);
	text(p5WindowWidth, mouseX + 125, mouseY + 20);
	text(windowHeight, mouseX + 125, mouseY + 40);
}

function windowResized() {
	p5WindowWidth = windowHeight * (16/9);
	Math.floor(p5WindowWidth);
	scaleResolution = windowHeight/853;
	resizeCanvas(p5WindowWidth, windowHeight);
}
