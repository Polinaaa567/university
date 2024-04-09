import { AddPerson, deletePerson, getData } from "./humansData.js";

let loadingButton = document.getElementById("myButton");
let addButton = document.getElementById("addButton");
let tableCon = document.getElementById("tableee");

let filterSelect = document.getElementById("filterSelect");

async function renderTable() {
  let spisok_persons = await getData();
  let table = document.createElement("table"),
    tr,
    td,
    row;

  let header_tr = document.createElement("tr");
  let headers = ["ID", "Имя", "Фамилия", "Возраст", "Пол", "Адрес", "Телефон"];

  headers.forEach((header) => {
    let th = document.createElement("th");
    th.textContent = header;
    header_tr.appendChild(th);
  });

  table.appendChild(header_tr);

  let filtered_persons = spisok_persons.filter((person) => {
    if (filterSelect.value === "All") {
      return true;
    } else if (filterSelect.value === "men" && person.sex === "men") {
      return true;
    } else if (filterSelect.value === "woman" && person.sex === "woman") {
      return true;
    }
    return false;
  });

  for (row = 0; filtered_persons[row]; row++) {
    let persons = filtered_persons[row];

    tr = document.createElement("tr");
    Object.entries(persons).forEach(([key, value]) => {
      td = document.createElement("td");

      tr.appendChild(td);
      td.innerHTML = value;
    });

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";

    deleteButton.addEventListener("click", () => {
      deletePerson(persons.id);
      renderTable();
    });

    let actionsCell = document.createElement("td");
    actionsCell.appendChild(deleteButton);

    tr.appendChild(actionsCell);

    if (persons.age < 18) {
      tr.classList.add("green");
    } else if (persons.age > 18 && persons.age < 60) {
      tr.classList.add("yellow");
    } else {
      tr.classList.add("red");
    }
    table.appendChild(tr);
  }
  while (tableCon.firstChild) {
    tableCon.removeChild(tableCon.firstChild);
  }
  tableCon.appendChild(table);
}
addButton.addEventListener("click", async () => {
  AddPerson();
});
filterSelect.addEventListener("change", async () => {
  renderTable();
});
loadingButton.addEventListener("click", async () => {
  renderTable();
});
