document.getElementById("triangle").addEventListener("click", drawTriangle);
document.getElementById("square").addEventListener("click", drawSquare);
document.getElementById("circle").addEventListener("click", drawCircle);

let figures = [];
let triangleDrawn = false;
function drawTriangle() {
  let canva = document.getElementById("canva");

  if (canva.getContext) {
    let twoD = canva.getContext("2d");

    if (!triangleDrawn) {
      let triangle = {
        type: "triangle",
        points: [
          { x: 25, y: 90 },
          { x: 100, y: 75 },
          { x: 100, y: 25 },
        ],
        color: "green",
      };
      figures.push(triangle);
      drawFigure("triangle");
      triangleDrawn = true;
    } else {
      twoD.clearRect(0, 0, canva.width, canva.height);
      if (circleDrawn) {
        drawFigure("circle");
      }
      if (squareDrawn) {
        drawFigure("square");
      }
      triangleDrawn = false;
    }
  }
}

let squareDrawn = false;
function drawSquare() {
  let canva = document.getElementById("canva");
  if (canva.getContext) {
    let twoD = canva.getContext("2d");

    if (!squareDrawn) {
      let square = {
        type: "square",
        x: 250,
        y: 50,
        width: 100,
        height: 100,
        color: "red",
      };
      figures.push(square);
      drawFigure("square");
      squareDrawn = true;
    } else {
      twoD.clearRect(0, 0, canva.width, canva.height);
      if (circleDrawn) {
        drawFigure("circle");
      }
      if (triangleDrawn) {
        drawFigure("triangle");
      }
      squareDrawn = false;
    }
  }
}

let circleDrawn = false;
function drawCircle() {
  let canva = document.getElementById("canva");

  if (canva.getContext) {
    let twoD = canva.getContext("2d");

    if (!circleDrawn) {
      let circle = {
        type: "circle",
        x: 380,
        y: 75,
        radius: 50,
        color: "yellow",
      };
      figures.push(circle);

      drawFigure("circle");
      circleDrawn = true;
    } else {
      twoD.clearRect(0, 0, canva.width, canva.height);
      circleDrawn = false;
      if (squareDrawn) {
        drawFigure("square");
      }
      if (triangleDrawn) {
        drawFigure("triangle");
      }
    }
  }
}

function drawFigure(type) {
  let canva = document.getElementById("canva");
  let twoD = canva.getContext("2d");

  figures.forEach((figure) => {
    console.log(figures);

    if (figure.type === "triangle" && type === "triangle") {
      twoD.beginPath();
      twoD.moveTo(figure.points[0].x, figure.points[0].y);
      twoD.lineTo(figure.points[1].x, figure.points[1].y);
      twoD.lineTo(figure.points[2].x, figure.points[2].y);
      twoD.closePath();
      twoD.fillStyle = figure.color;
      twoD.fill();
    } else if (figure.type === "square" && type === "square") {
      twoD.fillStyle = figure.color;
      twoD.fillRect(figure.x, figure.y, figure.width, figure.height);
    } else if (figure.type === "circle" && type === "circle") {
      twoD.beginPath();
      twoD.arc(figure.x, figure.y, figure.radius, 0, Math.PI * 2, true);
      twoD.closePath();
      twoD.fillStyle = figure.color;
      twoD.fill();
    }
  });
}
