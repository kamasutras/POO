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
    const pantalla = document.getElementById("pantalla");
    
    // Verifica si la operación contiene solo números y operadores válidos
    if (/^[0-9+\-*/\s]+$/.test(operacion)) {
        const resultado = eval(operacion);
        pantalla.innerHTML = resultado !== undefined ? resultado : 0; // Muestra el resultado o 0 si no hay resultado
        operacion = resultado; // Actualiza la operación con el resultado
    } else {
        pantalla.innerHTML = "Error"; // Si la operación es inválida
        operacion = ""; // Reinicia la operación
    }
}


function borrar() {
    document.getElementById("pantalla").innerHTML = "0"; // Resetea la pantalla a "0"
    operacion = ""; // Limpia la operación en curso
}