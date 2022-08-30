var p5WindowWidth;
var scaleResolution;

var scene = 2;
var paused = false;
var keys = [];
var tankHover = false;
var bullets = [];

function keyPressed() {
	keys[keyCode] = true;
}

function keyReleased() {
	keys[keyCode] = false;
}

var pulse = {
	var: 200,
	rate: 5,
}

var fade = {
	intro: 255,
	out: 0
}

var keyAim = {
	x: 0,
	y: 0,
}

var camera = {
	x: 0,
	y: 0
}

var tankMenu = {
    x:600,
    y:600,
	bulletX: 600,
	bulletY: 600,
    speed: 0,
    acceleration: 0.75,
    rotate: 90,
    turretRotateCopy: 0,
    turretRotate: 0,
    rightW: false,
    leftW: false,
	control: "wasd",
	aimControl: "mouse",
	firing: true,
	speedMultipler: 0.75,
	speedCost: 200,
	speedLevel: 1,
	reloadRate: 5,
	reloadMax: 60,
	reloadVar: 100,
    type: 1,
    deaths: 0,
};

function bullet(x, y) {
	this.x = x;
	this.y = y;
	this.rot = -tankMenu.grot+90;
	this.a = true;
};

bullet.prototype.draw = function() {
	if(this.a){
		fill(255,0,0);
		push();
		translate(this.x,this.y);
		rotate(this.rotate);
		scale(2.5);
		fill(100, 100, 100, 50);
		triangle(-7.5, 9, 7.5, 0, -7.5, -9);
		fill(158, 60, 14);
		triangle(-4.5, 3, 10, 0, -4.5, -3);
		pop();
		this.x += cos(this.rotate)* 25;
		this.y += sin(this.rotate)* 25;
	}
};

var introVar = {
	cubeRotate: 0,
	tankY: 300,
	tankRotate: 0,
	turretRotate: 0,
	bulletX: 454,
	textCover: 0,
	bulletTransparency: 0,
	soundTransparency: 0,
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
    textStyle(BOLD);
	noStroke();
	
	//var privacyBanner = document.querySelectorAll("[data-gg-privacy-banner-anchor]");
	//for (var i = 0; i < privacyBanner.length; i++) {
	//	privacyBanner[i].parentNode.removeChild(privacyBanner[i]);
	//}

	tankMenu.x = Math.floor(p5WindowWidth/2);
	tankMenu.y = Math.floor(windowHeight/2);
	tankMenu.bulletX = Math.floor(p5WindowWidth/2);
	tankMenu.bulletY = Math.floor(windowHeight/2);
}

function tankSpawn(tankVar) {
	if (tankVar.aimControl === "mouse") {
		tankVar.turretRotateCopy = atan2(mouseX-tankVar.x,mouseY-tankVar.y);
		Math.round(tankVar.turretRotateCopy);
		if (tankVar.turretRotate != tankVar.turretRotateCopy) {
			if (tankVar.turretRotate < tankVar.turretRotateCopy) {
				tankVar.turretRotate += 1;
			}
			if (tankVar.turretRotate > tankVar.turretRotateCopy) {
				tankVar.turretRotate -= 1;
			}
		}
	} else {
		tankVar.turretRotateCopy = atan2(keyX-tankVar.x,keyY-tankVar.y);
		Math.round(tankVar.turretRotateCopy);
		if (tankVar.turretRotate != tankVar.turretRotateCopy) {
			if (tankVar.turretRotate < tankVar.turretRotateCopy) {
				tankVar.turretRotate += 1;
			}
			if (tankVar.turretRotate > tankVar.turretRotateCopy) {
				tankVar.turretRotate -= 1;
			}
		}
		if(keys[84]) {
			if(keyAim.y > 0) {
				keyAim.y -= 5;
			}
		}
		if(keys[70]) {
			if(keyAim.x > 0) {
				keyAim.x -= 5;
			}
		}
		if(keys[71]) {
			if(keyAim.y < windowHeight) {
				keyAim.y += 5;
			}
		}
		if(keys[72]) {
			if(keyAim.x < p5WindowWidth) {
				keyAim.x += 5;
			}
		}
		fill(0);
		rect(keyAim.x, keyAim.y, 5, 25);
		rect(keyAim.x, keyAim.y, 25, 5);
	}
	
	if(!paused){
		if (tankVar.control == "wasd") {
			if (keyIsPressed) {
				if(keys[65]) {
					if(tankVar.speed > (-2 * tankVar.speedMultipler)) {
						tankVar.rotate -= 3;
						tankVar.rightW = false;
						tankVar.leftW = true;
					}
				}
				if(keys[68]) {
					if(tankVar.speed > (-2 * tankVar.speedMultipler)) {
						tankVar.rotate +=3;
						tankVar.rightW = true;
						tankVar.leftW = false;
					}
				}
				if(keys[87]) {
					if(tankVar.speed <= (3 * tankVar.speedMultipler)) {
						tankVar.speed += tankVar.acceleration * tankVar.speedMultipler;
					}
				}
				if(keys[83]) {
					if(tankVar.speed > (-1.5 * tankVar.speedMultipler)) {
						tankVar.speed -= tankVar.acceleration * tankVar.speedMultipler;
					}
				}
				if(tankVar.speed === (3 * tankVar.speedMultipler)) {
					tankVar.speed = 3 * tankVar.speedMultipler;
				} else if (tankVar.speed === (-3 * tankVar.speedMultipler)) {
					tankVar.speed = 3 * tankVar.speedMultipler;
				}
			}
			if((!keys[87]) && (!keys[83])) {
				if(tankVar.speed >= (0 * tankVar.speedMultipler)) {
					tankVar.speed -= 0.05 * tankVar.speedMultipler;
				} else {
					tankVar.speed += 0.05 * tankVar.speedMultipler;
				}
			}
		} else {
			if (keyIsPressed) {
				if(keys[37]) {
					if(tankVar.speed > (-2 * tankVar.speedMultipler)) {
						tankVar.rotate -=3;
						tankVar.rightW = false;
						tankVar.leftW = true;
					}
				}
				if(keys[39]) {
					if(tankVar.speed > (-2 * tankVar.speedMultipler)) {
						tankVar.rotate +=3;
						tankVar.rightW = true;
						tankVar.leftW = false;
					}
				}
				if(keys[38]) {
					if(tankVar.speed <= (3 * tankVar.speedMultipler)) {
						tankVar.speed += tankVar.acceleration * tankVar.speedMultipler;
					}
				}
				if(keys[40]) {
					if(tankVar.speed >= (-1.5 * tankVar.speedMultipler)) {
						tankVar.speed -= tankVar.acceleration * tankVar.speedMultipler;
					}
				}
				if(!keys[38] && !keys[40]) {
					if(tankVar.speed >= 0) {
						tankVar.speed -= 0.05 * tankVar.speedMultipler;
					} else if (tankVar.speed <= 0) {
						tankVar.speed += 0.05 * tankVar.speedMultipler;
					}
				}
				if(tankVar.speed === (3 * tankVar.speedMultipler)) {
					tankVar.speed = 3 * tankVar.speedMultipler;
				} else if (tankVar.speed === (-3 * tankVar.speedMultipler)) {
					tankVar.speed = 3 * tankVar.speedMultipler;
				}
			}
		}
	}
 
	camera.x += (cos(tankMenu.rotate) * tankMenu.speed);
	camera.y += (sin(tankMenu.rotate) * tankMenu.speed);

	tankVar.bulletX -= cos(tankVar.rotate)*tankVar.speed;
	tankVar.bulletY -= sin(tankVar.rotate)*tankVar.speed;
		
	if (tankVar.firing) {
	   if ((!tankHover)) {
			 if(mouseIsPressed){
				   if(tankVar.reloadVar == 0){
						bullets.push(new bullet(tankVar.bulletX,tankVar.bulletY));
						tankVar.reloadVar = tankVar.reloadMax;
				   }
			 }
			 if(keys[32]){
				   if(tankVar.reloadVar == 0){
						bullets.push(new bullet(tankVar.bulletX,tankVar.bulletY));
						tankVar.reloadVar = reload.max;
				   }
			 }
	   }
	}

	
	if (tankVar.reloadVar > 0) {
		if ((tankVar.reloadVar - tankVar.reloadRate) >= 0) {
			tankVar.reloadVar -= tankVar.reloadRate;
		}
	}

	//Tank skins
   if (tankVar.type == 1) {
		noStroke();
		push();
		translate(tankVar.x, tankVar.y);
		rotate(tankVar.rotate+90);
		fill(0, 120, 0);
		rect(0,0,50,100,12.5);
		fill(50);
		rect(-30,0,12.5,87.5,12.5);
		rect(30,0,12.5,87.5,12.5);
		pop();

		push();
		translate(tankVar.x, tankVar.y);
		rotate(-tankVar.turretRotate-180);
		fill(0, 100, 0);
		rect(0,0,37.5,37.5,12.5);
		rect(0,-40,12.5,50,0);
		pop();
   	}
};

function intro() {
	introVar.cubeRotate += 5;
	
	if (introVar.tankY > 210) {
		introVar.tankY -= 1;
	}
	if ((introVar.tankY == 210) && (introVar.tankRotate < 25)) {
		introVar.tankRotate += 1;
		introVar.turretRotate = introVar.tankRotate;
	}
	if (introVar.tankRotate == 25 && introVar.turretRotate < 90) {
        introVar.turretRotate += 1;
	}
	if (introVar.turretRotate == 90) {
		if (introVar.bulletX <= 1525) {
			introVar.bulletX += 8;
		}
		if ((introVar.bulletX >= 497)) {
			introVar.bulletTransparency = 255;
			introVar.soundTransparency = 50;
		}
	}
	if ((introVar.bulletX >= 536)) {
		introVar.textCover += 8;
	}
	if ((introVar.bulletX >= 1525) && (fade.out < 255)) {
		fade.out += 2.5;
	}
	
	background(0);
	fill(255, 255, 255);
	textSize(800 * scaleResolution); //I'm just using this as a general scale/ratio factor, although it only works with appropriate ratios
	text("DP", 700 * scaleResolution, 377.5 * scaleResolution);
	textSize(75 * scaleResolution);
	text("roductions", 1100 * scaleResolution, 577.5 * scaleResolution);
	push();
	translate(150 * scaleResolution, 730 * scaleResolution);
	rotate(introVar.cubeRotate);
	fill(-pulse.var, pulse.var, pulse.var + 100);
	rect(0, 0, 125 * scaleResolution, 125 * scaleResolution, 15*scaleResolution);
	pop();
	textSize(75 * scaleResolution);
	text("X", 150 * scaleResolution, 735 * scaleResolution);
	push();
	scale(3.5);
	translate(110 * scaleResolution, introVar.tankY * scaleResolution);
	fill(50, 0, 0);
	rect(-12 * scaleResolution,0,5 * scaleResolution,35 * scaleResolution,5*scaleResolution);
	rect(12 * scaleResolution,0,5 * scaleResolution,35 * scaleResolution,5*scaleResolution);
	fill(0, 120, 0);
	rect(0,0,20 * scaleResolution,40 * scaleResolution,5*scaleResolution);
	pop();
	textSize(165 * scaleResolution);
	text("...and more", 1010 * scaleResolution, 744 * scaleResolution);
	rectMode(CORNER);
	fill(0);
	//rect(1445 * scaleResolution, 670 * scaleResolution, bullet.textCover* scaleResolution, 122* scaleResolution);
	rect(581 * scaleResolution, 670 * scaleResolution, introVar.textCover * scaleResolution, 122* scaleResolution);
	push();
	translate(introVar.bulletX * scaleResolution, 716 * scaleResolution);
	fill(100, 100, 100, introVar.soundTransparency);
	triangle(-7.5, 45, 40, 17.5, -7.5, -9);
	fill(158, 60, 14, introVar.bulletTransparency);
	triangle(2, 27.5, 45, 17.5, 2, 10);
	pop();
	rectMode(CENTER);
	push();
	scale(3.5);
	translate(110 * scaleResolution, introVar.tankY * scaleResolution);
	rotate(introVar.turretRotate);
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
		fade.intro = 255;
	}
}

function menu() {
    background(0, 100, pulse.var);
	push();
	translate(camera.x, camera.y);
	fill(255, 245, 190);
	rect(p5WindowWidth/2, windowHeight/2, p5WindowWidth - (50 * scaleResolution), windowHeight - (50 * scaleResolution), 10);
	fill(52, 140, 49);
	rect(p5WindowWidth/2, windowHeight/2, p5WindowWidth - (100 * scaleResolution), windowHeight - (100 * scaleResolution), 10);
	fill(255);
	textSize(100);
	text("Muzzl", 500, 100);
	if (tankMenu.firing) {
		for (let i = 0; i < bullets.length; i++) {
			bullets[i].draw();
		} 
	}
	pop();
	tankSpawn(tankMenu);
	
	if (fade.intro > 0) {
		fill(0, 0, 0, fade.intro);
		rect(windowWidth/2, windowHeight/2, windowWidth, windowHeight);
		fade.intro -= 2.5;
	}
}

function pulseMath() {
	pulse.var -= pulse.rate;
	if(pulse.var<125){pulse.rate = -1;}
	if(pulse.var>225){pulse.rate = 1;}
}

function debug() {
	fill(255, 0, 0);
	textSize(25 * scaleResolution);
	text(camera.x, mouseX + 125, mouseY);
	text(tankMenu.speed, mouseX + 125, mouseY + 20);
	text(tankMenu.rotate, mouseX + 125, mouseY + 40);
}

function windowResized() {
	p5WindowWidth = windowHeight * (16/9);
	Math.floor(p5WindowWidth);
	scaleResolution = windowHeight/853;
	resizeCanvas(p5WindowWidth, windowHeight);
}

function draw() {
	if (scene == 1) {
		intro();
		pulseMath();
	} else if (scene == 2) {
		menu();
		pulseMath();
	} else if (scene == 3) {
		levelOne();
		pulseMath();
	}
	debug();
}