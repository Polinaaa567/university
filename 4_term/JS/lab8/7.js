let s = String(prompt());

let isLat = function (bukva) {
  return /[a-zA-Z]/i.test(bukva);
};

let count = 0;
let len = s.length;

for (i = 0; i < len; i++) {
  if (isLat(s[i]) === true) {
    count++;
  }
}

document.write((count * 100) / len);
