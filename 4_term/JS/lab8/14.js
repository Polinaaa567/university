let car = {
  color: prompt(),
  marka: prompt(),
  model: prompt(),
};
function test() {
  document.write(car.color, "<br>", car.marka, "<br>", car.model);
}

let sendButton = document.search.send;
sendButton.addEventListener("click", test);
