let n = prompt();
let numbers = [];
let numbers2 = [];
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

for (i = 0; i < n; i++) {
    numbers.push(getRandomNumber(1, 10));
    
}
document.write(numbers);
document.write("<br>")


for (i = 0; i < n; i++){
    numbers2.push(numbers[i]);
    
    if (numbers2.length === 5) {
        numbers2 = numbers2.reverse();
        document.write(numbers2 + "<br>");
        numbers2 = [];
    }
}