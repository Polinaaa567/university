let coords = 0;
let handler = (event) => {
  coords = "click: " + event.clientX + ", " + event.clientY;
  document.getElementById("Data").textContent = coords;
};
document.addEventListener("click", handler);
