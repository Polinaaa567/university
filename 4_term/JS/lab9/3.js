// https://cloud.mail.ru/public/CTM3/FPobCQB6N
let a = document.getElementById("age-table");
console.log(a);

console.log(a.getElementsByTagName("label"));
console.log(a.getElementsByTagName("td")[0]);

let b = document.querySelector('form[name = "search"]');
console.log(b);

console.log(b.getElementsByTagName("input")[0]);

let c = b.querySelectorAll("input");
console.log(c[c.length - 1]);
