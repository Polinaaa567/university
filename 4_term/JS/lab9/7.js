let punkt = prompt("Введите строку");

while (punkt) {
  let li = document.createElement("li");
  li.append(punkt);
  document.getElementById("list").append(li);

  punkt = prompt("Введите строку");
}
