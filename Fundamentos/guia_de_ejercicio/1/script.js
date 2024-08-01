
// 1. Leer los datos de una persona (Nombre, apellidos, edad) y mostrarlos a través de una impresión.


function mostrarDatos(nombre, apellidos, edad) {
    let resultado = `Nombre: ${nombre} ${apellidos}, Edad: ${edad}`;
    document.getElementById("datosPersona").innerText = resultado;
}

mostrarDatos("Juan", "Pérez", 30);

// 2. Leer un número, dividirlo en 3 partes, sumar 10 y multiplicarlo por 2, luego mostrar el resultado (por pantalla y por impresora)

function calcularNumero(numero) {
    let parte = numero / 3;
    let resultado = (parte + 10) * 2;

    document.getElementById("resultadoNumero").innerText = `Resultado: ${resultado}`;
}

calcularNumero(15);


// 3. Leer 2 números y deducir si están en orden creciente o decreciente.

function determinarOrden(num1, num2) {
    let resultado;
    if (num1 < num2) {
        resultado = "Orden creciente";
    } else if (num1 > num2) {
        resultado = "Orden decreciente";
    } else {
        resultado = "Los números son iguales";
    }

    document.getElementById("ordenResultado").innerText = resultado;
}

determinarOrden(5, 10);


// 4. Leer 5 números, calcular su promedio e imprimir el resultado.

function calcularPromedio(num1, num2, num3, num4, num5) {
    let suma = num1 + num2 + num3 + num4 + num5;
    let promedio = suma / 5;

    document.getElementById("promedioResultado").innerText = `Promedio: ${promedio}`;
}

calcularPromedio(10, 20, 30, 40, 50);



// 5. Calcular la suma de los N primeros números naturales. (N es ingresado por el usuario)

function sumaPrimerosN(n) {
    let numeros = [];
    let suma = 0;

    for (let i = 1; i <= n; i++) {
        numeros.push(i);
        suma += i;
    }

    console.log(`Números naturales hasta ${n}: ${numeros.join(", ")}`);
    console.log(`Suma de los primeros ${n} números naturales: ${suma}`);
}

sumaPrimerosN(10);

// 6. Escribir los 100 primeros números pares.

function escribirPares(limite) {
    let pares = [];
    for (let i = 1; i <= limite; i++) {
        pares.push(i * 2);
    }
    document.getElementById("paresResultado").innerText = pares.join(", ");
}

escribirPares(10);

// 7. Escribir los 100 primeros números impares.

function escribirImpares() {
    let impares = [];
    for (let i = 1; i <= 100; i++) {
        impares.push(i * 2 - 1);
    }
    document.getElementById("imparesResultado").innerText = impares.join(", ");
}



// 8. Sumar 100 números leídos por teclado

function sumar100Numeros() {
    let numeros = [];
    for (let i = 0; i < 100; i++) {
        numeros.push(parseFloat(prompt(`Ingrese el número ${i + 1}:`)));
    }
    let suma = numeros.reduce((acc, val) => acc + val, 0);
    document.getElementById("suma100Resultado").innerText = `Suma de los 100 números: ${suma}`;
}



// 9. Modificar el anterior para que permita sumar N números. El valor de N se debe leer previamente por teclado.
function sumarNNumeros() {
    let n = parseInt(prompt("Ingrese el valor de N:"));
    let numeros = [];
    for (let i = 0; i < n; i++) {
        numeros.push(parseFloat(prompt(`Ingrese el número ${i + 1}:`)));
    }
    let suma = numeros.reduce((acc, val) => acc + val, 0);
    document.getElementById("sumaNResultado").innerText = `Suma de los ${n} números: ${suma}`;
}




// 10. Leer 2 números y solicitar al usuario que ingrese la opción de sumarlos, restarlos, multiplicarlos y dividirlos según elija quien ingresa.
function operar() {
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let operacion = prompt("Ingrese la operación a realizar (sumar, restar, multiplicar, dividir):");

    let resultado;
    switch (operacion.toLowerCase()) {
        case 'sumar':
            resultado = num1 + num2;
            break;
        case 'restar':
            resultado = num1 - num2;
            break;
        case 'multiplicar':
            resultado = num1 * num2;
            break;
        case 'dividir':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = "No se puede dividir por cero";
            }
            break;
        default:
            resultado = "Operación no válida";
    }
    document.getElementById("operacionResultado").innerText = `Resultado de ${operacion}: ${resultado}`;
}
