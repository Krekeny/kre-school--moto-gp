// document.addEventListener("DOMContentLoaded", function () {
//   const canvas = document.getElementById("raceCanvas");
//   const ctx = canvas.getContext("2d");

//   // Coordinates to keep track of each bike's position
//   let bike1X = 0;
//   let bike2X = 0;

//   document.getElementById("startRace").addEventListener("click", function () {
//     // Implement the logic to start the race
//     let raceInterval = setInterval(() => {
//       // Clear the canvas
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       // Draw the bikes again at their new positions
//       drawBike(ctx, bike1X, 50);
//       drawBike(ctx, bike2X, 200);

//       // Update the bike positions (you could use actual speed metrics here)
//       bike1X += 5;
//       bike2X += 4;

//       // Stop the race when a bike reaches the end
//       if (bike1X >= canvas.width || bike2X >= canvas.width) {
//         clearInterval(raceInterval);
//       }
//     }, 100);
//   });

//   function drawBike(ctx, x, y) {
//     // Sample code to draw a simple bike shape, you can replace this with an image or more complex drawing
//     ctx.fillStyle = "blue";
//     ctx.fillRect(x, y, 50, 25);
//   }
// });
