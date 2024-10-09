let operacion = ""; // Almacena la operación en curso (números y operadores introducidos por el usuario)

// Función para agregar números a la pantalla
function numeros(numero) {  
    const pantalla = document.getElementById("pantalla"); // Obtiene el elemento HTML donde se muestra la operación
    if (pantalla.innerHTML === "0") { // Si la pantalla muestra "0" (estado inicial), reemplaza el "0" por el número ingresado
        pantalla.innerHTML = numero; // Cambia el contenido de la pantalla al número ingresado
    } else { // Si ya hay otros números en la pantalla
        pantalla.innerHTML += numero; // Añade el número ingresado al final del contenido actual de la pantalla
    }
    operacion += numero; // También añade el número ingresado a la variable 'operacion' para guardar la operación completa
}

// Función para agregar operadores
function operadores(operador) {
    const pantalla = document.getElementById("pantalla"); // Obtiene el elemento de la pantalla
    if (operacion !== "") { // Si hay una operación en curso (es decir, no está vacía)
        pantalla.innerHTML += " " + operador + " "; // Añade el operador con espacios a la pantalla para que se vea más claro
        operacion += operador; // Añade el operador a la variable 'operacion' para actualizar la operación
    }
}

function calculo() {
    const pantalla = document.getElementById("pantalla"); // Obtiene el elemento de la pantalla
    
    let operadores = operacion.match(/[\d\.]+|[+\-*/]/g); // Divide la operación en números y operadores
    let resultado = parseFloat(operadores[0]); // Comienza con el primer número
    
    for (let i = 1; i < operadores.length; i += 2) {
        let operador = operadores[i];
        let numero = parseFloat(operadores[i + 1]);
        
        switch (operador) {
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
                pantalla.innerHTML = "Error"; // Si el operador es inválido
                operacion = ""; // Reinicia la variable 'operacion'
                return;
        }
    }
    
    pantalla.innerHTML = resultado !== undefined ? resultado : 0; // Muestra el resultado
    operacion = resultado; // Actualiza 'operacion' con el resultado para continuar calculando
}


// Función para borrar la operación y reiniciar la calculadora
function borrar() {
    document.getElementById("pantalla").innerHTML = "0"; // Resetea la pantalla a "0"
    operacion = ""; // Limpia la operación actual, reiniciando el estado de la calculadora
}
