var dairy = [
	"cheese",
	"sour cream",
	"milk",
	"yogurt",
	"ice cream",
	"milkshake",
];

// Task 1
function logDairy() {
	for (let i = 0; i < dairy.length; i++) {
		console.log(dairy[i]);
	}
}

const animal = {
	canJump: true,
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

// Task 2
function birdCan() {
	for (var property of Object.keys(bird)) {
		console.log(`${property}: ${bird[property]}`);
	}
}

// Task 3
function animalCan() {
	for (var property of Object.keys(bird)) {
		console.log(`${property}: ${bird[property]}`);
	}
	for (var property of Object.keys(animal)) {
		console.log(`${property}: ${animal[property]}`);
	}
}

logDairy();
birdCan();
animalCan();
