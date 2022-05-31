const elemento = document.getElementById('ventana_result');
const memory = document.getElementById('memory');
let op1;
let op2;
let operador;
let resultado;
let textoCadena = "";

//pulsar cualquier tecla
function getWindowResult(txt) {
    //  if (!controladorOperadores(txt)) {
    // let element = document.getElementById('ventana_result');
    if (txt == null) {
        elemento.value = "0";
    } else {
        if (elemento.value == '0' || elemento.value == '-0') {
            elemento.value = txt;
        } else {
            elemento.value += txt;
        }
        /*  switch (txt) {
            case 'raiz':
                 element.value = (Math.sqrt(element.value));
                 break;
             case 'divisionPor1':
                 element.value = (1 / element.value);
                 break;
             default:
             
                 break;
         }*/
    }
    //  }
}
function seleccionarOperador(txt) {
    op1 = parseFloat(elemento.value);
    switch (txt) {
        case '+':
            operador = '+';
            break;
        case '*':
            operador = '*';
            break;
        case '-':
            operador = '-';
            break;
        case '/':
            operador = '/';
            break;
        case '%':
            operador = '%';
            break;
    }
    elemento.value = "0";
    textoCadena += op1+ " "+operador;
    memory.innerHTML = textoCadena;
}
function resultat() {
    op2 = parseFloat(elemento.value);
    switch (operador) {
        case '+':
            resultado = Math.round((op1 + op2) *100)/100;
            break;
        case '*':
            resultado =  Math.round((op1 * op2) *100)/100;
            break;
        case '-':
            resultado =  Math.round((op1 - op2) *100)/100;
            break;
        case '/':
            resultado =  Math.round((op1 / op2) *100)/100;
            break;
        case '%':
            resultado =  Math.round((op1 % op2) *100)/100;
            break;
    }
    elemento.value = resultado;
    textoCadena += op2 + " = "+ resultado+"|";
    memory.innerHTML = textoCadena;
}

function isPositivo() {
    if (elemento.value[0] === "-") {
        elemento.value = elemento.value.substring(1, elemento.value.length);
    } else {
        elemento.value = '-' + elemento.value;
    }
}
function puntoDecimal() {
    contador = 0;
    for (let index = 0; index < elemento.value.length; index++) {
        const element = elemento.value[index];
        if (element === '.') {contador++;}
    }
    if (contador == 0) {
        elemento.value += '.';
    }
}

function raizCuadrada(){
    elemento.value = Math.round(Math.sqrt(elemento.value) *100 /100);
}

function dividirPor1(){
    elemento.value = Math.round(1/elemento.value * 100) / 100;
}
