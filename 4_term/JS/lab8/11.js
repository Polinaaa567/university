let n = Number(prompt());

let mas = new Array();

document.write("Matrix: <br>")

for(let i = 0; i < n; i++){
    mas[i] = new Array();
    for(let j = 0; j < n; j++){
        mas[i][j] = Math.floor(Math.random() * 10 + 5);
        document.write(mas[i][j] + "  ");
    }
    document.write("<br>")
}

let maxmain = mas[0][0]
let minmain = mas[0][0]
let maxsecond = mas[n-1][0]
let minsecond = mas[n-1][0]
for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        if (mas[i][i] > maxmain) maxmain = mas[i][i];
        if (mas[i][i] < minmain) minmain = mas[i][i];
        if (i + j === n - 1 ) if(mas[i][j] > maxsecond) maxsecond = mas[i][j];
        if (i + j === n - 1 ) if(mas[i][j] < minsecond) minsecond = mas[i][j];
    }
}

document.write("Matrix2: <br>")
for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        if (mas[i][i] != maxmain && mas[i][i] != minmain) mas[i][i] = 0;
        if (i + j === n - 1 && (mas[i][j] != maxsecond && mas[i][j] != minsecond)) mas[i][j] = 0;
        document.write(mas[i][j] + "  ");
    }
    document.write("<br>")
}