
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
    return num1 < num2 ? "Creciente" : "Decreciente";
}
console.log(determinarOrden(num1, num2))
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
    console.log(`Los primeros pares de ${limite}\nEs: ${pares.join(", ")}`);
}

escribirPares(10);

// 7. Escribir los 100 primeros números impares.

function escribirImpares(limite) {
    let impares = [];
    for (let i = 1; i <= limite; i++) {
        impares.push(i * 2 - 1);
    }
    console.log(`Los primeros impares de ${limite}\nEs: ${impares.join(", ")}`);
}



// 8. Sumar 5 números leídos por teclado.

function sumarNumeros(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    console.log(`Suma de los ${numeros.length} números: ${suma}`);
}
sumarNumeros([10, 20, 30, 40, 50]);


// 9. Modificar el anterior para que permita sumar N números. El valor de N se debe leer previamente por teclado.
function sumarNNumeros(numeros) {
    let suma = numeros.reduce((acc, val) => acc + val, 0);
    console.log(`Suma de los ${numeros.length} números: ${suma}`);
}
sumarNNumeros([10, 20, 30, 40, 50]);




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
    console.log(`Resultado de ${operacion}: ${resultado}`);
}

//  11 Sumar N numeros pares

function sumarNPares(n) {
    let suma = 0;
    let numero = 2;
    for (let i = 0; i < n; i++) {
        suma += numero;
        numero += 2;
    }
    return suma;
};
console.log(sumarNPares(5));

// 12 Sumar los N primeros pares
function sumarNPrimerosPares(n) {
    let suma = 0;
    for(let i = 1; i <= n; i++) {
        suma+= 2*i;
    }
    return suma;
};
console.log(sumarNPrimerosImpares(19));

// 13 Sumar los N primeros impares
function sumarNImpares(n) {
    let suma = 0;
    let numero = 1;
    for (let i = 0; i < n; i++) {
        suma += numero;
        numero += 2;
    }
    return suma;
}
sole.log(sumarNImpares(19));