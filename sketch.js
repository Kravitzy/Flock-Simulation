

const flock = []

let alignSlider, cohesionSlider, separationSlider;

function setup() {
	createCanvas(windowWidth, windowHeight*3/4);
	// alignSlider = createSlider(0, 100, 50);
	// cohesionSlider = createSlider(0, 100, 50);
	// separationSlider = createSlider(0, 100, 50);
	for (let i = 0; i < 100; i++) {
		flock.push(new Boid())
	}
}

function draw() {
	background(51)

	for (let boid of flock) {
		boid.edges()
		boid.flock(flock, alignSlider , cohesionSlider, separationSlider)
		boid.update();
		boid.show();
	}
}