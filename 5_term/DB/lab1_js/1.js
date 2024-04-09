"use strict";

let table = document.getElementById("table");

for (let i = 0; i <= 10; i++) {
  let rows = document.createElement("tr");
  let cell1 = document.createElement("td");
  let cell2 = document.createElement("td");

  cell1.innerHTML = i + " * 5 ";
  cell2.innerHTML = i * 5;

  rows.appendChild(cell1);
  rows.appendChild(cell2);
  table.appendChild(rows);
}
