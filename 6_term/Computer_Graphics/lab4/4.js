let canva = document.getElementById("canvas");
let ctx = canva.getContext("2d");
let width = canva.width;
let height = canva.height;
let size = 20;

for (let x = 0; x < canva.width; x += size) {
  ctx.moveTo(x, 0);
  ctx.lineTo(x, canva.height);
}

for (let y = 0; y < canva.height; y += size) {
  ctx.moveTo(0, y);
  ctx.lineTo(canva.width, y);
}

ctx.strokeStyle = "silver";
ctx.stroke();

function rasterizeLine(x0, y0, x1, y1) {
  let dx = Math.abs(x1 - x0);
  let dy = Math.abs(y1 - y0);
  let sx = x0 < x1 ? size : -size;
  let sy = y0 < y1 ? size : -size;
  let err = dx - dy;

  while (true) {
    ctx.fillRect(x0, y0, size, size);

    if (x0 === x1 && y0 === y1) break;
    let e2 = 2 * err;
    if (e2 > -dy) {
      err -= dy;
      x0 += sx;
    }
    if (e2 < dx) {
      err += dx;
      y0 += sy;
    }
  }
}

ctx.fillStyle = "black";
rasterizeLine(size * 3, size * 3, size * 40, size * 15);

// circle
let x = [10, 13, 16, 7].map((val) => val * size);
let y = [9, 12, 15, 18].map((val) => val * size);

rasterizeLine(x[0], y[0], x[1], y[0]);
rasterizeLine(x[1], y[0], x[2], y[1]);
rasterizeLine(x[2], y[1], x[2], y[2]);
rasterizeLine(x[2], y[2], x[1], y[3]);
rasterizeLine(x[2], y[2], x[1], y[3]);
rasterizeLine(x[1], y[3], x[0], y[3]);
rasterizeLine(x[0], y[3], x[3], y[2]);
rasterizeLine(x[3], y[2], x[3], y[1]);
rasterizeLine(x[3], y[1], x[0], y[0]);
// dmc
// heart
// x = 7 y = 4
let xH0 = size * 30;
let xH1 = size * 31;
let xH2 = size * 34;
let xH3 = size * 35;
let xH4 = size * 36;
let xH5 = size * 39;
let xH6 = size * 40;

let yH0 = size * 3;
let yH1 = size * 2;
let yH2 = size * 6;
let yH3 = size * 9;

rasterizeLine(xH0, yH0, xH1, yH1);
rasterizeLine(xH1, yH1, xH2, yH1);
rasterizeLine(xH2, yH1, xH3, yH0);
rasterizeLine(xH3, yH0, xH4, yH1);
rasterizeLine(xH4, yH1, xH5, yH1);
rasterizeLine(xH5, yH1, xH6, yH0);
rasterizeLine(xH6, yH0, xH6, yH2);
rasterizeLine(xH6, yH2, xH3, yH3);
rasterizeLine(xH3, yH3, xH0, yH2);
rasterizeLine(xH0, yH2, xH0, yH0);
