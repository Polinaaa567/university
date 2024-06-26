let canva = document.getElementById("canva");
let twoD = canva.getContext("2d");
let width = canva.width;
let height = canva.height;

let screen_x0 = (width - 400) / 2;
let screen_x1 = screen_x0 + 350;
let screen_y0 = (height - 250) / 2;
let screen_y1 = screen_y0 + 250;

let triangle = [
  [70, 120],
  [145, 95],
  [145, 45],
];

drawFigure(triangle);
squareView();

document.addEventListener("keydown", moveFigure);

function drawFigure(dst) {
  twoD.beginPath();
  twoD.globalAlpha = 0.65;

  twoD.moveTo(dst[0][0], dst[0][1]);

  for (let i = 1; i < dst.length; i++) {
    twoD.lineTo(dst[i][0], dst[i][1]);
  }
  twoD.closePath();
  twoD.fillStyle = "#cc0605";
  twoD.fill();
}

function ResetFigure() {
  twoD.clearRect(0, 0, canva.width, canva.height);
  squareView();

  triangle = [
    [70, 120],
    [145, 95],
    [145, 45],
  ];

  twoD.beginPath();
  twoD.globalAlpha = 0.65;

  twoD.moveTo(triangle[0][0], triangle[0][1]);

  for (let i = 1; i < triangle.length; i++) {
    twoD.lineTo(triangle[i][0], triangle[i][1]);
  }
  twoD.closePath();
  twoD.fillStyle = "#cc0605";
  twoD.fill();
}

function squareView() {
  twoD.beginPath();
  twoD.rect(0, 0, width, height);
  twoD.fillStyle = "white";
  twoD.fill();
  twoD.closePath();
  twoD.strokeRect(
    screen_x0,
    screen_y0,
    screen_x1 - screen_x0,
    screen_y1 - screen_y0
  );
}

function moveFigure(event) {
  let keyCode = event.keyCode;
  switch (keyCode) {
    case 37:
      moveLeft();
      break;
    case 38:
      moveUp();
      break;
    case 39:
      moveRight();
      break;
    case 40:
      moveDown();
      break;
    case 187:
      PlusSize();
      break;
    case 189:
      MinusSize();
      break;
    case 81:
      PovorotPo();
      break;
    case 69:
      PovorotProtiv();
      break;
    case 82:
      ResetFigure();
      break;
  }
}

function PlusSize() {
  twoD.clearRect(0, 0, canva.width, canva.height);

  let centerX = 0;
  let centerY = 0;

  triangle.forEach((point) => {
    centerX += point[0];
    centerY += point[1];
  });
  centerX /= triangle.length;
  centerY /= triangle.length;

  triangle.forEach((point) => {
    point[0] = centerX + (point[0] - centerX) * 1.1;
    point[1] = centerY + (point[1] - centerY) * 1.1;
  });
  squareView();
  let dst = obrez(triangle);
  drawFigure(dst);
}

function MinusSize() {
  twoD.clearRect(0, 0, canva.width, canva.height);

  let centerX = 0;
  let centerY = 0;

  triangle.forEach((point) => {
    centerX += point[0];
    centerY += point[1];
  });

  centerX /= triangle.length;
  centerY /= triangle.length;

  triangle.forEach((point) => {
    point[0] = centerX + (point[0] - centerX) / 1.1;
    point[1] = centerY + (point[1] - centerY) / 1.1;
  });

  squareView();
  let dst = obrez(triangle);
  drawFigure(dst);
}

function PovorotProtiv() {
  twoD.clearRect(0, 0, canva.width, canva.height);

  let centerX = 0;
  let centerY = 0;
  let angle = (10 * Math.PI) / 180;

  triangle.forEach((point) => {
    centerX += point[0];
    centerY += point[1];
  });

  centerX /= triangle.length;
  centerY /= triangle.length;

  triangle.forEach((point) => {
    let dx = point[0] - centerX;
    let dy = point[1] - centerY;
    point[0] = centerX + dx * Math.cos(angle) - dy * Math.sin(angle);
    point[1] = centerY + dx * Math.sin(angle) + dy * Math.cos(angle);
  });

  squareView();
  let dst = obrez(triangle);
  drawFigure(dst);
}

function PovorotPo() {
  twoD.clearRect(0, 0, canva.width, canva.height);
  let centerX = 0;
  let centerY = 0;
  let angle = (10 * Math.PI) / 180;

  triangle.forEach((point) => {
    centerX += point[0];
    centerY += point[1];
  });

  centerX /= triangle.length;
  centerY /= triangle.length;

  triangle.forEach((point) => {
    let dx = point[0] - centerX;
    let dy = point[1] - centerY;
    point[0] = centerX + dx * Math.cos(angle) + dy * Math.sin(angle);
    point[1] = centerY - dx * Math.sin(angle) + dy * Math.cos(angle);
  });

  squareView();
  let dst = obrez(triangle);
  drawFigure(dst);
}

function moveUp() {
  twoD.clearRect(0, 0, canva.width, canva.height);

  triangle.forEach((point) => {
    point[1] -= 10;
  });

  squareView();
  let dst = obrez(triangle);
  drawFigure(dst);
}

function moveLeft() {
  twoD.clearRect(0, 0, canva.width, canva.height);

  triangle.forEach((point) => {
    point[0] -= 10;
  });

  squareView();
  let dst = obrez(triangle);
  drawFigure(dst);
}

function moveRight() {
  twoD.clearRect(0, 0, canva.width, canva.height);

  triangle.forEach((point) => {
    point[0] += 10;
  });

  squareView();
  let dst = obrez(triangle);
  drawFigure(dst);
}

function moveDown() {
  twoD.clearRect(0, 0, canva.width, canva.height);

  triangle.forEach((point) => {
    point[1] += 10;
  });

  squareView();
  let dst = obrez(triangle);
  drawFigure(dst);
}

function obrez(triangle) {
  let dst = [];
  let newS = triangle.slice();
  let funcs = [obrezDown, obrezLeft, obrezRight, obrezUp];
  for (let i = 0; i < funcs.length; i++) {
    funcs[i](dst, newS);
    newS = dst.slice();
    dst.length = 0;
  }
  return newS;
}

function obrezRight(dst, triangle) {
  let r = 0;
  for (let i = 0; i < triangle.length; i++) {
    let p1 = triangle[i];
    let p2 = triangle[(i + 1) % triangle.length];
    if (p1[0] <= screen_x1) {
      dst[r++] = p1;
    }
    if (
      (p1[0] < screen_x1 && p2[0] > screen_x1) ||
      (p2[0] <= screen_x1 && p1[0] > screen_x1)
    ) {
      let y = p2[1] + ((screen_x1 - p2[0]) / (p1[0] - p2[0])) * (p1[1] - p2[1]);
      let x = screen_x1;
      dst[r] = [x, y];
      r++;
    }
  }
}

function obrezLeft(dst, triangle) {
  let r = 0;
  for (let i = 0; i < triangle.length; i++) {
    let p1 = triangle[i];
    let p2 = triangle[(i + 1) % triangle.length];
    if (p1[0] >= screen_x0) {
      dst[r++] = p1;
    }
    if (
      (p1[0] > screen_x0 && p2[0] < screen_x0) ||
      (p2[0] >= screen_x0 && p1[0] < screen_x0)
    ) {
      let y = p1[1] + ((screen_x0 - p1[0]) / (p2[0] - p1[0])) * (p2[1] - p1[1]);
      let x = screen_x0;
      dst[r] = [x, y];
      r++;
    }
  }
}

function obrezUp(dst, triangle) {
  let r = 0;
  for (let i = 0; i < triangle.length; i++) {
    let p1 = triangle[i];
    let p2 = triangle[(i + 1) % triangle.length];
    if (p1[1] >= screen_y0) {
      dst[r++] = p1;
    }
    if (
      (p1[1] > screen_y0 && p2[1] < screen_y0) ||
      (p2[1] >= screen_y0 && p1[1] < screen_y0)
    ) {
      let x = p1[0] + ((screen_y0 - p1[1]) / (p2[1] - p1[1])) * (p2[0] - p1[0]);
      let y = screen_y0;
      dst[r] = [x, y];
      r++;
    }
  }
}

function obrezDown(dst, triangle) {
  let r = 0;
  for (let i = 0; i < triangle.length; i++) {
    let p1 = triangle[i];
    let p2 = triangle[(i + 1) % triangle.length];
    if (p1[1] <= screen_y1) {
      dst[r++] = p1;
    }
    if (
      (p1[1] < screen_y1 && p2[1] > screen_y1) ||
      (p2[1] <= screen_y1 && p1[1] > screen_y1)
    ) {
      let x = p2[0] + ((screen_y1 - p2[1]) / (p1[1] - p2[1])) * (p1[0] - p2[0]);
      let y = screen_y1;
      dst[r] = [x, y];
      r++;
    }
  }
}
