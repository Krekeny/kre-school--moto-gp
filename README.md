# Class Syntax and OOP in JavaScript

## Basic Syntax

1. Defining a Motorbike Class

```javascript
class Motorbike {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.speed = 0;
  }
}
```

2. Add methods to the Motorbike class to perform actions, such as accelerate and brake.

```javascript
accelerate() {
    this.speed += 5;
}

brake() {
    this.speed -= 5;
}
```

3. Instantiating Objects

```javascript
const bike1 = new Motorbike("Honda", "CBR");
const bike2 = new Motorbike("Yamaha", "R1");

bike1.accelerate();
bike2.brake();
```

4. Inheritance

```javascript
class RacingBike extends Motorbike {
  constructor(brand, model) {
    super(brand, model);
    this.type = "Racing";
  }

  turboBoost() {
    this.speed += 20;
  }
}
```

Defining a Motorbike Class

```javascript
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
}
```

Create a rider class

```javascript
class Rider {
  constructor(name, experienceLevel) {
    this.name = name;
    this.experienceLevel = experienceLevel;
  }
}
```

You already have a Motorbike class. Now create a specialized MotoGPBike class with turbo boost and other features.

```javascript
class MotoGPBike extends Motorbike {
  constructor(brand, model) {
    super(brand, model);
    this.type = "MotoGP";
  }

  turboBoost() {
    this.speed += 20;
  }
}
```

## Exercises

1. Create a RacingTeam object and add multiple MotoGPBike and Rider objects to it. (Bonus: pick real MotoGP Teams and Riders);

2. Implement a method in RacingTeam that allows a rider to mount a bike, linking a Rider object to a MotoGPBike object.

3. Add a method to RacingTeam called race(), which simulates a race by boosting the speed of all bikes and invoking the special move of all riders.

4. Create an array of RacingTeam objects to simulate a championship. Use loops to make them race against each other, and calculate the winner based on some criteria like average speed or successful use of special moves.

### Bonus

Add statistics to riders and bikes and then
simulate races to see who wins based on stats.

```javascript
console.log(`${bike.brand} now at speed ${bike.speed}`);
```
