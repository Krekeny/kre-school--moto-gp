const canvas = document.getElementById("raceCanvas");
const ctx = canvas.getContext("2d");

// Coordinates to keep track of each bike's position
// TODO: Replace this with your own logic
let bike1 = {
  positionX: 0,
  speed: 5,
};
let bike2 = {
  positionX: 0,
  speed: 5,
};

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
  // Implement the logic to start the race
  let raceInterval = setInterval(() => {
    console.log("Racing...");

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the bikes again at their new positions
    drawBike(ctx, bike1.positionX, 50);
    drawBike(ctx, bike2.positionX, 200);

    // Update the bike positions (you could use actual speed metrics here)
    bike1.positionX += 5;
    bike2.positionX += 4;

    // Stop the race when a bike reaches the end
    if (bike1.positionX >= canvas.width || bike2.positionX >= canvas.width) {
      clearInterval(raceInterval);
    }
  }, 100);
}
