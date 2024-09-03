// 1. Leer los datos de una persona (Nombre, apellidos, edad) y mostrarlos en la consola.
function mostrarDatos(nombre, apellidos, edad) {
    let resultado = `Nombre: ${nombre} ${apellidos}, Edad: ${edad}`;
    console.log(resultado);
}
mostrarDatos("Juan", "Pérez", 30);

// 2. Leer un número, dividirlo en 3 partes, sumar 10 y multiplicarlo por 2, luego mostrar el resultado en la consola.
function calcularNumero(numero) {
    let parte = numero / 3;
    let resultado = (parte + 10) * 2;
    console.log(`Resultado: ${resultado}`);
}
calcularNumero(15);

// 3. Leer 2 números y deducir si están en orden creciente o decreciente, mostrando el resultado en la consola.
function determinarOrden(num1, num2) {
    let resultado = num1 < num2 ? "Creciente" : "Decreciente";
    console.log(`El orden es: ${resultado}`);
}
determinarOrden(5, 10);

// 4. Leer 5 números, calcular su promedio e imprimir el resultado en la consola.
function calcularPromedio(num1, num2, num3, num4, num5) {
    let suma = num1 + num2 + num3 + num4 + num5;
    let promedio = suma / 5;
    console.log(`Promedio: ${promedio}`);
}
calcularPromedio(1.0, 2.0, 3.0, 4.0, 5.0);

// 5. Calcular la suma de los N primeros números naturales e imprimir el resultado en la consola.
function sumaPrimerosN(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;
    }
    console.log(`Suma de los primeros ${n} números naturales: ${suma}`);
}
sumaPrimerosN(10);

// 6. Escribir los primeros N números pares e imprimirlos en la consola.
function escribirPares(limite) {
    let pares = [];
    for (let i = 1; i <= limite; i++) {
        pares.push(i * 2);
    }
    console.log(`Los primeros ${limite} números pares son: ${pares.join(", ")}`);
}
escribirPares(10);

// 7. Escribir los primeros N números impares e imprimirlos en la consola.
function escribirImpares(limite) {
    let impares = [];
    for (let i = 1; i <= limite; i++) {
        impares.push(i * 2 - 1);
    }
    console.log(`Los primeros ${limite} números impares son: ${impares.join(", ")}`);
}
escribirImpares(10);

// 8. Sumar N números e imprimir el resultado en la consola.
function sumarNumeros(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    console.log(`Suma de los ${numeros.length} números: ${suma}`);
}
sumarNumeros([10, 20, 30, 40, 50]);

// 9. Sumar N números usando reduce e imprimir el resultado en la consola.
function sumarNNumeros(numeros) {
    let suma = numeros.reduce((acc, val) => acc + val, 0);
    console.log(`Suma de los ${numeros.length} números: ${suma}`);
}
sumarNNumeros([10, 20, 30, 40, 50]);

// 10. Operar con dos números según la operación especificada e imprimir el resultado en la consola.
function operar(num1, num2, operacion) {
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
            resultado = num2 !== 0 ? num1 / num2 : "No se puede dividir por cero";
            break;
        default:
            resultado = "Operación no válida";
    }
    console.log(`Resultado de ${operacion}: ${resultado}`);
}
operar(10, 5, "sumar");

// 11. Sumar N números pares e imprimir el resultado en la consola.
function sumarNPares(n) {
    let suma = 0;
    let numero = 2;
    for (let i = 0; i < n; i++) {
        suma += numero;
        numero += 2;
    }
    console.log(`Suma de los primeros ${n} números pares: ${suma}`);
}
sumarNPares(5);

// 12. Sumar los N primeros pares e imprimir el resultado en la consola.
function sumarNPrimerosPares(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += 2 * i;
    }
    console.log(`Suma de los primeros ${n} números pares: ${suma}`);
}
sumarNPrimerosPares(5);

// 13. Sumar los N primeros impares e imprimir el resultado en la consola.
function sumarNImpares(n) {
    let suma = 0;
    for (let i = 0; i < n; i++) {
        suma += (2 * i) + 1;
    }
    console.log(`Suma de los primeros ${n} números impares: ${suma}`);
}
sumarNImpares(5);

// 14. Sumar los N primeros impares usando una función reutilizable e imprimir el resultado en la consola.
function sumarNPrimerosImpares(n) {
    return sumarNImpares(n); // Reutiliza la función anterior
}
sumarNPrimerosImpares(5);

// 15. Sumar los N primeros múltiplos de 3 e imprimir el resultado en la consola.
function sumarNPrimerosMultiplosDe3(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += 3 * i;
    }
    console.log(`Suma de los primeros ${n} múltiplos de 3: ${suma}`);
}
sumarNPrimerosMultiplosDe3(5);

// Función adicional para encontrar la palabra más larga en una frase.
function palabraMasLarga(frase) {
    let palabras = frase.split(' ');
    let palabraLarga = "";
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].length > palabraLarga.length) {
            palabraLarga = palabras[i];
        }
    }
    console.log(`La palabra más larga es: ${palabraLarga}`);
}
palabraMasLarga("Esta es una frase de ejemplo para encontrar la palabra más larga");
