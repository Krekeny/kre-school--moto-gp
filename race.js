let canvas = document.getElementById("raceCanvas");
let ctx = canvas.getContext("2d");

function drawRacetrack(xoff, yoff, xmul, ymul) {
  ctx.beginPath();
  ctx.moveTo(132 * xmul + xoff, 331 * ymul + yoff);
  ctx.bezierCurveTo(
    191 * xmul + xoff,
    332 * ymul + yoff,
    747 * xmul + xoff,
    336 * ymul + yoff,
    780 * xmul + xoff,
    308 * ymul + yoff
  );
  ctx.bezierCurveTo(
    824 * xmul + xoff,
    296 * ymul + yoff,
    855 * xmul + xoff,
    102 * ymul + yoff,
    828 * xmul + xoff,
    85 * ymul + yoff
  );
  ctx.bezierCurveTo(
    803 * xmul + xoff,
    65 * ymul + yoff,
    756 * xmul + xoff,
    114 * ymul + yoff,
    736 * xmul + xoff,
    134 * ymul + yoff
  );
  ctx.bezierCurveTo(
    711 * xmul + xoff,
    159 * ymul + yoff,
    794 * xmul + xoff,
    214 * ymul + yoff,
    752 * xmul + xoff,
    230 * ymul + yoff
  );
  ctx.bezierCurveTo(
    715 * xmul + xoff,
    245 * ymul + yoff,
    650 * xmul + xoff,
    245 * ymul + yoff,
    631 * xmul + xoff,
    237 * ymul + yoff
  );
  ctx.bezierCurveTo(
    608 * xmul + xoff,
    224 * ymul + yoff,
    770 * xmul + xoff,
    71 * ymul + yoff,
    718 * xmul + xoff,
    73 * ymul + yoff
  );
  ctx.bezierCurveTo(
    675 * xmul + xoff,
    74 * ymul + yoff,
    503 * xmul + xoff,
    79 * ymul + yoff,
    483 * xmul + xoff,
    79 * ymul + yoff
  );
  ctx.bezierCurveTo(
    463 * xmul + xoff,
    79 * ymul + yoff,
    384 * xmul + xoff,
    132 * ymul + yoff,
    364 * xmul + xoff,
    132 * ymul + yoff
  );
  ctx.bezierCurveTo(
    344 * xmul + xoff,
    132 * ymul + yoff,
    351 * xmul + xoff,
    184 * ymul + yoff,
    369 * xmul + xoff,
    179 * ymul + yoff
  );
  ctx.bezierCurveTo(
    400 * xmul + xoff,
    192 * ymul + yoff,
    432 * xmul + xoff,
    200 * ymul + yoff,
    450 * xmul + xoff,
    180 * ymul + yoff
  );
  ctx.bezierCurveTo(
    465 * xmul + xoff,
    163 * ymul + yoff,
    464 * xmul + xoff,
    145 * ymul + yoff,
    493 * xmul + xoff,
    132 * ymul + yoff
  );
  ctx.bezierCurveTo(
    527 * xmul + xoff,
    129 * ymul + yoff,
    549 * xmul + xoff,
    113 * ymul + yoff,
    581 * xmul + xoff,
    134 * ymul + yoff
  );
  ctx.bezierCurveTo(
    590 * xmul + xoff,
    141 * ymul + yoff,
    590 * xmul + xoff,
    153 * ymul + yoff,
    582 * xmul + xoff,
    163 * ymul + yoff
  );
  ctx.bezierCurveTo(
    562 * xmul + xoff,
    178 * ymul + yoff,
    463 * xmul + xoff,
    258 * ymul + yoff,
    420 * xmul + xoff,
    256 * ymul + yoff
  );
  ctx.bezierCurveTo(
    387 * xmul + xoff,
    252 * ymul + yoff,
    324 * xmul + xoff,
    204 * ymul + yoff,
    288 * xmul + xoff,
    203 * ymul + yoff
  );
  ctx.bezierCurveTo(
    245 * xmul + xoff,
    204 * ymul + yoff,
    187 * xmul + xoff,
    247 * ymul + yoff,
    159 * xmul + xoff,
    262 * ymul + yoff
  );
  ctx.bezierCurveTo(
    127 * xmul + xoff,
    277 * ymul + yoff,
    94 * xmul + xoff,
    299 * ymul + yoff,
    120 * xmul + xoff,
    331 * ymul + yoff
  );
  ctx.closePath();
  ctx.stroke();
}

drawRacetrack(-50, -10, 1, 1);
