let canva = document.getElementById("canva");
let twoD = canva.getContext("2d");

document.addEventListener("keydown", (event) => {
  let type;

  if (document.getElementById("circleR").checked) {
    type = "circle";
  } else if (document.getElementById("triangleR").checked) {
    type = "triangle";
  } else if (document.getElementById("squareR").checked) {
    type = "square";
  }
  moveFigure(type, event);
});

function moveFigure(type, event) {
  let keyCode = event.keyCode;
  if (keyCode === 37) {
    moveLeft(type);
  } else if (keyCode === 38) {
    moveUp(type);
  } else if (keyCode === 39) {
    moveRight(type);
  } else if (keyCode === 40) {
    moveDown(type);
  }
}

function moveUp(type) {
  twoD.clearRect(0, 0, canva.width, canva.height);

  figures.forEach((figure) => {
    if (figure.type === type) {
      if (type === "triangle") {
        figure.points.forEach((point) => {
          point.y -= 10;
        });
        if (circleDrawn) {
          drawFigure("circle");
        }
        if (squareDrawn) {
          drawFigure("square");
        }
        figure.y -= 10;
      } else if (type === "square") {
        if (circleDrawn) {
          drawFigure("circle");
        }
        if (triangleDrawn) {
          drawFigure("triangle");
        }

        figure.y -= 10;
      } else if (type === "circle") {
        if (squareDrawn) {
          drawFigure("square");
        }
        if (triangleDrawn) {
          drawFigure("triangle");
        }
        figure.y -= 10;
      }
    }
  });
  drawFigure(type);
}

function moveLeft(type) {
  twoD.clearRect(0, 0, canva.width, canva.height);

  figures.forEach((figure) => {
    if (figure.type === type) {
      if (type === "triangle") {
        figure.points.forEach((point) => {
          point.x -= 10;
        });
        if (circleDrawn) {
          drawFigure("circle");
        }
        if (squareDrawn) {
          drawFigure("square");
        }
      } else if (type === "square") {
        if (circleDrawn) {
          drawFigure("circle");
        }
        if (triangleDrawn) {
          drawFigure("triangle");
        }

        figure.x -= 10;
      } else if (type === "circle") {
        if (squareDrawn) {
          drawFigure("square");
        }
        if (triangleDrawn) {
          drawFigure("triangle");
        }
        figure.x -= 10;
      }
    }
  });

  drawFigure(type);
}

function moveRight(type) {
  twoD.clearRect(0, 0, canva.width, canva.height);

  figures.forEach((figure) => {
    if (figure.type === type) {
      if (type === "triangle") {
        figure.points.forEach((point) => {
          point.x += 10;
        });
        if (circleDrawn) {
          drawFigure("circle");
        }
        if (squareDrawn) {
          drawFigure("square");
        }
      } else if (type === "square") {
        if (circleDrawn) {
          drawFigure("circle");
        }
        if (triangleDrawn) {
          drawFigure("triangle");
        }

        figure.x += 10;
      } else if (type === "circle") {
        if (squareDrawn) {
          drawFigure("square");
        }
        if (triangleDrawn) {
          drawFigure("triangle");
        }
        figure.x += 10;
      }
    }
  });
  drawFigure(type);
}

function moveDown(type) {
  twoD.clearRect(0, 0, canva.width, canva.height);

  figures.forEach((figure) => {
    if (figure.type === type) {
      if (type === "triangle") {
        figure.points.forEach((point) => {
          point.y += 10;
        });
        if (circleDrawn) {
          drawFigure("circle");
        }
        if (squareDrawn) {
          drawFigure("square");
        }
      } else if (type === "square") {
        if (circleDrawn) {
          drawFigure("circle");
        }
        if (triangleDrawn) {
          drawFigure("triangle");
        }

        figure.y += 10;
      } else if (type === "circle") {
        if (squareDrawn) {
          drawFigure("square");
        }
        if (triangleDrawn) {
          drawFigure("triangle");
        }
        figure.y += 10;
      }
    }
  });
  drawFigure(type);
}

document.getElementById("triangle").addEventListener("click", drawTriangle);
document.getElementById("square").addEventListener("click", drawSquare);
document.getElementById("circle").addEventListener("click", drawCircle);

let figures = [
  {
    type: "triangle",
    points: [
      { x: 25, y: 90 },
      { x: 100, y: 75 },
      { x: 100, y: 25 },
    ],
    color: "green",
  },
  {
    type: "square",
    x: 250,
    y: 50,
    width: 100,
    height: 100,
    color: "red",
  },
  {
    type: "circle",
    x: 380,
    y: 75,
    radius: 50,
    color: "yellow",
  },
];

let triangleDrawn = false;
function drawTriangle() {
  if (canva.getContext) {
    if (!triangleDrawn) {
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
  if (canva.getContext) {
    if (!squareDrawn) {
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
  if (canva.getContext) {
    if (!circleDrawn) {
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
  figures.forEach((figure) => {
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
