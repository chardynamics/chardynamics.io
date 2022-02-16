function setup() {
	var canvas = createCanvas(windowWidth, windowHeight, SVG);
	canvas.style('margin', 'auto');
	canvas.parent('script-holder');
	
	rectMode(CENTER);
	angleMode(DEGREES);
	noStroke();
	
	var privacyBanner = document.querySelectorAll("[data-gg-privacy-banner-anchor]");
	for (var i = 0; i < privacyBanner.length; i++) {
		privacyBanner[i].parentNode.removeChild(privacyBanner[i]);
	}
}

function draw() {
	clear();
	rect(0, 0, 100, 100);
	//if (frameCount > 100) {
    //    noLoop();
    //    save();
    //}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
 