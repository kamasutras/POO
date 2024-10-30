let operacion = "";

// Función para agregar números a la pantalla
function numeros(numero) {  
    const pantalla = document.getElementById("pantalla");
    if (pantalla.innerHTML === "0") {
        pantalla.innerHTML = numero;
    } else {
        pantalla.innerHTML += numero;
    }
    operacion += numero;
}

// Función para agregar operadores
function operadores(operador) {
    const pantalla = document.getElementById("pantalla");
    if (operacion !== "") {
        pantalla.innerHTML += " " + operador + " ";
        operacion += operador;
    }
}
//hrth
function calculo() {
    const pantalla = document.getElementById("pantalla");
    
    let operadores = operacion.match(/[\d\.]+|[+\-*/]/g);
    let resultado = parseFloat(operadores[0]);
    
    for (let i = 1; i < operadores.length; i += 2) {
        let operador = operadores[i];
        let numero = parseFloat(operadores[i + 1]);
        
        switch (operador) {  // logica para la operacion 
            case '+':
                resultado += numero;
                break;
            case '-':
                resultado -= numero;
                break;
            case '*':
                resultado *= numero;
                break;
            case '/':
                resultado /= numero;
                break;
            default:
                pantalla.innerHTML = "Error"; // en caso de que no reconozca el operador
                operacion = "";
                return;
        }
    }
    
    pantalla.innerHTML = resultado !== undefined ? resultado : 0;
    operacion = resultado;
}

// Función para borrar la operación y reiniciar la calculadora
function borrar() {
    document.getElementById("pantalla").innerHTML = "0";
    operacion = "";
}
