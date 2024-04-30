const canvas = document.getElementById("pyramidCanvas");
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;

const pyramid = [
  [120, 20, 60],
  [220, 120, 50],
  [120, 150, 100],
  [20, 120, 0],
];

function computeCenterOfMass(pyramid) {
  let sumX = 0;
  let sumY = 0;
  let sumZ = 0;
  for (let i = 0; i < pyramid.length; i++) {
    sumX += pyramid[i][0];
    sumY += pyramid[i][1];
    sumZ += pyramid[i][2];
  }
  const centerX = sumX / pyramid.length;
  const centerY = sumY / pyramid.length;
  const centerZ = sumZ / pyramid.length;
  return [centerX, centerY, centerZ];
}

const centerOfMass = computeCenterOfMass(pyramid);
let angle = 0;

function drawPyramid() {
  ctx.clearRect(0, 0, width, height);
  const rotatedPyramid = pyramid.map(([x, y, z]) => {
    const newX =
      (x - centerOfMass[0]) * Math.cos(angle) -
      (z - centerOfMass[2]) * Math.sin(angle) +
      centerOfMass[0];

    return [newX, y, z];
  });

  ctx.beginPath();
  ctx.moveTo(rotatedPyramid[0][0], rotatedPyramid[0][1]);
  ctx.lineTo(rotatedPyramid[1][0], rotatedPyramid[1][1]);
  ctx.lineTo(rotatedPyramid[2][0], rotatedPyramid[2][1]);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(rotatedPyramid[0][0], rotatedPyramid[0][1]);
  ctx.lineTo(rotatedPyramid[2][0], rotatedPyramid[2][1]);
  ctx.lineTo(rotatedPyramid[3][0], rotatedPyramid[3][1]);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(rotatedPyramid[3][0], rotatedPyramid[3][1]);
  ctx.lineTo(rotatedPyramid[1][0], rotatedPyramid[1][1]);
  ctx.lineTo(rotatedPyramid[2][0], rotatedPyramid[2][1]);
  ctx.closePath();
  ctx.stroke();
}

function rotatePyramid(direction) {
  if (direction === "left") {
    angle += 0.1;
  } else if (direction === "right") {
    angle -= 0.1;
  }
  drawPyramid();
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    rotatePyramid("left");
  } else if (event.key === "ArrowRight") {
    rotatePyramid("right");
  }
});

drawPyramid();
