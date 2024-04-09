let obj = document.getElementById('age-table')
let rows = obj.getElementsByTagName('tr')
for(let i = 0; rows[i]; i++) {
    let cells = rows[i].getElementsByTagName("td");
    for ( let j = 0; cells[j]; j++ ) {
        if ( (i + j) % 2 === 0) {
            cells[j].style.backgroundColor = "#e3b676";
        }
    }
}