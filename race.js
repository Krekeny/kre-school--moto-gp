const canvas = document.getElementById("raceCanvas");
const ctx = canvas.getContext("2d");

class Motorbike {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.speed = 0;
    this.positionX = 0;
  }

  accelerate() {
    this.speed += 5;
  }

  brake() {
    this.speed -= 5;
  }
}

class MotoGPBike extends Motorbike {
  constructor(brand, model) {
    super(brand, model);
    this.type = "Racing";
  }

  turboBoost() {
    this.speed += 20;
  }
}

class RacingTeam {
  constructor(name) {
    this.name = name;
    this.bikes = [];
    this.riders = [];
  }

  addBike(bike) {
    this.bikes.push(bike);
  }

  addRider(rider) {
    this.riders.push(rider);
  }

  race() {
    this.bikes.forEach((bike) => {
      bike.turboBoost();
      console.log(`${bike.brand} now at speed ${bike.speed}`);
    });

    this.riders.forEach((rider) => {
      rider.useSpecialMove();
    });
  }
}

class Rider {
  constructor(name, experienceLevel) {
    this.name = name;
    this.experienceLevel = experienceLevel;
  }
}

class MotoGPRider extends Rider {
  constructor(name, experienceLevel, specialMove) {
    super(name, experienceLevel);
    this.specialMove = specialMove;
  }

  useSpecialMove() {
    console.log(`${this.name} uses ${this.specialMove}!`);
  }
}

const yamahaTeam = new RacingTeam("Yamaha");

const bike1 = new MotoGPBike("Yamaha", "YZR-M1");
const bike2 = new MotoGPBike("Yamaha", "YZR-M1");
const bike3 = new MotoGPBike("Yamaha", "YZR-M1");
const bike4 = new MotoGPBike("Yamaha", "YZR-M1");
const bike5 = new MotoGPBike("Yamaha", "YZR-M1");
const bike6 = new MotoGPBike("Yamaha", "YZR-M1");

const rider1 = new MotoGPRider("Valentino Rossi", "Pro", "Knee Drag");
const rider2 = new MotoGPRider("Maverick Viñales", "Pro", "Elbow Drag");
const rider3 = new MotoGPRider("Fabio Quartararo", "Pro", "Body Lean");
const rider4 = new MotoGPRider("Franco Morbidelli", "Pro", "Late Braking");
const rider5 = new MotoGPRider("Johann Zarco", "Pro", "Cornering");
const rider6 = new MotoGPRider("Pol Espargaro", "Pro", "Slipstreaming");

yamahaTeam.addBike(bike1);
yamahaTeam.addBike(bike2);
yamahaTeam.addBike(bike3);
yamahaTeam.addBike(bike4);
yamahaTeam.addBike(bike5);
yamahaTeam.addBike(bike6);
yamahaTeam.addRider(rider1);
yamahaTeam.addRider(rider2);
yamahaTeam.addRider(rider3);
yamahaTeam.addRider(rider4);
yamahaTeam.addRider(rider5);
yamahaTeam.addRider(rider6);

/**
 * Draw logic
 */

document
  .getElementById("startRace")
  .addEventListener("click", () => startRace());

function drawBike(ctx, x, y) {
  // Sample code to draw a simple bike shape, you can replace this with an image or more complex drawing
  ctx.fillStyle = "blue";
  ctx.fillRect(x, y, 50, 25);
}

function startRace() {
  console.log("Starting the race...");
  yamahaTeam.race();
  // Implement the logic to start the race
  let raceInterval = setInterval(() => {
    console.log("Racing...");

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the bikes again at their new positions
    let yPos = 50;

    yamahaTeam.bikes.forEach((bike) => {
      drawBike(ctx, bike.positionX, yPos);
      yPos += 25;
    });

    // Update the bike positions (you could use actual speed metrics here)
    yamahaTeam.bikes.forEach((bike) => {
      bike.positionX += bike.speed;
    });

    // Stop the race when a bike reaches the end
    if (bike1.positionX >= canvas.width || bike2.positionX >= canvas.width) {
      clearInterval(raceInterval);
    }
  }, 100);
}
