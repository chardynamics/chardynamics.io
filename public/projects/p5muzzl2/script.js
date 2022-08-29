var p5WindowWidth;
var scaleResolution;

var fade = {
	intro: 255,
	out: 0
}

var introVar = {
	cubeRotate: 0,

}

function setup() {
	//probably should find a better solution
	p5WindowWidth = 1516;
	Math.floor(p5WindowWidth);
	windowHeight = 853;
	scaleResolution = windowHeight/853;
    
	var canvas = createCanvas(p5WindowWidth, windowHeight);
	canvas.style('margin', 'auto');
	//canvas.style('border-style', 'none solid solid');
	canvas.parent('script-holder');
	
	rectMode(CENTER);
	textAlign(CENTER, CENTER);
	angleMode(DEGREES);
	noStroke();
	
	//var privacyBanner = document.querySelectorAll("[data-gg-privacy-banner-anchor]");
	//for (var i = 0; i < privacyBanner.length; i++) {
	//	privacyBanner[i].parentNode.removeChild(privacyBanner[i]);
	//}

	//car.x = Math.floor(p5WindowWidth/2);
	//car.y = Math.floor(windowHeight/2);
	//car.bulletX = Math.floor(p5WindowWidth/2);
	//car.bulletY = Math.floor(windowHeight/2);
}

function draw() {
	if (scene == 1) {
		intro();
	} else if (scene == 2) {
		menu();
	} else if (scene == 3) {
		levelOne();
	}
	debug();
	pulseMath();
}

function intro() {
	introVar.cubeRotate += 5;
	
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
		introBullet.bulletVisible = 255;
		if (introBullet.timeLine <= 1525) {
			introBullet.timeLine += 8;
		}
		if ((introBullet.timeLine >= 497) && (introBullet.soundBarrier < 50)) {
			introBullet.soundBarrier += 5;
		}
	}
	if ((introBullet.timeLine >= 536)) {
		introBullet.textCover += 8;
	}
	if ((introBullet.timeLine >= 1525) && (fade.opp < 255)) {
		fade.opp += 2.5;
	}
	
	background(0);
	fill(255, 255, 255);
	textSize(800 * scaleResolution); //I'm just using this as a general scale/ratio factor, although it only works with appropriate ratios
	text("DP", 700 * scaleResolution, 250 * scaleResolution);
	textSize(75 * scaleResolution);
	text("roductions", 1100 * scaleResolution, 577.5 * scaleResolution);
	push();
	translate(150 * scaleResolution, 730 * scaleResolution);
	rotate(introAngle);
	fill(-pulse.pulse, pulse.pulse, pulse.pulse + 100);
	rect(0, 0, 125 * scaleResolution, 125 * scaleResolution, 15*scaleResolution);
	pop();
	textSize(75 * scaleResolution);
	text("X", 150 * scaleResolution, 725 * scaleResolution);
	push();
	scale(3.5);
	translate(110 * scaleResolution, car.y * scaleResolution);
	fill(50, 0, 0);
	rect(-12 * scaleResolution,0,5 * scaleResolution,35 * scaleResolution,5*scaleResolution);
	rect(12 * scaleResolution,0,5 * scaleResolution,35 * scaleResolution,5*scaleResolution);
	fill(0, 120, 0);
	rect(0,0,20 * scaleResolution,40 * scaleResolution,5*scaleResolution);
	pop();
	textSize(165 * scaleResolution);
	text("...and more", 1010 * scaleResolution, 715 * scaleResolution);
	rectMode(CORNER);
	fill(0);
	//rect(1445 * scaleResolution, 670 * scaleResolution, bullet.textCover* scaleResolution, 122* scaleResolution);
	rect(581 * scaleResolution, 670 * scaleResolution, introBullet.textCover * scaleResolution, 122* scaleResolution);
	push();
	translate(introBullet.timeLine * scaleResolution, 716 * scaleResolution);
	fill(100, 100, 100, introBullet.soundBarrier);
	triangle(-7.5, 45, 40, 17.5, -7.5, -9);
	fill(158, 60, 14, introBullet.bulletVisible);
	triangle(2, 27.5, 45, 17.5, 2, 10);
	pop();
	rectMode(CENTER);
	push();
	scale(3.5);
	translate(110 * scaleResolution, car.y * scaleResolution);
	rotate(car.grotate);
	fill(0, 100, 0);
	rect(0,0,15 * scaleResolution,15 * scaleResolution,5*scaleResolution);
	rect(0,-20 * scaleResolution,5 * scaleResolution,25 * scaleResolution,0);
	pop();
	
	if (fade.intro > 0) {
		fill(0, 0, 0, fade.intro);
		rect(windowWidth/2, windowHeight/2, windowWidth, windowHeight);
		fade.intro -= 2.5;
	}

	fill(0, 0, 0, fade.out);
	rect(windowWidth/2, windowHeight/2, windowWidth, windowHeight);
	
	if (fade.out >= 255) {
		scene = 2;
		fade.out = 255;
	}
}

function pulseMath() {
	pulse.pulse -= pulse.rate;
	if(pulse.pulse<125){pulse.rate = -1;}
	if(pulse.pulse>225){pulse.rate = 1;}
}

function debug() {
	fill(255, 0, 0);
	textSize(25 * scaleResolution);
	//text(cameraX, mouseX + 125, mouseY);
	text(fade.fade, mouseX + 125, mouseY + 20);
	//text(scaleResolution, mouseX + 125, mouseY + 40);
}

function windowResized() {
	p5WindowWidth = windowHeight * (16/9);
	Math.floor(p5WindowWidth);
	scaleResolution = windowHeight/853;
	resizeCanvas(p5WindowWidth, windowHeight);
}
