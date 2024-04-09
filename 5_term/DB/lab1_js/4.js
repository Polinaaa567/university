"use strict";

let div = document.getElementById("div");

let student = [
  ["Жданов", "Андрей ", "3", "02.03.02"],
  ["Пушкарёва", "Екатерина", "1", "02.03.03"],
  ["Малиновский", "Роман ", "3", "02.03.02"],
  ["Воропаева", "Кира ", "2", "03.03.02"],
  ["Воропаев", "Александр ", "4", "03.03.02"],
  ["Клочкова", "Вика ", "3", "02.03.03"],
];

let code = prompt("Введите код направления (02.03.02, 02.03.03, 03.03.02): ");

let table = document.createElement("table");

let header = document.createElement("tr");

let headerLast_name = document.createElement("th");
headerLast_name.innerHTML = "Фамилия";

let headerFirst_name = document.createElement("th");
headerFirst_name.innerHTML = "Имя";

let headerCourse = document.createElement("th");
headerCourse.innerHTML = "Курс";

let headerDirection_code = document.createElement("th");
headerDirection_code.innerHTML = "Код направления";

header.append(
  headerLast_name,
  headerFirst_name,
  headerCourse,
  headerDirection_code
);

table.appendChild(header);

let h1 = document.createElement("h1");
h1.innerHTML = "Студенты курса " + code;

div.appendChild(h1);
let tbody = document.createElement("tbody");

for (let i = 0; i < student.length; i++) {
  if (student[i][3] === code) {
    let rows = document.createElement("tr");
    tbody.appendChild(rows);

    for (let j = 0; j < student[i].length; j++) {
      let cell = document.createElement("td");
      cell.innerHTML = student[i][j];

      rows.appendChild(cell);

      table.appendChild(rows);
    }
  } else {
    console.log(student[i]);
  }
}
div.appendChild(table);
