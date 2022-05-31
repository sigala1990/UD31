let lista = [];
let dado1;
let dado2;

for (let index = 0; index < 36000; index++) {
   dado1 = Math.floor(Math.random() * (6 - 1) + 1);  
   dado2 = Math.floor(Math.random() * (6 - 1) + 1);

   lista.push(dado1+dado2);
 
}
console.log(lista);