let x = String(prompt("Введите email "));
if (x.includes("@")) {
  document.write(x);
} else {
  document.write("please enter a valid email");
}
