class Motorbike {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.speed = 0;
  }
  accelerate() {
    this.speed += 5;
  }

  brake() {
    this.speed -= 5;
  }

  getName() {
    return `${this.brand} ${this.model}`;
  }
}

class Rider {
  constructor(name, experienceLevel) {
    this.name = name;
    this.experienceLevel = experienceLevel;
  }
}

class MotoGPRider extends Rider {
  constructor(name, experienceLevel) {
    super(name, experienceLevel);
    this.type = "HelmetScraper";
  }
}

const rider1 = new MotoGPRider("Michele Pirro", 8);
const rider2 = new Rider("Stefan Bradl", 7);
const rider3 = new Rider("Jack Miller", 2);

// bike1.accelerate();
// bike2.brake();

class MotoGPBike extends Motorbike {
  constructor(brand, model) {
    super(brand, model);
    this.type = "MotoGP";
  }

  turboBoost() {
    this.speed += 20;
    console.log(`${this.getName()} is now boosting...`);
  }
}
const bike1 = new MotoGPBike("Ducati", "Desmosedici GP23");
const bike2 = new MotoGPBike("Honda", "RC213V");
const bike3 = new MotoGPBike("KTM", "RC16");

class RacingTeam {
  constructor(name) {
    this.name = name;
    this.bikes = [];
    this.riders = [];
  }

  mountRiderToBike(rider, bike) {
    if (this.riders.includes(rider) && this.bikes.includes(bike)) {
      rider.bike = bike;
      console.log(`${rider.name} now mounted on ${bike.getName()}`);
    } else {
      console.log("Rider is not compatible with the bike");
    }
  }

  race() {
    this.riders.forEach((rider) => {
      if (rider.experienceLevel > 5) {
        rider.bike.turboBoost();
        rider.bike.turboBoost();
      } else {
        rider.bike.turboBoost();
      }
      if (rider.type === "HelmetScraper") {
        rider.bike.turboBoost();
      }
      console.log(`${rider.name} now at speed ${rider.bike.speed}`);
    });
  }

  addBike(bike) {
    this.bikes.push(bike);
  }

  addRider(rider) {
    this.riders.push(rider);
  }
}

const teamDucati = new RacingTeam("DucatiLenovoTeam");
teamDucati.addRider(rider1);
teamDucati.addBike(bike1);
teamDucati.mountRiderToBike(rider1, bike1);

const teamHonda = new RacingTeam("LCR Honda");
teamHonda.addRider(rider2);
teamHonda.addBike(bike2);
teamHonda.mountRiderToBike(rider2, bike2);

const teamRedbull = new RacingTeam("Redbull KTM");
teamRedbull.addBike(bike3);
teamRedbull.addRider(rider3);
teamRedbull.mountRiderToBike(rider3, bike3);

const teams = [teamDucati, teamHonda, teamRedbull];
const laps = 10;
for (let lap = 0; lap < laps; lap++) {
  console.log(`Lap ${lap + 1}`);
  teams.forEach((team) => {
    team.race();
  });
}

// for (let i = 0; i < laps; i++) {
//   teams[i].race();
// }
// teamDucati.race();
// teamHonda.race();
// teamRedbull.race();

// ## Exercises

// 1. Create a RacingTeam object and add multiple MotoGPBike and Rider objects to it. (Bonus: pick real MotoGP Teams and Riders);

// 2. Implement a method in RacingTeam that allows a rider to mount a bike, linking a Rider object to a MotoGPBike object.

// 3. Add a method to RacingTeam called race(), which simulates a race by boosting the speed of all bikes and invoking the special move of all riders.

//  4. Create an array of RacingTeam objects to simulate a championship.
//  Use loops to make them race against each other,
// and calculate the winner based on some criteria like average speed or successful use of special moves.

// ### Bonus

// Add statistics to riders and bikes and then
// simulate races to see who wins based on stats.

// ```javascript
// console.log(`${bike.brand} now at speed ${bike.speed}`);
// ```
