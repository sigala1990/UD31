
let p = document.getElementById("p");
let table1 = document.getElementsByTagName("tr")[0];
let table2 = document.getElementsByTagName("tr")[1];
let span = document.getElementById("span");
p.onclick = primerparrafo;
table1.onclick = segundoparrafo;
table2.onclick = tercerparrafo;

function primerparrafo() {
    console.log("p onclick")
    span.innerHTML = `Primer parrafo`;
}

function segundoparrafo() {
    console.log("p onclick")
    span.innerHTML = `Segundo parrafo`;
}

function tercerparrafo() {
    console.log("p onclick")
    span.innerHTML = `tercero parrafo`;
}
