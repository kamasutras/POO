let operacion = ""; // Almacena la operación en curso

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

// Función para calcular el resultado
function calculo() {
    try {
        const resultado = eval(operacion); // Usa eval para calcular la expresión
        document.getElementById("pantalla").innerHTML = resultado;
        operacion = resultado.toString(); // Reinicia con el resultado como base
    } catch (error) {
        document.getElementById("pantalla").innerHTML = "Error";
        operacion = "";
    }
}

function borrar() {
    document.getElementById("pantalla").innerHTML = "0"; // Resetea la pantalla a "0"
    operacion = ""; // Limpia la operación en curso
}