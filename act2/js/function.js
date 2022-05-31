//Primer apartado

var fecha = new Date();

console.log(fecha.toString());
console.log(fecha.getDate());
console.log(fecha.getUTCMonth());

let expresion = new RegExp(fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear());

console.log("Expresion: " + expresion);

cadena = "Nací el 28/5/2022 en Donostia";

console.log(expresion.exec(cadena));

// Segundo apartado

var email = prompt('Introduce dirección email: ');

var emailRegex = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;

if (emailRegex.test(email)) {
    alert('Válido!');
} else {
    alert('No válido!');
}

// Tercer apartado

//Busca cualquier caracter alfanumérico del alfabeto latino básico, incluido el caracter de subrayado. Equivalente a [A-Za-z0-9_]. Por ejemplo, /\w/ coincide con "m" en "manzana", "5" en "$5.28", "3" en "3D" y "m" en "Émanuel".

// Busca un solo caracter de espacio en blanco, incluido el espacio, tabulación, avance de página, avance de línea y otros espacios Unicode. Equivalente a [ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]. Por ejemplo, /\s\w*/ encuentra " bar" en "foo bar".

const re = /(\w+)\s(\w+)/;

const str = 'John Smith';

console.log(str.replace(re, '$2, $1')); // "Smith, John"

// Cuarto apartado

var regex = /(<([^>]+)>)/ig;
body = "<p>test</p>";
result = body.replace(regex, "");

console.log(result);